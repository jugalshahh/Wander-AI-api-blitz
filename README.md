# 🌍 WanderAI • Smart Travel Companion

> An intelligent, multi-API travel planning web application powered by **Google Gemini AI**, real-time currency conversion (**Frankfurter API**), live global weather forecasts (**Open-Meteo API**), culinary discovery (**TheMealDB API** + Gastronomy AI), and landmark imagery (**Wikipedia API**).

---

Deployed Link : https://wanderai-six.vercel.app/

## 📸 Overview & Key Features

WanderAI allows users to interact with a conversational AI travel specialist or use an intuitive Quick Form to design bespoke vacation plans. 

- 💬 **Interactive AI Travel Specialist:**
  - Natural conversation interface powered by **Google Gemini 3.5 Flash Lite**.
  - Natural language parser that automatically extracts the destination country, trip length, travel month, and total budget/currency.
  - Full session persistence in `localStorage` so chat history and itineraries are preserved across browser refreshes.

- 🗺️ **Detailed Day-by-Day Itineraries:**
  - Multi-paragraph morning, afternoon, and evening timelines for every single day.
  - Dedicated landmark photo for each day, dynamically fetched from the **Wikipedia Commons Search API**.
  - Tailored **Recommended Lunch** and **Recommended Dinner** highlights for every day.
  - Actionable **Insider Traveler Tips** to beat tourist lines and save on transit.

- 💰 **Dynamic Daily Cost Breakdown (Frankfurter API):**
  - Live currency conversion between the user's home currency (USD, EUR, GBP, INR, CAD, AUD, etc.) and the destination country's local currency using the **Frankfurter API**.
  - Day-by-day expense weighting reflecting real-world destination prices (accommodation, dining, activities, and transit).

- ☀️ **Real-Time Weather Forecasting (Open-Meteo API):**
  - High-resolution climate sensor data fetched directly from **Open-Meteo** using latitude and longitude coordinates.
  - Displays current temperature, perceived conditions, min/max ranges, humidity, and precipitation probability.

- 🍲 **Curated Gastronomy & Recipe Catalog (TheMealDB API):**
  - Multi-source culinary engine discovering authentic national dishes, regional origins, flavor profiles, and local price benchmarks.
  - Dedicated visual recipe catalog powered by **TheMealDB API**.

---

## 🛠️ Integrated APIs

| API | Purpose | Documentation / Endpoint | Key Required? |
| :--- | :--- | :--- | :--- |
| **Google Gemini API** (`gemini-3.5-flash-lite`) | AI Itinerary Generation, Travel Guides & Food Curation | `https://generativelanguage.googleapis.com` | ✅ Yes |
| **Frankfurter API** | Real-time foreign exchange rates & currency conversion | `https://api.frankfurter.dev/v2` | ❌ Free / Public |
| **Open-Meteo API** | High-resolution hourly & daily weather forecasting | `https://api.open-meteo.com/v1/forecast` | ❌ Free / Public |
| **TheMealDB API** | Regional authentic recipes & dish thumbnails | `https://www.themealdb.com/api/json/v1/1` | ❌ Free / Test Key `1` |
| **Wikipedia / Wikimedia API** | High-definition destination & landmark photos | `https://en.wikipedia.org/w/api.php` | ❌ Free / Public |

---

## 📁 Project Architecture

```
mstc/
├── src/
│   ├── App.jsx              # Main React container, Split Chat & Itinerary Dashboard
│   ├── apiService.js        # API orchestration (Gemini, Frankfurter, Open-Meteo, TheMealDB)
│   ├── countryData.js       # Country registry (Coordinates, currencies, capitals)
│   ├── cuisineService.js    # Regional gastronomy database (Dishes, origins, price benchmarks)
│   ├── imageService.js      # Wikipedia search & high-res image scraper
│   ├── planRegistry.js      # Curated fallback destination itineraries
│   ├── index.css            # Tailwind CSS styling and glassmorphism themes
│   └── main.jsx             # React entry point
├── .env                     # Environment variables (Gemini API key)
├── vite.config.js           # Vite configuration with Tailwind CSS plugin
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd mstc
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   A `.env` file should be present in the root folder with your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```


---

## 🧪 Build for Production

To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 💡 Example Queries to Try in the Chatbot

- *"Plan a 5-day trip to Japan in April with a $1500 USD budget"*
- *"7 days in Italy in June, budget €1800"*
- *"4 days in France in September with $1200 budget"*
- *"5 days in India in November with ₹80000 budget"*
- *"5 days in Mexico in December with $1000 USD"*

---

## 📜 License
This project is open-source and built for educational and travel planning purposes.
