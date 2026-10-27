// Authentic Curated Destination Highlights and Plans for Fallback Mode
export const DESTINATION_ITINERARIES = {
  "japan": [
    {
      placeName: "Senso-ji Temple and Asakusa",
      title: "Ancient Temples and Historic Asakusa Streets",
      morning: "Pass through the colossal Kaminarimon Gate early to explore Senso-ji, Tokyo's oldest temple, and light incense for good fortune.",
      afternoon: "Sample freshly made ningyo-yaki sweets and matcha soft serve along the traditional Nakamise-dori shopping promenade.",
      evening: "Take a scenic Sumida River boat cruise towards Odaiba to view the illuminated Rainbow Bridge and waterfront skyline.",
      lunch: { dish: "Asakusa Tempura Tendon", desc: "Crisp jumbo shrimp and lotus root tempura draped over hot steamed rice with sweet tare glaze." },
      dinner: { dish: "Edomae Nigiri Sushi", desc: "Fresh seasonal cuts of tuna and sea bream hand-pressed over warm seasoned sushi rice." },
      costWeight: 0.95
    },
    {
      placeName: "Shibuya Crossing and Meiji Shrine",
      title: "Sacred Forest Sanctuaries and Cyberpunk Shibuya",
      morning: "Wander through the towering cedar forests of Meiji Jingu shrine, witnessing traditional shinto wedding processions and sake barrels.",
      afternoon: "Dive into colorful Harajuku Takeshita Street fashion boutiques, then brave the world-famous Shibuya Scramble Crossing.",
      evening: "Elevate your evening at Shibuya Sky rooftop observatory for 360-degree neon views, followed by dinner in Nonbei Yokocho alley.",
      lunch: { dish: "Tonkotsu Chashu Ramen", desc: "Rich 16-hour pork marrow broth with springy noodles, soft-boiled ajitsuke egg, and braised pork." },
      dinner: { dish: "Charcoal Yakitori Skewers", desc: "Smoky chicken meatballs and scallion skewers glazed in tare sauce inside an atmospheric izakaya." },
      costWeight: 1.15
    },
    {
      placeName: "Fushimi Inari-taisha Kyoto",
      title: "Vermilion Torii Corridors and Geisha Districts",
      morning: "Hike through thousands of vibrant orange torii gates winding up Mount Inari before tourist crowds arrive.",
      afternoon: "Stroll along the stone-paved alleys of Gion, watching for geiko and maiko amidst preserved wooden machiya teahouses.",
      evening: "Savor a peaceful twilight walk along the Shirakawa canal and dine overlooking the gentle Kamo River.",
      lunch: { dish: "Kyoto Kitsune Udon", desc: "Thick wheat noodles in clear dashi broth topped with sweet seasoned fried tofu and scallions." },
      dinner: { dish: "Kyoto Kaiseki Multi-Course", desc: "Artisanal multi-course feast featuring seasonal mountain vegetables, fresh yuba, and sea bream." },
      costWeight: 1.25
    },
    {
      placeName: "Arashiyama Bamboo Grove",
      title: "Whispering Bamboo Forests and Zen Gardens",
      morning: "Walk through the soaring green bamboo forest and visit the serene Tenryu-ji Zen temple gardens.",
      afternoon: "Cross the historic Togetsukyo Bridge and feed wild macaques at Iwatayama Monkey Park with panoramic valley views.",
      evening: "Enjoy a cup of ceremonial Uji matcha tea paired with seasonal wagashi sweets at a riverside garden tea house.",
      lunch: { dish: "Yudofu Simmered Tofu Set", desc: "Delicate artisanal Kyoto tofu simmered in kombu kelp broth with dipping sauces and wild pickles." },
      dinner: { dish: "Wagyu Beef Teppanyaki", desc: "Marbled A5 Wagyu beef seared tableside on iron griddles with roasted garlic chips and wasabi." },
      costWeight: 1.20
    },
    {
      placeName: "Dotonbori Osaka",
      title: "Kitchen of Japan and Neon Night Markets",
      morning: "Explore the historic battlements and lush moats of Osaka Castle, enjoying panoramic views from the keep.",
      afternoon: "Venture through the covered Kuromon Ichiba Market, snacking on grilled giant scallops and wagyu beef skewers.",
      evening: "Pose with the famous Glico Running Man neon sign in Dotonbori while hopping between bustling canal-side food stalls.",
      lunch: { dish: "Osaka Takoyaki", desc: "Piping hot molten batter spheres stuffed with tender octopus, kewpie mayo, and dancing bonito flakes." },
      dinner: { dish: "Okonomiyaki Savory Pancake", desc: "Cabbage, pork belly, and seafood pancake grilled on tabletop hotplates and drizzled with savory sauce." },
      costWeight: 1.05
    }
  ],
  "italy": [
    {
      placeName: "Colosseum Rome",
      title: "Gladiatorial Arenas and Imperial Rome",
      morning: "Step inside the awe-inspiring Flavian Amphitheatre early, walking where gladiators once fought in ancient Rome.",
      afternoon: "Wander through the Roman Forum and Palatine Hill among the ruins of emperors' palaces and triumphant arches.",
      evening: "Cross into Trastevere for a magical sunset stroll through ivy-draped alleys and bustling neighborhood piazzas.",
      lunch: { dish: "Pizza al Taglio", desc: "Crisp Roman-style sheet pizza topped with zucchini blossoms, burrata, and prosciutto cotto." },
      dinner: { dish: "Cacio e Pepe Tonnarelli", desc: "Handmade pasta emulsified with sharp Pecorino Romano and freshly cracked toasted black peppercorns." },
      costWeight: 1.05
    },
    {
      placeName: "Vatican City",
      title: "Vatican Masterpieces and Saint Peter's",
      morning: "Marvel at Michelangelo's breathtaking ceiling frescoes inside the Sistine Chapel and explore the Vatican Museums.",
      afternoon: "Gaze up at the monumental dome of St. Peter's Basilica and climb to the cupola for a bird's-eye view of Rome.",
      evening: "Walk to the Spanish Steps and throw a coin into the Trevi Fountain illuminated against the Roman night sky.",
      lunch: { dish: "Supplì al Telefono", desc: "Crispy fried arborio rice croquettes filled with rich meat ragù and melted stringy mozzarella." },
      dinner: { dish: "Saltimbocca alla Romana", desc: "Tender veal cutlets lined with fresh sage leaves and prosciutto crudo, braised in white wine." },
      costWeight: 1.25
    },
    {
      placeName: "Florence Cathedral Duomo",
      title: "Renaissance Art and Brunelleschi's Dome",
      morning: "Gaze in wonder at the terracotta tiles of Brunelleschi's Duomo and the bronze doors of the Baptistery in Florence.",
      afternoon: "Admire Michelangelo's David at the Accademia Gallery and explore world-renowned masterpieces inside the Uffizi.",
      evening: "Sunset watch over the Arno River from the medieval Ponte Vecchio, followed by artisanal gelato from Vivoli.",
      lunch: { dish: "Panino con Porchetta e Tartufo", desc: "Crusty Tuscan schiacciata bread filled with herb-roasted pork and fragrant truffle cream." },
      dinner: { dish: "Bistecca alla Fiorentina", desc: "Thick Chianina T-bone steak seared over oak embers, dressed with olive oil and sea salt flakes." },
      costWeight: 1.20
    },
    {
      placeName: "Grand Canal Venice",
      title: "Gondolas and Byzantine Palaces of Venice",
      morning: "Glide down the Grand Canal on a vaporetto towards the gold-leaf mosaics of St. Mark's Basilica.",
      afternoon: "Lose yourself across the stone bridges of the Dorsoduro district, browsing authentic Venetian carnival mask ateliers.",
      evening: "Toast with an Aperol Spritz alongside cicchetti tapas at a traditional bacaro tavern beside quiet canals.",
      lunch: { dish: "Cicchetti and Baccalà Mantecato", desc: "Small toasted crustini topped with whipped Venetian salted cod and marinated white anchovies." },
      dinner: { dish: "Seafood Risotto al Nero di Seppia", desc: "Velvety black squid ink risotto studded with tender calamari and fresh Adriatic prawns." },
      costWeight: 1.30
    },
    {
      placeName: "Amalfi Coast Positano",
      title: "Cliffside Pastel Villages and Cobalt Seas",
      morning: "Cruise past Positano's pastel-painted houses cascading down steep limestone cliffs into the sparkling Tyrrhenian Sea.",
      afternoon: "Swim in the azure waters of Marina Grande or hike high above the sea along the legendary Path of the Gods trail.",
      evening: "Dine on cliffside terraces beneath lemon groves, watching the yachts light up the harbor below.",
      lunch: { dish: "Insalata Caprese di Bufala", desc: "Ripe vine tomatoes, thick buffalo mozzarella, fresh basil, and extra virgin Campanian olive oil." },
      dinner: { dish: "Scialatielli ai Frutti di Mare", desc: "Hand-rolled thick ribbon pasta brimming with clams, mussels, shrimp, and sweet datterini tomatoes." },
      costWeight: 1.35
    }
  ],
  "france": [
    {
      placeName: "Eiffel Tower Paris",
      title: "Iron Lady Panorama and Seine River Lights",
      morning: "Ascend the Eiffel Tower early for panoramic morning vistas over Paris, followed by a walk across Champ de Mars.",
      afternoon: "Admire Impressionist masterworks at Musée d'Orsay, then stroll through the blooming Tuileries Garden.",
      evening: "Board an open-top Bateaux Parisiens cruise down the Seine, watching the Eiffel Tower sparkle on the hour.",
      lunch: { dish: "Croque Monsieur at a Parisian Bistro", desc: "Toasted brioche layered with cured ham, creamy béchamel, and melted aged Gruyère cheese." },
      dinner: { dish: "Boeuf Bourguignon", desc: "Prime beef chuck slowly braised in red Burgundy wine with pearl onions, lardons, and button mushrooms." },
      costWeight: 1.15
    },
    {
      placeName: "Louvre Museum",
      title: "Royal Palaces and Mona Lisa Secrets",
      morning: "Enter the Louvre glass pyramid to view the Mona Lisa, the Winged Victory of Samothrace, and Venus de Milo.",
      afternoon: "Walk beneath the Arc de Triomphe and browse flagship luxury boutiques along the grand Champs-Élysées.",
      evening: "Dine at an authentic candlelit Left Bank bistro in Saint-Germain-des-Prés with a bottle of French vintage wine.",
      lunch: { dish: "French Onion Soup Gratinée", desc: "Deeply caramelized onion broth topped with a crusty baguette crouton and melted browned Comté." },
      dinner: { dish: "Duck Confit (Confit de Canard)", desc: "Crispy-skinned slow-cooked duck leg served with garlic-roasted Sarladaise potatoes." },
      costWeight: 1.25
    },
    {
      placeName: "Montmartre Sacre Coeur",
      title: "Bohemian Montmartre and Artists' Squares",
      morning: "Climb the steps of the white-domed Sacré-Cœur basilica for the highest natural panoramic view across Paris.",
      afternoon: "Watch street painters sketch portraits in Place du Tertre, exploring vintage vinyl shops and indie cafes.",
      evening: "Walk past the historic Moulin Rouge in Pigalle and enjoy live acoustic jazz at a subterranean cellar club.",
      lunch: { dish: "Savory Buckwheat Galette", desc: "Thin Brittany crepe filled with country ham, melted emmental cheese, and a sunny-side-up farm egg." },
      dinner: { dish: "Steak Frites Béarnaise", desc: "Seared ribeye steak accompanied by golden crispy frites and rich tarragon-butter béarnaise sauce." },
      costWeight: 1.10
    }
  ]
};

export function getCuratedPlan(countryName, daysCount, avgDailyHome) {
  const clean = (countryName || '').toLowerCase();
  let baseList = DESTINATION_ITINERARIES["japan"];

  for (const k in DESTINATION_ITINERARIES) {
    if (clean.includes(k)) {
      baseList = DESTINATION_ITINERARIES[k];
      break;
    }
  }

  const days = [];
  for (let i = 1; i <= daysCount; i++) {
    const item = baseList[(i - 1) % baseList.length];
    const cost = Math.round(avgDailyHome * item.costWeight);
    days.push({
      day: i,
      title: item.title,
      placeName: item.placeName,
      morning: item.morning,
      afternoon: item.afternoon,
      evening: item.evening,
      lunchRecommendation: item.lunch,
      dinnerRecommendation: item.dinner,
      estimatedCostHome: cost,
      costBreakdown: {
        stay: Math.round(cost * 0.45),
        food: Math.round(cost * 0.30),
        activities: Math.round(cost * 0.15),
        transit: Math.round(cost * 0.10)
      }
    });
  }

  return days;
}
