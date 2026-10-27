import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Send, 
  Bot, 
  User, 
  Calendar, 
  Coins, 
  CloudSun, 
  UtensilsCrossed, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Image as ImageIcon,
  Coffee,
  Moon,
  Sun,
  Camera,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateItineraryPlan } from './apiService';

const DEFAULT_WELCOME = {
  id: 'welcome',
  sender: 'bot',
  text: "👋 Hello! I am your AI Travel Specialist powered by Gemini AI. Tell me about your dream vacation! You can mention the destination, how many days, your travel month, and total budget (e.g., 'Plan a 5-day trip to Japan in April with a $1500 USD budget').",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export default function App() {
  // Load persistent chat and itinerary from localStorage so refresh doesn't wipe history
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('wanderai_messages');
      return saved ? JSON.parse(saved) : [DEFAULT_WELCOME];
    } catch {
      return [DEFAULT_WELCOME];
    }
  });

  const [tripForm, setTripForm] = useState(() => {
    try {
      const saved = localStorage.getItem('wanderai_tripform');
      return saved ? JSON.parse(saved) : {
        country: 'Japan',
        days: 5,
        month: 'April',
        budget: 1500,
        homeCurrency: 'USD'
      };
    } catch {
      return {
        country: 'Japan',
        days: 5,
        month: 'April',
        budget: 1500,
        homeCurrency: 'USD'
      };
    }
  });

  const [itinerary, setItinerary] = useState(() => {
    try {
      const saved = localStorage.getItem('wanderai_itinerary');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('itinerary'); // 'itinerary' | 'cost' | 'meals' | 'weather'
  
  const chatEndRef = useRef(null);

  // Sync state to localStorage for persistence across reloads
  useEffect(() => {
    try {
      localStorage.setItem('wanderai_messages', JSON.stringify(messages));
    } catch (e) {
      console.warn("Storage quota exceeded or error:", e);
    }
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem('wanderai_tripform', JSON.stringify(tripForm));
    } catch (e) {}
  }, [tripForm]);

  useEffect(() => {
    try {
      if (itinerary) {
        localStorage.setItem('wanderai_itinerary', JSON.stringify(itinerary));
      }
    } catch (e) {}
  }, [itinerary]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isGenerating]);

  // Clear chat history
  const handleClearHistory = () => {
    if (window.confirm("Start a new trip conversation? (This will reset the current chat)")) {
      setMessages([DEFAULT_WELCOME]);
      setItinerary(null);
      localStorage.removeItem('wanderai_messages');
      localStorage.removeItem('wanderai_itinerary');
    }
  };

  // Parse natural language and orchestrate all APIs
  const parseQueryAndPlan = async (userText) => {
    let detectedCountry = tripForm.country;
    let detectedDays = tripForm.days;
    let detectedMonth = tripForm.month;
    let detectedBudget = tripForm.budget;
    let detectedCurrency = tripForm.homeCurrency;

    const lower = userText.toLowerCase();

    // Days match
    const daysMatch = lower.match(/(\d+)\s*(?:day|days)/);
    if (daysMatch) detectedDays = parseInt(daysMatch[1]);

    // Budget match
    const budgetMatch = lower.match(/(?:\$|usd|eur|inr|gbp)?\s*(\d+[\d,]*)\s*(?:usd|eur|inr|gbp|dollars|budget)?/i);
    if (budgetMatch) {
      const val = parseInt(budgetMatch[1].replace(/,/g, ''));
      if (val > 100) detectedBudget = val;
    }

    // Currency match
    if (lower.includes('inr') || lower.includes('rupee')) detectedCurrency = 'INR';
    else if (lower.includes('eur') || lower.includes('euro')) detectedCurrency = 'EUR';
    else if (lower.includes('gbp') || lower.includes('pound')) detectedCurrency = 'GBP';
    else if (lower.includes('usd') || lower.includes('dollar')) detectedCurrency = 'USD';

    // Months match
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    for (const m of months) {
      if (lower.includes(m)) {
        detectedMonth = m.charAt(0).toUpperCase() + m.slice(1);
        break;
      }
    }

    // Country match
    const popular = ["japan", "italy", "france", "mexico", "spain", "canada", "united states", "usa", "uk", "united kingdom", "india", "thailand", "china", "greece", "turkey"];
    for (const c of popular) {
      if (lower.includes(c)) {
        detectedCountry = c.charAt(0).toUpperCase() + c.slice(1);
        break;
      }
    }

    const updatedForm = {
      country: detectedCountry,
      days: detectedDays,
      month: detectedMonth,
      budget: detectedBudget,
      homeCurrency: detectedCurrency
    };
    setTripForm(updatedForm);

    setIsGenerating(true);
    try {
      const plan = await generateItineraryPlan({
        country: updatedForm.country,
        days: updatedForm.days,
        month: updatedForm.month,
        budget: updatedForm.budget,
        homeCurrency: updatedForm.homeCurrency
      });

      setItinerary(plan);
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.6 }
      });

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: `🎉 Your bespoke **${updatedForm.days}-Day itinerary for ${plan.countryInfo.name} in ${updatedForm.month}** is ready!

📸 **Photos Added:** High-definition landmark photos retrieved from Wikipedia Commons API.
🍜 **Cuisine Curation:** Daily Lunch & Dinner recommendations added from regional specialties and TheMealDB.
💰 **Dynamic Cost Tracking:** Individual day-by-day cost estimations with living, dining, and transit breakdowns via Frankfurter (${updatedForm.homeCurrency} ${updatedForm.budget} ≈ ${plan.countryInfo.currency} ${plan.convertedBudget}).
☀️ **Forecast:** ${plan.weather.condition} (~${plan.weather.currentTemp}°C) via Open-Meteo.

Check out the full itinerary on the right!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: "⚠️ Something unexpected happened while generating the itinerary. Please try again.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isGenerating) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const textToProcess = inputMessage;
    setInputMessage('');

    parseQueryAndPlan(textToProcess);
  };

  const triggerManualPlan = () => {
    setIsGenerating(true);
    const planText = `Plan a ${tripForm.days}-day trip to ${tripForm.country} in ${tripForm.month} with budget of ${tripForm.homeCurrency} ${tripForm.budget}.`;
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'user',
        text: planText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    parseQueryAndPlan(planText);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Top Header */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 text-white">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              WanderAI • Smart Travel Companion
            </h1>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              Powered by <span className="text-cyan-400 font-medium">Gemini 2.5 Flash</span> • Frankfurter • Open-Meteo • TheMealDB • Wiki Photos
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearHistory}
            title="Reset conversation"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-rose-950 hover:border-rose-700 text-slate-300 hover:text-rose-300 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Trip</span>
          </button>
        </div>
      </header>

      {/* Main Container: Split View (Chatbot Left, Itinerary / Insights Right) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Section: AI Chatbot */}
        <section className="w-full md:w-[420px] lg:w-[460px] flex flex-col border-r border-slate-800 bg-slate-900/40 relative shrink-0">
          {/* Quick Param Editor */}
          <div className="p-3 border-b border-slate-800 bg-slate-900/60 text-xs">
            <div className="flex items-center justify-between text-slate-400 font-semibold mb-2">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" /> Quick Trip Form
              </span>
              <button 
                onClick={triggerManualPlan}
                disabled={isGenerating}
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-bold"
              >
                Auto-Plan <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[10px] text-slate-500 uppercase">Destination</label>
                <input 
                  type="text" 
                  value={tripForm.country} 
                  onChange={(e) => setTripForm({...tripForm, country: e.target.value})}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-cyan-500 text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 uppercase">Duration</label>
                <select 
                  value={tripForm.days} 
                  onChange={(e) => setTripForm({...tripForm, days: parseInt(e.target.value)})}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-cyan-500 text-xs"
                >
                  {[3, 4, 5, 7, 10, 14].map(d => (
                    <option key={d} value={d}>{d} Days</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] text-slate-500 uppercase">Month</label>
                <select 
                  value={tripForm.month} 
                  onChange={(e) => setTripForm({...tripForm, month: e.target.value})}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-cyan-500 text-xs"
                >
                  {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <label className="text-[10px] text-slate-500 uppercase">Budget Amount</label>
                <input 
                  type="number" 
                  value={tripForm.budget} 
                  onChange={(e) => setTripForm({...tripForm, budget: parseFloat(e.target.value) || 0})}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-cyan-500 text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 uppercase">Your Currency</label>
                <select 
                  value={tripForm.homeCurrency} 
                  onChange={(e) => setTripForm({...tripForm, homeCurrency: e.target.value})}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-cyan-500 text-xs"
                >
                  {["USD", "EUR", "GBP", "INR", "CAD", "AUD", "JPY"].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div 
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none' 
                      : 'bg-slate-800/90 border border-slate-700/80 text-slate-200 rounded-tl-none whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                  <div className={`text-[10px] mt-1.5 opacity-60 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </div>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center shrink-0 text-indigo-300">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isGenerating && (
              <div className="flex gap-3 items-center text-slate-400 text-xs italic">
                <div className="w-8 h-8 rounded-full bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-cyan-400 animate-spin" />
                </div>
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl px-4 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  Consulting Gemini 2.5, Wikipedia Photos, Frankfurter, Open-Meteo & TheMealDB...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-900/90 flex gap-2">
            <input 
              type="text" 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything (e.g. 5 days in France in Sept with $1400 USD)..."
              disabled={isGenerating}
              className="flex-1 bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
            />
            <button 
              type="submit"
              disabled={isGenerating || !inputMessage.trim()}
              className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white rounded-xl shadow-md shadow-cyan-500/20 transition flex items-center justify-center cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </section>

        {/* Right Section: Itinerary, Cost Breakdown & API Widgets */}
        <section className="flex-1 flex flex-col bg-slate-950 overflow-y-auto">
          {!itinerary ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-2xl text-cyan-400">
                <Compass className="w-10 h-10 animate-bounce" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-2">Ready to Plan Your Next Adventure?</h2>
              <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                Type your desired travel destination, month, budget, and trip length in the chatbot, or use the quick form to auto-generate your full itinerary with real photos & dining recommendations.
              </p>
              <div className="flex flex-wrap justify-center gap-2 max-w-lg">
                {[
                  "Plan a 5-day trip to Japan in April with $1500 USD",
                  "7 days in Italy in June, budget €1800",
                  "4 days in France in September budget $1200",
                  "5 days in Thailand in December with $1000"
                ].map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputMessage(sample);
                    }}
                    className="text-xs px-3 py-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 rounded-xl transition cursor-pointer"
                  >
                    ✨ "{sample}"
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6 max-w-5xl mx-auto w-full space-y-6">
              <div className="space-y-6 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                {/* Header Summary Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800/70 to-slate-900 border border-slate-700/60 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
                        <MapPin className="w-3.5 h-3.5" /> {itinerary.countryInfo.name} ({itinerary.countryInfo.capital})
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {itinerary.daysCount}-Day Adventure in {itinerary.countryInfo.name}
                      </h2>
                      <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                        {itinerary.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-right">
                        <div className="text-[10px] uppercase tracking-wider text-slate-400">Total Budget</div>
                        <div className="text-lg font-bold text-emerald-400">
                          {itinerary.homeCurrency} {itinerary.numBudget}
                        </div>
                        <div className="text-xs text-slate-400">
                          ≈ {itinerary.countryInfo.currency} {itinerary.convertedBudget}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Strip */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">Key Highlights:</span>
                    {itinerary.highlights?.map((h, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-cyan-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 API Data Widgets Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Widget 1: Frankfurter Currency Exchange & Daily Cost */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        <Coins className="w-4 h-4 text-amber-400" /> Frankfurter Currency
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-mono">
                        1 {itinerary.homeCurrency} = {itinerary.exchange.rate} {itinerary.countryInfo.currency}
                      </span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {itinerary.countryInfo.currency} {itinerary.avgDailyLocal}
                        <span className="text-xs font-normal text-slate-400"> / avg day</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        ~{itinerary.homeCurrency} {itinerary.avgDailyHome} base daily allowance (fluctuates dynamically by day).
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
                      <span>Rate Date: {itinerary.exchange.date}</span>
                      <span className="text-emerald-400">Dynamic Scale</span>
                    </div>
                  </div>

                  {/* Widget 2: Dual Weather (Open-Meteo + wttr.in) */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        <CloudSun className="w-4 h-4 text-sky-400" /> Open-Meteo & wttr.in
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-400/10 text-sky-300">
                        {tripForm.month} Forecast
                      </span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white flex items-center gap-2">
                        {itinerary.weather.currentTemp}°C
                        <span className="text-sm font-normal text-slate-300">({itinerary.weather.condition})</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Feels like {itinerary.weather.feelsLike}°C • Humidity: {itinerary.weather.humidity}% • Rain: {itinerary.weather.rainChance}%
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
                      <span>Coords: {itinerary.countryInfo.lat.toFixed(2)}, {itinerary.countryInfo.lon.toFixed(2)}</span>
                      <span className="text-cyan-400">Dual Weather Feed</span>
                    </div>
                  </div>

                  {/* Widget 3: TheMealDB + Curated Gastronomy Teaser */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        <UtensilsCrossed className="w-4 h-4 text-rose-400" /> Local Flavors & Meals
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-400/10 text-rose-300">
                        {itinerary.countryInfo.area}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white truncate">
                        {itinerary.signatureDishes?.[0]?.name || itinerary.meals?.[0]?.strMeal || 'Authentic Gastronomy'}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {itinerary.diningCulture || 'Authentic curated dining dishes'}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
                      <span>{itinerary.signatureDishes?.length || 6} Curated Specialties</span>
                      <span className="text-rose-400">See Menu</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs for Details */}
                <div className="flex border-b border-slate-800 gap-6 text-sm font-medium">
                  <button
                    onClick={() => setActiveTab('itinerary')}
                    className={`pb-3 border-b-2 flex items-center gap-2 transition cursor-pointer ${
                      activeTab === 'itinerary' 
                        ? 'border-cyan-400 text-cyan-400' 
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Calendar className="w-4 h-4" /> Day-by-Day Detailed Itinerary (with Photos & Food)
                  </button>
                  <button
                    onClick={() => setActiveTab('cost')}
                    className={`pb-3 border-b-2 flex items-center gap-2 transition cursor-pointer ${
                      activeTab === 'cost' 
                        ? 'border-emerald-400 text-emerald-400' 
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" /> Dynamic Daily Cost Breakdown
                  </button>
                  <button
                    onClick={() => setActiveTab('meals')}
                    className={`pb-3 border-b-2 flex items-center gap-2 transition cursor-pointer ${
                      activeTab === 'meals' 
                        ? 'border-rose-400 text-rose-400' 
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <UtensilsCrossed className="w-4 h-4" /> Authentic Regional Cuisines & TheMealDB
                  </button>
                </div>

                {/* Tab Content 1: Day-by-Day Itinerary with Real Photos and Lunch/Dinner Recommendations */}
                {activeTab === 'itinerary' && (
                  <div className="space-y-6">
                    {itinerary.days?.map((d) => (
                      <div 
                        key={d.day}
                        className="rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl overflow-hidden hover:border-slate-700 transition"
                      >
                        {/* Day Card Header with Landmark Photo */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
                          <img 
                            src={d.photoUrl} 
                            alt={d.placeName || d.title}
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.currentTarget.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                          
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
                              <Camera className="w-3.5 h-3.5" /> {d.placeName || itinerary.countryInfo.name}
                            </span>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2">
                            <div>
                              <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Day {d.day} Exploration</div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{d.title}</h3>
                            </div>
                            <div className="text-right bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700">
                              <span className="text-[10px] text-slate-400 block uppercase">Est. Day Spend</span>
                              <span className="text-sm font-bold text-emerald-400 font-mono">
                                {itinerary.countryInfo.currency} {d.estimatedCostLocal} (~{itinerary.homeCurrency} {d.estimatedCostHome})
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Timeline Activities */}
                        <div className="p-5 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                              <div className="font-semibold text-amber-400 flex items-center gap-1.5">
                                <Sun className="w-4 h-4" /> Morning Itinerary
                              </div>
                              <p className="text-slate-300 leading-relaxed">{d.morning}</p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                              <div className="font-semibold text-sky-400 flex items-center gap-1.5">
                                <CloudSun className="w-4 h-4" /> Afternoon Exploration
                              </div>
                              <p className="text-slate-300 leading-relaxed">{d.afternoon}</p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                              <div className="font-semibold text-indigo-400 flex items-center gap-1.5">
                                <Moon className="w-4 h-4" /> Evening & Nightlife
                              </div>
                              <p className="text-slate-300 leading-relaxed">{d.evening}</p>
                            </div>
                          </div>

                          {/* Specific Lunch & Dinner Culinary Highlights for this Day */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20 flex gap-3 items-start">
                              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
                                <Coffee className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Recommended Lunch</span>
                                <h4 className="text-sm font-bold text-white">{d.lunchRecommendation?.dish || "Local Chef's Table"}</h4>
                                <p className="text-xs text-slate-300 mt-0.5">{d.lunchRecommendation?.desc || "Fresh regional specialty prepared with seasonal local produce."}</p>
                              </div>
                            </div>

                            <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-500/10 to-purple-500/5 border border-rose-500/20 flex gap-3 items-start">
                              <div className="p-2 rounded-lg bg-rose-500/20 text-rose-300 shrink-0">
                                <UtensilsCrossed className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">Recommended Dinner</span>
                                <h4 className="text-sm font-bold text-white">{d.dinnerRecommendation?.dish || "Evening Traditional Feast"}</h4>
                                <p className="text-xs text-slate-300 mt-0.5">{d.dinnerRecommendation?.desc || "Authentic dinner experience in a historic neighborhood restaurant."}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Insider Tip Box */}
                    {itinerary.insiderTip && (
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                        <div>
                          <strong className="font-semibold text-amber-300">Insider Traveler Tip: </strong>
                          {itinerary.insiderTip}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab Content 2: Dynamic Daily Cost Breakdown */}
                {activeTab === 'cost' && (
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                        <Coins className="w-5 h-5 text-emerald-400" />
                        Dynamic Daily Cost Breakdown ({itinerary.homeCurrency} & {itinerary.countryInfo.currency})
                      </h3>
                      <p className="text-xs text-slate-400 mb-6">
                        Unlike fixed percentages, costs dynamically shift per day based on museum passes, excursions, dining caliber, and hotel tier in that specific landmark area.
                      </p>

                      {/* Day by Day Cost Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-slate-800 text-slate-400 uppercase font-semibold">
                              <th className="py-2.5 px-3">Day / Landmark</th>
                              <th className="py-2.5 px-3">Stay</th>
                              <th className="py-2.5 px-3">Food & Dining</th>
                              <th className="py-2.5 px-3">Activities</th>
                              <th className="py-2.5 px-3">Transit</th>
                              <th className="py-2.5 px-3 text-right">Day Total ({itinerary.homeCurrency})</th>
                              <th className="py-2.5 px-3 text-right">Local Total ({itinerary.countryInfo.currency})</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60 text-slate-200">
                            {itinerary.days?.map((d) => (
                              <tr key={d.day} className="hover:bg-slate-800/40 transition">
                                <td className="py-3 px-3 font-semibold text-white">
                                  <span className="text-cyan-400 mr-1.5 font-bold">Day {d.day}:</span>
                                  {d.placeName || d.title}
                                </td>
                                <td className="py-3 px-3 text-slate-300">{itinerary.homeCurrency} {d.costBreakdown?.stay}</td>
                                <td className="py-3 px-3 text-amber-300">{itinerary.homeCurrency} {d.costBreakdown?.food}</td>
                                <td className="py-3 px-3 text-sky-300">{itinerary.homeCurrency} {d.costBreakdown?.activities}</td>
                                <td className="py-3 px-3 text-slate-400">{itinerary.homeCurrency} {d.costBreakdown?.transit}</td>
                                <td className="py-3 px-3 font-bold text-emerald-400 text-right">
                                  {itinerary.homeCurrency} {d.estimatedCostHome}
                                </td>
                                <td className="py-3 px-3 font-bold text-slate-200 text-right font-mono">
                                  {itinerary.countryInfo.currency} {d.estimatedCostLocal}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs space-y-2">
                        <div className="font-semibold text-slate-300">Frankfurter Live Currency Peg:</div>
                        <p className="text-slate-400">
                          Conversion Rate: 1 {itinerary.homeCurrency} = <strong className="text-white">{itinerary.exchange.rate} {itinerary.countryInfo.currency}</strong> (Official European Central Bank benchmark). Total planned: <strong className="text-emerald-400">{itinerary.countryInfo.currency} {itinerary.convertedBudget}</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 3: TheMealDB + Curated Gastronomy Database */}
                {activeTab === 'meals' && (
                  <div className="space-y-6">
                    {/* Section 1: Visual Culinary Specialties with Real Food Photos */}
                    <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <UtensilsCrossed className="w-5 h-5 text-rose-400" />
                          Signature National Cuisines & Street Foods ({itinerary.countryInfo.name})
                        </h3>
                        {itinerary.diningCulture && (
                          <span className="text-xs text-rose-300 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 max-w-md truncate">
                            {itinerary.diningCulture}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-6">
                        Authentic, world-renowned local dishes with exact origins, key ingredients, culinary descriptions, and real-time street and restaurant prices.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {itinerary.signatureDishes?.map((dish, i) => (
                          <div key={i} className="rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-800/90 shadow-md flex flex-col justify-between group hover:border-slate-700 transition">
                            {dish.photoUrl && (
                              <div className="h-44 w-full overflow-hidden relative bg-slate-900">
                                <img 
                                  src={dish.photoUrl} 
                                  alt={dish.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                  onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                                  {dish.origin || itinerary.countryInfo.name}
                                </span>
                                <span className="absolute bottom-2.5 right-2.5 text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                                  {dish.category || dish.course}
                                </span>
                              </div>
                            )}
                            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                              <div>
                                <h4 className="text-sm font-bold text-white mb-1.5">{dish.name}</h4>
                                <p className="text-xs text-slate-300 leading-relaxed mb-3">{dish.desc}</p>
                                
                                {dish.ingredients && dish.ingredients.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 mb-2">
                                    {dish.ingredients.slice(0, 4).map((ing, idx) => (
                                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                                        {ing}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div className="text-[11px] font-mono text-emerald-400 pt-2.5 border-t border-slate-800/80 flex justify-between items-center">
                                <span className="text-slate-500">Typical Price:</span>
                                <strong>{dish.priceLocal || dish.priceUSD || "Local Price"}</strong>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 2: TheMealDB Recipe Database */}
                    {itinerary.meals && itinerary.meals.length > 0 && (
                      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                            <ImageIcon className="w-4 h-4 text-cyan-400" />
                            TheMealDB Interactive Recipe Catalog ({itinerary.countryInfo.area} Heritage)
                          </h3>
                          <span className="text-xs text-cyan-400 font-mono">Live API Feed</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                          {itinerary.meals.map((m) => (
                            <div 
                              key={m.idMeal}
                              className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm group hover:border-slate-700 transition"
                            >
                              <div className="h-24 w-full overflow-hidden relative">
                                <img 
                                  src={m.strMealThumb} 
                                  alt={m.strMeal}
                                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                              </div>
                              <div className="p-2">
                                <h4 className="text-[11px] font-bold text-white truncate">{m.strMeal}</h4>
                                <span className="inline-block mt-0.5 text-[9px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                                  {itinerary.countryInfo.area}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
