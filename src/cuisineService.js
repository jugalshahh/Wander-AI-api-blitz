// Curated Culinary Database for Destinations worldwide with authentic dishes, ingredients & prices
export const DESTINATION_CUISINES = {
  "japan": {
    diningCulture: "Obsessive craftsmanship, seasonal ingredients, and omotenashi (mindful hospitality).",
    signatureDishes: [
      {
        name: "Tonkotsu Chashu Ramen",
        category: "Noodles & Broth",
        course: "Lunch / Dinner",
        origin: "Fukuoka, Kyushu",
        desc: "Silky, 16-hour simmered pork bone broth with firm thin noodles, melt-in-your-mouth braised pork belly chashu, and a marinated soft-boiled egg.",
        ingredients: ["Pork bone broth", "Chashu pork", "Ajitsuke egg", "Ramen noodles", "Wood ear mushrooms"],
        priceLocal: "¥950 - ¥1,400",
        priceUSD: "$6.50 - $9.50"
      },
      {
        name: "Edomae Nigiri Sushi",
        category: "Sushi & Sashimi",
        course: "Dinner",
        origin: "Tokyo",
        desc: "Precision-sliced seasonal seafood (Otoro fatty tuna, sea urchin, and sweet red sea bream) pressed atop warm seasoned koshihikari rice with fresh grated wasabi.",
        ingredients: ["Bluefin tuna", "Akazu seasoned rice", "Fresh wasabi", "Nikiri soy glaze"],
        priceLocal: "¥3,000 - ¥6,500",
        priceUSD: "$20.00 - $44.00"
      },
      {
        name: "Crispy Tempura Moriawase",
        category: "Crispy Classics",
        course: "Lunch",
        origin: "Tokyo / Kyoto",
        desc: "Ultra-light, golden battered tiger prawns, sweet pumpkin, and shiso leaves fried in pure sesame oil, served with dashi dipping sauce and grated daikon.",
        ingredients: ["Tiger prawns", "Kabocha pumpkin", "Shiso leaf", "Tentsuyu dashi", "Grated radish"],
        priceLocal: "¥1,300 - ¥2,200",
        priceUSD: "$9.00 - $15.00"
      },
      {
        name: "Osaka Street Takoyaki",
        category: "Street Food",
        course: "Snack / Light Meal",
        origin: "Osaka",
        desc: "Crispy-edged spherical batter balls molten on the inside, filled with tender octopus chunks, painted with sweet-savory brown glaze and Japanese mayo.",
        ingredients: ["Boiled octopus", "Dashi batter", "Bonito flakes", "Aonori seaweed", "Takoyaki sauce"],
        priceLocal: "¥600 - ¥850",
        priceUSD: "$4.00 - $6.00"
      },
      {
        name: "Charcoal-Grilled Yakitori",
        category: "Izakaya Skewers",
        course: "Dinner",
        origin: "Tokyo / Osaka",
        desc: "Skewers of free-range chicken thighs, scallions, and tender meatballs glazed with house-aged tare sauce and grilled over binchotan white charcoal.",
        ingredients: ["Chicken thigh", "Tokyo negi scallion", "Binchotan charcoal", "Sweet tare glaze"],
        priceLocal: "¥1,800 - ¥3,200",
        priceUSD: "$12.00 - $22.00"
      },
      {
        name: "Uji Matcha Parfait & Wagashi",
        category: "Dessert & Tea",
        course: "Afternoon Snack",
        origin: "Kyoto",
        desc: "Artisanal Kyoto green tea soft serve layered with chewy shiratama mochi, sweet azuki bean paste, matcha jelly, and crispy rice crisps.",
        ingredients: ["First-harvest Uji matcha", "Shiratama mochi", "Sweet azuki red beans", "Matcha jelly"],
        priceLocal: "¥850 - ¥1,300",
        priceUSD: "$6.00 - $9.00"
      }
    ]
  },
  "italy": {
    diningCulture: "Slow-food philosophy, reverence for pure local ingredients, and lively multi-course feasts.",
    signatureDishes: [
      {
        name: "Spaghetti alla Carbonara",
        category: "Pasta Masterpiece",
        course: "Lunch / Dinner",
        origin: "Rome, Lazio",
        desc: "A rich Roman icon made without cream, relying purely on the velvety emulsion of hot pasta water, fresh egg yolks, crisp cured guanciale, and sharp Pecorino Romano.",
        ingredients: ["Spaghetti", "Cured guanciale", "Fresh egg yolks", "Pecorino Romano", "Cracked black pepper"],
        priceLocal: "€12 - €16",
        priceUSD: "$13.00 - $17.50"
      },
      {
        name: "Authentic Pizza Napoletana",
        category: "Wood-Fired Pizza",
        course: "Dinner",
        origin: "Naples, Campania",
        desc: "Airy, blistered leopard-spotted crust topped with crushed sweet San Marzano tomatoes, fresh creamy buffalo mozzarella, fragrant basil leaves, and olive oil.",
        ingredients: ["Tipo 00 flour", "San Marzano tomatoes", "Mozzarella di Bufala", "Fresh basil", "EVOO"],
        priceLocal: "€8 - €13",
        priceUSD: "$9.00 - $14.50"
      },
      {
        name: "Bistecca alla Fiorentina",
        category: "Grilled Meat",
        course: "Dinner",
        origin: "Florence, Tuscany",
        desc: "Thick 1.5kg bone-in T-bone steak from Chianina cattle, grilled rare over hot oak embers and seasoned only with coarse sea salt, rosemary, and Tuscan olive oil.",
        ingredients: ["Chianina T-bone", "Oak charcoal embers", "Coarse sea salt", "Tuscan olive oil"],
        priceLocal: "€45 - €65",
        priceUSD: "$50.00 - $70.00"
      },
      {
        name: "Risotto alla Milanese",
        category: "Creamy Rice",
        course: "Dinner",
        origin: "Milan, Lombardy",
        desc: "Velvety golden Carnaroli rice slow-stirred with beef marrow and fragrant Persian saffron threads, finished with mountain butter and aged Parmigiano-Reggiano.",
        ingredients: ["Carnaroli rice", "Saffron threads", "Bone marrow broth", "Parmigiano-Reggiano"],
        priceLocal: "€14 - €20",
        priceUSD: "$15.50 - $22.00"
      },
      {
        name: "Roman Street Supplì al Telefono",
        category: "Street Snack",
        course: "Lunch / Snack",
        origin: "Rome",
        desc: "Golden-crumbed fried arborio rice croquettes filled with slow-cooked meat ragù and a molten heart of mozzarella that stretches like telephone wires when bitten.",
        ingredients: ["Arborio rice", "Slow meat ragù", "Fior di latte mozzarella", "Crisp breadcrumbs"],
        priceLocal: "€2.50 - €4.50",
        priceUSD: "$2.80 - $5.00"
      },
      {
        name: "Classic Venetian Tiramisù",
        category: "Artisanal Dessert",
        course: "Dessert",
        origin: "Treviso / Venice",
        desc: "Feather-light savoiardi ladyfingers soaked in dark roasted espresso and amaretto, layered with cloud-like whipped mascarpone cream and dusted with bitter cocoa.",
        ingredients: ["Savoiardi ladyfingers", "Dark espresso", "Mascarpone cheese", "Egg cream", "Dutch cocoa"],
        priceLocal: "€6 - €8.50",
        priceUSD: "$6.50 - $9.50"
      }
    ]
  },
  "france": {
    diningCulture: "Haute gastronomy, terrace bistro culture, buttery viennoiseries, and AOC terroir wines.",
    signatureDishes: [
      {
        name: "Boeuf Bourguignon",
        category: "Slow Braise",
        course: "Dinner",
        origin: "Burgundy",
        desc: "Tender beef chuck slow-braised for six hours in rich Pinot Noir wine, enriched with caramelized pearl onions, smoky lardons, and wild mushrooms.",
        ingredients: ["Charolais beef", "Burgundy Pinot Noir", "Smoked lardons", "Pearl onions", "Bouquet garni"],
        priceLocal: "€22 - €32",
        priceUSD: "$24.00 - $35.00"
      },
      {
        name: "Duck Confit (Confit de Canard)",
        category: "Bistro Classic",
        course: "Dinner",
        origin: "Gascony",
        desc: "Succulent duck leg slow-cured in aromatic herbs and roasted in its own rendered fat until the skin crackles golden, served with garlic Sarladaise potatoes.",
        ingredients: ["Duck leg", "Rendered duck fat", "Garlic", "Rosemary", "Sarladaise potatoes"],
        priceLocal: "€19 - €28",
        priceUSD: "$21.00 - $31.00"
      },
      {
        name: "Soupe à l'Oignon Gratinée",
        category: "Warm Soup",
        course: "Lunch / Starter",
        origin: "Paris",
        desc: "Deeply caramelized sweet onion broth fortified with cognac, crowned with a toasted baguette round buried under an avalanche of broiled, bubbling Comté cheese.",
        ingredients: ["Sweet onions", "Cognac beef broth", "Crusty baguette", "Aged Comté cheese"],
        priceLocal: "€9 - €14",
        priceUSD: "$10.00 - $15.50"
      },
      {
        name: "Brittany Buckwheat Galette",
        category: "Savory Crepe",
        course: "Lunch",
        origin: "Brittany",
        desc: "Paper-thin, nutty buckwheat crepe folded around artisanal cooked ham, melted nutty Emmental cheese, and a sunny runny farm egg yolk in the center.",
        ingredients: ["Buckwheat flour", "Artisanal ham", "Emmental cheese", "Farm egg", "Salted butter"],
        priceLocal: "€8 - €13",
        priceUSD: "$9.00 - $14.50"
      },
      {
        name: "Croque Monsieur & Espresso",
        category: "Cafe Favorite",
        course: "Breakfast / Lunch",
        origin: "Paris",
        desc: "Butter-toasted brioche sandwich filled with Jambon de Paris, slathered in velvety nutmeg béchamel sauce and baked with Gruyère until golden and bubbly.",
        ingredients: ["Brioche bread", "Jambon de Paris", "Béchamel sauce", "Gruyère", "Dijon mustard"],
        priceLocal: "€10 - €15",
        priceUSD: "$11.00 - $16.50"
      },
      {
        name: "Vanilla Bean Crème Brûlée",
        category: "Dessert",
        course: "Dessert",
        origin: "Paris",
        desc: "Silky, chilled Madagascar vanilla bean custard topped with a fragile sheet of caramelized sugar that shatters delightfully under the spoon.",
        ingredients: ["Heavy cream", "Madagascar vanilla bean", "Egg yolks", "Caramelized turbinado sugar"],
        priceLocal: "€7 - €10",
        priceUSD: "$7.50 - $11.00"
      }
    ]
  },
  "spain": {
    diningCulture: "Late-night tapas crawls, communal paella pans, and celebratory social dining.",
    signatureDishes: [
      {
        name: "Authentic Paella Valenciana",
        category: "Rice Feast",
        course: "Lunch",
        origin: "Valencia",
        desc: "Saffron-infused bomba rice cooked over wood smoke in a wide shallow pan with chicken, rabbit, green beans, and caramelized crispy bottom socarrat.",
        ingredients: ["Bomba rice", "Saffron threads", "Chicken & rabbit", "Garrofo beans", "Socarrat crust"],
        priceLocal: "€18 - €26",
        priceUSD: "$20.00 - $29.00"
      },
      {
        name: "Jamón Ibérico de Bellota Platter",
        category: "Tapas Charcuterie",
        course: "Starter / Tapas",
        origin: "Jabugo, Andalusia",
        desc: "Paper-thin slices of 36-month cured acorn-fed Iberian ham that melts on the tongue with nutty, savory fat, served alongside tomato-rubbed pan con tomate.",
        ingredients: ["Acorn-fed Iberian pork", "Sea salt", "Crusty bread", "Fresh tomato pulp", "EVOO"],
        priceLocal: "€20 - €34",
        priceUSD: "$22.00 - $38.00"
      },
      {
        name: "Crisp Patatas Bravas",
        category: "Tapas",
        course: "Tapas / Snack",
        origin: "Madrid",
        desc: "Crispy fried golden potato cubes tossed in sea salt, smothered in a spicy smoked paprika brava sauce and velvety garlic alioli.",
        ingredients: ["Kennebec potatoes", "Smoked pimentón paprika", "Garlic alioli", "Sherry vinegar"],
        priceLocal: "€5 - €8",
        priceUSD: "$5.50 - $9.00"
      },
      {
        name: "Tortilla de Patatas",
        category: "Tapas Classic",
        course: "Breakfast / Lunch",
        origin: "All Spain",
        desc: "Thick, tender Spanish omelette made with thinly sliced potatoes slow-poached in olive oil and caramelized onions, left delightfully runny in the center.",
        ingredients: ["Poached potatoes", "Sweet onions", "Farm eggs", "Spanish extra virgin olive oil"],
        priceLocal: "€4.50 - €8",
        priceUSD: "$5.00 - $9.00"
      },
      {
        name: "Gambas al Ajillo",
        category: "Seafood Tapas",
        course: "Dinner / Tapas",
        origin: "Andalusia",
        desc: "Plump wild prawns sizzling in a terracotta dish of hot olive oil infused with slivered garlic, dried bird's eye chili, and a splash of dry fino sherry.",
        ingredients: ["Fresh prawns", "Sliced garlic", "Dried red chili", "Fino sherry", "Crusty bread for dipping"],
        priceLocal: "€11 - €16",
        priceUSD: "$12.00 - $18.00"
      },
      {
        name: "Hot Churros con Chocolate",
        category: "Sweet Street Food",
        course: "Breakfast / Dessert",
        origin: "Madrid",
        desc: "Freshly piped fluted star fritters fried crisp, dusted with sugar and cinnamon, served with a steaming cup of pudding-thick bittersweet dark chocolate.",
        ingredients: ["Piped dough", "Cinnamon sugar", "70% dark Spanish chocolate", "Whole milk"],
        priceLocal: "€4 - €6.50",
        priceUSD: "$4.50 - $7.50"
      }
    ]
  },
  "mexico": {
    diningCulture: "UNESCO heritage cuisine, vibrant taquerias, ancient molcajete spices, and fresh citrus salsas.",
    signatureDishes: [
      {
        name: "Tacos al Pastor",
        category: "Street Taco",
        course: "Lunch / Dinner",
        origin: "Mexico City / Puebla",
        desc: "Thinly shaved chile-marinated pork roasted on a vertical spit, served on warm hand-pressed corn tortillas with charred pineapple, diced onion, and cilantro.",
        ingredients: ["Achiote pork", "Roasted pineapple", "Corn tortillas", "Cilantro & onion", "Salsa verde"],
        priceLocal: "$70 - $120 MXN",
        priceUSD: "$4.00 - $7.00"
      },
      {
        name: "Mole Poblano con Pollo",
        category: "Ancient Sauce",
        course: "Dinner",
        origin: "Puebla",
        desc: "Tender chicken steeped in an ancient velvety sauce ground from over 20 ingredients including dark chocolate, mulato chiles, toasted sesame, and spices.",
        ingredients: ["Ancho & pasilla chiles", "Mexican cacao chocolate", "Toasted sesame seeds", "Chicken", "Warm spices"],
        priceLocal: "$160 - $260 MXN",
        priceUSD: "$9.00 - $15.00"
      },
      {
        name: "Chilaquiles Verdes con Huevo",
        category: "Breakfast / Brunch",
        course: "Breakfast / Lunch",
        origin: "Central Mexico",
        desc: "Crisp fried corn tortilla chips simmered in tangy roasted tomatillo salsa, topped with Mexican crema, crumbled queso cotija, avocado, and fried eggs.",
        ingredients: ["Totopo chips", "Roasted tomatillo salsa", "Crema mexicana", "Queso cotija", "Avocado & fried egg"],
        priceLocal: "$90 - $150 MXN",
        priceUSD: "$5.00 - $8.50"
      },
      {
        name: "Fresh Ceviche Mixto",
        category: "Coastal Seafood",
        course: "Lunch",
        origin: "Baja / Nayarit",
        desc: "Fresh catch of the day cured in fresh lime juice with tender shrimp, cucumber, serrano peppers, red onion, and creamy avocado slices on crisp tostadas.",
        ingredients: ["Catch of day", "Wild shrimp", "Lime juice", "Serrano chili", "Crisp corn tostadas"],
        priceLocal: "$140 - $220 MXN",
        priceUSD: "$8.00 - $13.00"
      },
      {
        name: "Enmoladas de Oaxaca",
        category: "Filled Tortillas",
        course: "Dinner",
        origin: "Oaxaca",
        desc: "Handmade corn tortillas rolled with tender shredded chicken, generously bathed in dark Oaxacan mole negro and garnished with white onions and queso fresco.",
        ingredients: ["Corn tortillas", "Mole negro", "Shredded chicken", "Queso fresco", "Toasted sesame"],
        priceLocal: "$130 - $210 MXN",
        priceUSD: "$7.50 - $12.00"
      },
      {
        name: "Churros Rellenos de Cajeta",
        category: "Dessert",
        course: "Dessert / Snack",
        origin: "Mexico City",
        desc: "Golden fried churros filled with rich, caramelized goat's milk cajeta or chocolate, dusted with fragrant Mexican cinnamon sugar.",
        ingredients: ["Churro dough", "Goat's milk cajeta caramel", "Canela cinnamon", "Cane sugar"],
        priceLocal: "$45 - $80 MXN",
        priceUSD: "$2.50 - $4.50"
      }
    ]
  },
  "india": {
    diningCulture: "Royal Mughal heritage, regional clay-oven roasting, vibrant street chaat, and multi-layered aromatic spices.",
    signatureDishes: [
      {
        name: "Delhi Butter Chicken & Garlic Naan",
        category: "Curry & Tandoor",
        course: "Dinner",
        origin: "New Delhi",
        desc: "Tandoor-charred chicken pieces simmered in a velvety, buttery tomato gravy infused with kasuri methi fenugreek, served with pillowy garlic butter naan.",
        ingredients: ["Tandoori chicken", "Tomato-butter gravy", "Kasuri methi", "Heavy cream", "Garlic naan"],
        priceLocal: "₹380 - ₹650",
        priceUSD: "$4.50 - $7.80"
      },
      {
        name: "Hyderabadi Dum Biryani",
        category: "Fragrant Rice",
        course: "Lunch / Dinner",
        origin: "Hyderabad, Telangana",
        desc: "Long-grain aged basmati rice slow-cooked in a sealed clay pot (dum) with spiced tender marinated meat, saffron milk, caramelized fried onions, and fresh mint.",
        ingredients: ["Basmati rice", "Saffron strands", "Marinated spiced meat", "Caramelized onions", "Raita"],
        priceLocal: "₹280 - ₹480",
        priceUSD: "$3.50 - $5.80"
      },
      {
        name: "Crispy South Indian Masala Dosa",
        category: "Crepe & Tiffin",
        course: "Breakfast / Lunch",
        origin: "Tamil Nadu / Karnataka",
        desc: "A gigantic, paper-thin crispy fermented rice crepe stuffed with spiced mustard-seed potato mash, accompanied by steaming lentil sambar and coconut chutneys.",
        ingredients: ["Fermented rice-lentil batter", "Spiced potato masala", "Lentil sambar", "Coconut chutney"],
        priceLocal: "₹120 - ₹240",
        priceUSD: "$1.50 - $2.90"
      },
      {
        name: "Mumbai Street Pani Puri",
        category: "Chaat & Street Snack",
        course: "Street Snack",
        origin: "Mumbai / North India",
        desc: "Crisp hollow semolina spheres filled with spiced chickpeas and potatoes, plunged into iced tangy mint-coriander water and sweet tamarind chutney.",
        ingredients: ["Crisp puris", "Spiced potato-chickpea", "Mint-chili water", "Tamarind chutney"],
        priceLocal: "₹50 - ₹120",
        priceUSD: "$0.60 - $1.50"
      },
      {
        name: "Paneer Tikka Shashlik",
        category: "Tandoori Skewers",
        course: "Starter / Dinner",
        origin: "Punjab",
        desc: "Cubes of fresh artisanal paneer cheese marinated in hung curd, Kashmiri red chili, and mustard oil, skewered with bell peppers and roasted in a clay oven.",
        ingredients: ["Fresh paneer", "Hung spiced curd", "Kashmiri chili", "Mint chutney", "Chaats masala"],
        priceLocal: "₹250 - ₹420",
        priceUSD: "$3.00 - $5.00"
      },
      {
        name: "Warm Gulab Jamun with Pistachio",
        category: "Royal Dessert",
        course: "Dessert",
        origin: "All India",
        desc: "Soft fried milk-solid dough balls soaked in warm rosewater and green cardamom sugar syrup, garnished with slivered pistachios and silver leaf.",
        ingredients: ["Khoya milk solids", "Cardamom-rose syrup", "Slivered pistachios", "Saffron"],
        priceLocal: "₹80 - ₹160",
        priceUSD: "$1.00 - $2.00"
      }
    ]
  }
};

export function getDestinationCuisine(countryName) {
  const clean = (countryName || '').toLowerCase();
  for (const key in DESTINATION_CUISINES) {
    if (clean.includes(key)) {
      return DESTINATION_CUISINES[key];
    }
  }

  // Fallback for any other country
  return DESTINATION_CUISINES["japan"];
}
