const recipes = [
    { 
        name: "Shakshuka", cat: "Veg", img: "shakshuka.jpg", 
        ingredients: ["egg", "tomato"], 
        steps: [
            "Wash and finely dice your tomatoes into small chunks.",
            "Heat a pan over medium heat and add the tomatoes.",
            "Simmer for 8-10 minutes until they break down into a thick, bubbly sauce.",
            "Optional: Add a pinch of salt, chilli powder, or crushed garlic for a flavor boost.",
            "Use a spoon to create small wells in the tomato base.",
            "Crack the eggs into the wells, cover the pan, and cook until the whites are set."
        ] 
    },
    { 
        name: "Haleem", cat: "Non-Veg", img: "haleem.jpg", 
        ingredients: ["mutton", "broken wheat", "ghee", "urad dal", "ginger garlic paste", "onions", "shahi jeera", "lemon"], 
        steps: [
            "Soak broken wheat and urad dal separately for at least 3 hours.",
            "Pressure cook the mutton with ginger garlic paste and salt until very tender.",
            "Shred the cooked mutton into fine fibers using a fork.",
            "Boil the wheat and dal in the meat stock until they are mushy.",
            "Blend the cooked wheat into a coarse paste.",
            "In a large heavy-bottomed pot, combine the shredded meat and wheat paste.",
            "Add a generous amount of ghee and shahi jeera to the mix.",
            "Begin the 'Ghotna' process: mash the mixture continuously for 45 minutes.",
            "The mixture should become thick, elastic, and smooth.",
            "Slow cook on low flame to develop the deep flavors.",
            "Prepare a garnish of deep-fried crispy onions.",
            "Serve hot with a squeeze of fresh lemon and coriander."
        ] 
    },
    { 
        name: "Chicken Biryani", cat: "Non-Veg", img: "chicken-biryani.jpg", 
        ingredients: ["chicken", "basmati rice", "curd", "mint", "biryani masala", "onions", "saffron", "cardamom", "cloves"], 
        steps: [
            "Marinate the chicken with curd, biryani masala, and salt for 1 hour.",
            "Wash and soak basmati rice for 30 minutes to ensure long grains.",
            "Boil water with cardamom, cloves, and cinnamon for aroma.",
            "Cook the rice in the aromatic water until it is 70% done.",
            "In a separate pan, fry thinly sliced onions until they turn golden brown.",
            "In a heavy pot, create the base layer with marinated chicken.",
            "Spread a layer of parboiled rice over the chicken.",
            "Sprinkle fresh mint leaves and fried onions over the rice layer.",
            "Drizzle saffron milk over the top for color and fragrance.",
            "Seal the pot with dough or a heavy lid to trap the steam.",
            "Cook on high for 5 mins, then slow cook (Dum) for 20 minutes.",
            "Let it rest for 10 minutes before gently mixing and serving."
        ] 
    },
    { 
        name: "Mutton Biryani", cat: "Non-Veg", img: "mutton-biryani.jpg", 
        ingredients: ["mutton", "basmati rice", "curd", "onions", "ghee", "ginger garlic paste", "green chillies", "mint"], 
        steps: [
            "Clean and pressure cook the mutton with ginger garlic paste until 80% soft.",
            "Wash basmati rice and soak it in water for at least 45 minutes.",
            "Prepare the 'yakhni' or gravy base using curd and green chillies.",
            "Fry sliced onions in ghee until they are caramelized and dark brown.",
            "Boil large quantities of water with whole spices and salt.",
            "Add rice to boiling water and drain once it reaches the 'one-grain' stage.",
            "Layer the cooked mutton gravy at the bottom of a heavy vessel.",
            "Add the drained rice as the second layer.",
            "Garnish with ghee, fried onions, and fresh mint.",
            "Place a heavy weight on the lid to ensure no steam escapes.",
            "Cook on a very low flame (Dum) for 30-35 minutes.",
            "Serve hot with raita or mirchi ka salan."
        ] 
    },
    { 
        name: "Idli", cat: "Breakfast", img: "idli.jpg", 
        ingredients: ["rice", "urad dal", "fenugreek seeds"], 
        steps: [
            "Rinse rice and urad dal thoroughly under running water.",
            "Soak rice and dal with fenugreek seeds in separate bowls for 6 hours.",
            "Grind the dal into a very fluffy, light paste.",
            "Grind the rice into a slightly coarse batter.",
            "Mix both batters together with a pinch of salt.",
            "Let the batter ferment in a warm dark place for 8-10 hours.",
            "The batter should double in volume and have a sour aroma.",
            "Grease the idli moulds with a drop of oil.",
            "Pour the batter into the moulds and steam for 10-12 minutes.",
            "Wait for 2 minutes before scooping them out for perfect shape."
        ] 
    },
    { 
        name: "Gulab Jamun", cat: "Deserts", img: "gulab-jamun.jpg", 
        ingredients: ["khoya", "flour", "sugar", "cardamom", "ghee"], 
        steps: [
            "Grate the khoya into a wide mixing bowl.",
            "Add a small amount of flour and knead into a soft, smooth dough.",
            "Divide the dough into small, equal-sized portions.",
            "Roll them into balls between your palms, ensuring there are no cracks.",
            "Prepare a sugar syrup by boiling sugar and water with cardamom.",
            "Simmer the syrup until it becomes slightly sticky.",
            "Heat ghee in a deep pan on a very low flame.",
            "Fry the dough balls slowly, rotating them constantly for even color.",
            "Once they are deep golden brown, remove and drain them.",
            "Drop the hot jamuns into the warm sugar syrup.",
            "Let them soak for at least 2 hours to absorb the syrup fully."
        ] 
    },
    { 
        name: "Natukodi Pulusu", cat: "Non-Veg", img: "natukodi-pulusu.jpg", 
        ingredients: ["country chicken", "coconut", "poppy seeds", "onions", "green chillies", "turmeric", "chilli powder", "curry leaves"], 
        steps: [
            "Clean the country chicken and cut it into medium pieces.",
            "In a pressure cooker, add chicken with turmeric and cook for 4-5 whistles.",
            "Dry roast poppy seeds and coconut, then grind into a fine paste.",
            "Sauté chopped onions and green chillies in oil until golden.",
            "Add ginger garlic paste and fry until the raw smell disappears.",
            "Add the pre-cooked chicken along with the poppy seed paste.",
            "Stir in chilli powder and adjust the salt to taste.",
            "Add enough water to make a thin, spicy gravy.",
            "Simmer the pulusu on low heat for 15 minutes.",
            "Finish with a handful of fresh curry leaves for the authentic aroma."
        ] 
    },
    { 
        name: "Andhra Egg Vepudu", cat: "Non-Veg", img: "andhra-egg-vepudu.jpg", 
        ingredients: ["egg", "garlic", "pepper", "curry leaves", "onions", "turmeric", "chilli powder"], 
        steps: [
            "Boil the eggs, peel them, and set them aside.",
            "Make light vertical slits on the boiled eggs.",
            "Heat oil and fry the eggs with turmeric until the skin is crispy.",
            "In the same oil, sauté chopped onions and curry leaves.",
            "Crush garlic cloves and black pepper in a mortar and pestle.",
            "Add the crushed garlic-pepper mix and chilli powder to the pan.",
            "Toss the fried eggs back into the spicy onion mixture.",
            "Fry on high heat for 3-5 minutes until the masala coats the eggs.",
            "Serve as a spicy side dish with rice and dal."
        ] 
    },
    { 
        name: "Egg Curry", cat: "Non-Veg", img: "egg-curry.jpg", 
        ingredients: ["egg", "onion", "tomato", "ginger", "garlic", "garam masala", "coriander"], 
        steps: [
            "Hard boil the eggs and peel them carefully.",
            "Slightly sauté the eggs in a pan with a pinch of turmeric.",
            "Prepare a paste of onions, ginger, and garlic.",
            "Heat oil and fry the paste until it turns light brown.",
            "Add tomato puree and cook until oil starts separating from the masala.",
            "Add garam masala and a cup of water to create the curry base.",
            "Gently place the boiled eggs into the simmering gravy.",
            "Cover and cook for 5-7 minutes on medium heat.",
            "Garnish with a generous amount of freshly chopped coriander."
        ] 
    },
    { 
        name: "Egg Masala Fry", cat: "Non-Veg", img: "egg-masala-fry.jpg", 
        ingredients: ["egg", "chilli powder", "turmeric", "garam masala"], 
        steps: [
            "Boil the eggs and slice them into halves vertically.",
            "Mix chilli powder, turmeric, and garam masala with a little water.",
            "Coat the flat side of the egg halves with this spice paste.",
            "Heat a tawa with 2 tablespoons of oil.",
            "Place the eggs face down on the hot tawa.",
            "Fry for 2 minutes until the masala forms a dark crust.",
            "Carefully flip and fry the other side for 1 minute.",
            "Serve hot as a quick appetizer."
        ] 
    },
    { 
        name: "Egg Roast", cat: "Non-Veg", img: "egg-roast.jpg", 
        ingredients: ["egg", "onion", "pepper", "ginger garlic paste", "curry leaves"], 
        steps: [
            "Slice onions very thinly and fry them until they are dark brown.",
            "Add ginger garlic paste and green chillies to the onions.",
            "Add a lot of black pepper powder and salt.",
            "Sauté until the onions become a thick, dark jam-like consistency.",
            "Add boiled eggs (cut in half) to the pan.",
            "Gently fold the onion masala over the eggs.",
            "Roast for 5 minutes on low flame to infuse the pepper flavor.",
            "Finish with fresh curry leaves for a Kerala-style aroma."
        ] 
    },
    { 
        name: "Egg Tadka", cat: "Non-Veg", img: "egg-tadka.jpg", 
        ingredients: ["egg", "garlic", "mustard seeds", "green chillies", "dry red chillies"], 
        steps: [
            "Crack eggs into a bowl and whisk with salt and green chillies.",
            "Heat oil and scramble the eggs until they are soft and chunky.",
            "Remove the eggs and keep them aside.",
            "In the same pan, add oil and splutter mustard seeds.",
            "Add chopped garlic and dry red chillies until they turn golden.",
            "Pour this hot garlic tempering over the scrambled eggs.",
            "Mix well and serve as a side for roti or steamed rice."
        ] 
    },
    { 
        name: "Kodi Vepudu", cat: "Non-Veg", img: "kodi-vepudu.jpg", 
        ingredients: ["chicken", "curry leaves", "onions", "green chillies", "black pepper", "ginger garlic paste"], 
        steps: [
            "Marinate small chicken pieces with ginger garlic paste and turmeric.",
            "Heat oil in a kadai and sauté onions and green chillies.",
            "Add the marinated chicken and cook on high heat to sear the meat.",
            "Add red chilli powder and coriander powder.",
            "Continue to fry on medium heat without adding any water.",
            "Add a heavy dose of freshly ground black pepper.",
            "Toss in several sprigs of fresh curry leaves.",
            "Fry until the chicken is completely dry and dark in color.",
            "The chicken should have a slightly crispy outer layer.",
            "Serve hot as a spicy Andhra starter."
        ] 
    },
    { 
        name: "Tomato Pappu", cat: "Veg", img: "tomato-pappu.jpg", 
        ingredients: ["dal", "tomato", "garlic", "green chillies", "turmeric", "mustard seeds", "cumin", "dry red chillies"], 
        steps: [
            "Wash toor dal and add it to a pressure cooker.",
            "Add chopped tomatoes, green chillies, and turmeric to the dal.",
            "Add 2 cups of water and cook for 3-4 whistles.",
            "Once the pressure is released, mash the dal and tomatoes thoroughly.",
            "Heat oil in a small pan for tempering.",
            "Add mustard seeds, cumin, and dry red chillies until they pop.",
            "Add crushed garlic cloves and curry leaves to the tempering.",
            "Pour the hot tempering into the mashed dal and mix well.",
            "Simmer for 2 minutes and serve with rice and ghee."
        ] 
    },
    { 
        name: "Thotakura Pappu", cat: "Veg", img: "thotakura-pappu.jpg", 
        ingredients: ["amaranth leaves", "dal", "garlic", "tamarind", "dry red chillies", "mustard seeds"], 
        steps: [
            "Pressure cook dal with chopped amaranth leaves (Thotakura).",
            "Add a small piece of tamarind for a tangy flavor.",
            "Mash the cooked dal and leaves into a smooth consistency.",
            "In a pan, heat oil and add mustard seeds and cumin.",
            "Add plenty of garlic cloves and fry until they are brown.",
            "Add dry red chillies and curry leaves.",
            "Mix the tempering into the dal.",
            "Adjust salt and serve hot."
        ] 
    },
    { 
        name: "Gutthi Vankaya", cat: "Veg", img: "gutthi-vankaya.jpg", 
        ingredients: ["brinjal", "peanuts", "sesame", "tamarind", "onions", "ginger", "garlic", "coriander seeds"], 
        steps: [
            "Slit the small brinjals into four without cutting the stem.",
            "Dry roast peanuts, sesame seeds, and coriander seeds.",
            "Grind the roasted spices with ginger, garlic, and onions into a thick paste.",
            "Stuff the prepared spice paste into the slit brinjals.",
            "Heat oil in a pan and place the stuffed brinjals inside.",
            "Cover and cook on low heat, turning them occasionally.",
            "Add the remaining spice paste and tamarind pulp to the pan.",
            "Simmer until the oil starts to float on top of the gravy.",
            "The brinjals should be completely soft and tender.",
            "Garnish with coriander and serve with rice or roti."
        ] 
    },
    { 
        name: "Gongura Pachadi", cat: "Veg", img: "gongura-pachadi.jpg", 
        ingredients: ["gongura leaves", "red chillies", "garlic", "mustard seeds", "fenugreek seeds"], 
        steps: [
            "Pluck gongura leaves and wash them thoroughly.",
            "Heat oil and sauté the gongura leaves until they wilt and turn mushy.",
            "In a separate pan, roast dry red chillies and fenugreek seeds.",
            "Grind the roasted spices into a coarse powder.",
            "Add the sautéed gongura leaves and garlic to the grinder.",
            "Pulse a few times—do not make it a smooth paste.",
            "Heat oil and add mustard seeds and more garlic cloves for tempering.",
            "Mix the hot tempering into the pachadi.",
            "Serve with hot rice and a dollop of ghee."
        ] 
    },
    { 
        name: "Curd Rice", cat: "Veg", img: "curd-rice.jpg", 
        ingredients: ["rice", "curd", "milk", "ginger", "green chillies", "mustard seeds", "curry leaves"], 
        steps: [
            "Cook rice until it is slightly overdone and soft.",
            "While still warm, mash the rice thoroughly with a spoon.",
            "Add milk to the rice and mix to reach a creamy consistency.",
            "Once the rice cools down, add fresh curd and salt.",
            "Heat oil and add mustard seeds, ginger, and green chillies.",
            "Add curry leaves and a pinch of hing for flavor.",
            "Mix the tempering into the creamy rice.",
            "Optional: Garnish with pomegranate seeds or grapes."
        ] 
    },
    { 
        name: "Chole Bhature", cat: "Veg", img: "chole-bhature.jpg", 
        ingredients: ["chickpeas", "flour", "onion", "tomato", "curd", "chole masala", "sugar"], 
        steps: [
            "Soak chickpeas overnight and pressure cook until soft.",
            "Make a dough using flour, curd, a pinch of sugar, and oil.",
            "Let the dough rest for 2-3 hours for fermentation.",
            "Prepare a gravy with sautéed onions, tomatoes, and ginger-garlic paste.",
            "Add chole masala and the cooked chickpeas to the gravy.",
            "Simmer the chickpeas for 15 minutes to absorb all spices.",
            "Roll the dough into large oval shapes.",
            "Deep fry in very hot oil until the bhature puffs up completely.",
            "Serve the hot bhature with the spicy chole and pickled onions."
        ] 
    },
    { 
        name: "Masala Dosa", cat: "Breakfast", img: "masala-dosa.jpg", 
        ingredients: ["dosa batter", "potato", "onion", "turmeric", "mustard seeds"], 
        steps: [
            "Prepare the potato filling by mashing boiled potatoes.",
            "Sauté onions, mustard seeds, and turmeric, then mix with potatoes.",
            "Heat a non-stick tawa and lightly grease it with oil.",
            "Pour a ladle of dosa batter and spread it in a large circle.",
            "Drizzle oil around the edges and cook until it turns golden brown.",
            "Place a large spoonful of the potato mixture in the center.",
            "Fold the dosa into a half-moon or a roll.",
            "Serve immediately with coconut chutney and sambar."
        ] 
    },
    { 
        name: "Sarva Pindi", cat: "Breakfast", img: "sarva-pindi.jpg", 
        ingredients: ["rice flour", "peanuts", "chana dal", "sesame seeds", "ginger garlic paste"], 
        steps: [
            "Soak chana dal for 1 hour before starting.",
            "In a bowl, mix rice flour with soaked dal, peanuts, and sesame seeds.",
            "Add ginger garlic paste, chilli powder, and salt.",
            "Add water slowly to form a stiff dough.",
            "Take a deep cold pan and grease it heavily with oil.",
            "Press the dough into the pan to form a thin, even layer.",
            "Make small holes in the dough and pour drops of oil into them.",
            "Cover and cook on a medium-low flame for 10-12 minutes.",
            "Once the bottom is golden and crispy, remove from the pan.",
            "Serve this authentic Telangana snack warm."
        ] 
    },
    { 
        name: "Sakinalu", cat: "Breakfast", img: "sakinalu.jpg", 
        ingredients: ["rice flour", "sesame seeds", "ajwain"], 
        steps: [
            "Wash and soak rice, then dry it on a cloth for 2 hours.",
            "Grind the damp rice into a very fine flour.",
            "Mix the rice flour with sesame seeds and ajwain.",
            "Add a little water at a time to make a pliable dough.",
            "On a clean white cloth, use your fingers to shape the dough into rings.",
            "Carefully lift the rings and drop them into hot oil.",
            "Fry until they turn a light golden color and become very crispy.",
            "Drain the oil and store in an airtight container."
        ] 
    },
    { 
        name: "Butter Naan", cat: "Breads", img: "butter-naan.jpg", 
        ingredients: ["flour", "butter", "yeast", "curd", "sugar"], 
        steps: [
            "Dissolve yeast and sugar in warm water and let it bloom.",
            "Mix flour with curd and the yeast mixture to form a soft dough.",
            "Knead well and let it rise in a warm place for 2 hours.",
            "Divide the dough into balls and roll them into oval shapes.",
            "Apply water on one side of the naan.",
            "Place the water side down on a hot iron tawa.",
            "Once bubbles appear, flip the tawa over the direct flame to char the top.",
            "Remove and brush generously with melted butter."
        ] 
    },
    { 
        name: "Rumali Roti", cat: "Breads", img: "rumali-roti.jpg", 
        ingredients: ["flour", "milk"], 
        steps: [
            "Mix flour with a little salt and warm milk.",
            "Knead into a very soft and elastic dough.",
            "Cover with a damp cloth and rest for 1 hour.",
            "Take a small ball of dough and roll it out as thin as possible.",
            "Stretch the dough further by tossing it between your hands.",
            "Place the thin sheet on a hot, inverted heavy pan.",
            "Fold and press with a cloth to cook all sides quickly.",
            "The roti should be as thin as a handkerchief."
        ] 
    },
    { 
        name: "Thandoori Roti", cat: "Breads", img: "thandoori-roti.jpeg", 
        ingredients: ["wheat flour", "ghee"], 
        steps: [
            "Make a standard dough using wheat flour and water.",
            "Roll the dough into thick circular discs.",
            "Prick the surface slightly with a fork.",
            "Stick one side to a hot tawa using a little water.",
            "Invert the tawa directly over the gas flame to get a charred look.",
            "Once cooked, scrape it off and apply ghee.",
            "Serve hot with curry."
        ] 
    },
    { 
        name: "Double Ka Meetha", cat: "Deserts", img: "double-ka-meetha.jpg", 
        ingredients: ["bread", "milk", "sugar", "ghee", "cashews", "cardamom"], 
        steps: [
            "Cut the bread slices into triangles or squares.",
            "Deep fry the bread pieces in ghee until they are dark golden and crispy.",
            "Boil milk in a separate pan and reduce it to half its volume (Rabri).",
            "Prepare a thick sugar syrup with cardamom pods.",
            "Soak the fried bread in the sugar syrup for 5 minutes.",
            "Arrange the soaked bread in a serving dish.",
            "Pour the thickened milk over the bread pieces.",
            "Garnish with roasted cashews and almonds.",
            "Serve warm or chilled."
        ] 
    },
    { 
        name: "Payasam", cat: "Deserts", img: "payasam.jpg", 
        ingredients: ["vermicelli", "milk", "sugar", "ghee", "raisins", "cashews"], 
        steps: [
            "Heat ghee in a pan and roast cashews and raisins until golden.",
            "In the same pan, roast the vermicelli until it turns light brown.",
            "Bring milk to a boil in a heavy-bottomed vessel.",
            "Add the roasted vermicelli to the boiling milk.",
            "Cook on low heat until the vermicelli becomes soft.",
            "Add sugar and stir until completely dissolved.",
            "Add cardamom powder for a sweet fragrance.",
            "Simmer for another 5 minutes until the payasam thickens.",
            "Top with the roasted nuts and raisins before serving."
        ] 
    }
];

let pantry = JSON.parse(localStorage.getItem('myPantry')) || [];
let currentFilter = "All";
const allPossibleIngredients = [...new Set(recipes.flatMap(r => r.ingredients))].sort();

window.onload = () => { renderFilters(); filterRecipes(); updatePantryUI(); };

function showSuggestions(input, boxId) {
    const query = input.value.toLowerCase().trim();
    const box = document.getElementById(boxId);
    if (!query) { box.classList.add("hidden"); return; }
    const filtered = allPossibleIngredients.filter(ing => 
        ing.toLowerCase().includes(query) && !pantry.includes(ing)
    );
    if (filtered.length > 0) {
        box.innerHTML = filtered.map(ing => `<div class="suggestion-item" onclick="selectSuggestion('${ing}', '${boxId}', '${input.id}')">${ing}</div>`).join('');
        box.classList.remove("hidden");
    } else { box.classList.add("hidden"); }
}

function handleSearch(input) {
    filterRecipes();
    const query = input.value.toLowerCase().trim();
    const box = document.getElementById('search-suggestions');
    if (!query) { box.classList.add("hidden"); return; }
    const filteredRecipes = recipes.filter(r => r.name.toLowerCase().includes(query)).map(r => r.name);
    if (filteredRecipes.length > 0) {
        box.innerHTML = filteredRecipes.map(name => `<div class="suggestion-item" onclick="selectSuggestion('${name}', 'search-suggestions', 'search')">🍽️ ${name}</div>`).join('');
        box.classList.remove("hidden");
    } else { box.classList.add("hidden"); }
}

function selectSuggestion(val, boxId, inputId) {
    const input = document.getElementById(inputId);
    document.getElementById(boxId).classList.add("hidden");
    if (inputId === 'ingredientInput') {
        if (!pantry.includes(val)) { pantry.push(val); savePantry(); }
        input.value = "";
    } else { input.value = val; filterRecipes(); }
}

function handleAddIngredient() {
    const input = document.getElementById("ingredientInput");
    const val = input.value.toLowerCase().trim();
    if (val && !pantry.includes(val)) { pantry.push(val); savePantry(); }
    input.value = "";
}

function savePantry() { localStorage.setItem('myPantry', JSON.stringify(pantry)); updatePantryUI(); }
function removeTag(i) { pantry.splice(i, 1); savePantry(); }

function updatePantryUI() {
    document.getElementById("tags").innerHTML = pantry.map((item, i) => `<span class="tag" onclick="removeTag(${i})">${item} ✕</span>`).join('');
    filterRecipes();
}

function renderFilters() {
    const cats = ["All", "Veg", "Non-Veg", "Breakfast", "Deserts"];
    document.getElementById("filters").innerHTML = cats.map(c => `<button class="f-pill ${currentFilter === c ? 'active' : ''}" onclick="setCategory('${c}')">${c}</button>`).join('');
}

function setCategory(cat) { currentFilter = cat; renderFilters(); filterRecipes(); }

function filterRecipes() {
    const query = document.getElementById("search").value.toLowerCase();
    let results = recipes.map(r => {
        const matches = r.ingredients.filter(ing => pantry.includes(ing.toLowerCase()));
        return { ...r, percent: matches.length / r.ingredients.length };
    });
    if (currentFilter !== "All") results = results.filter(r => r.cat === currentFilter);
    if (query) results = results.filter(r => r.name.toLowerCase().includes(query) || r.ingredients.some(i => i.includes(query)));
    results.sort((a,b) => b.percent - a.percent);
    renderUI(results);
}

function renderUI(list) {
    document.getElementById("recipes").innerHTML = list.map(r => `
        <div class="card" onclick="openModal('${r.name}')">
            <img src="${r.img}">
            <div class="card-body"><h3>${r.name}</h3><small>${Math.round(r.percent * 100)}% Match</small></div>
        </div>`).join('');
    const easy = recipes.filter(r => r.cat === "Breakfast" || r.cat === "Deserts");
    document.getElementById("easy-row").innerHTML = easy.map(r => `<div class="card" onclick="openModal('${r.name}')"><img src="${r.img}"><div class="card-body"><h3>${r.name}</h3></div></div>`).join('');
}

function openModal(name) {
    const r = recipes.find(rec => rec.name === name);
    if (!r) return;
    const yt = `https://www.youtube.com/results?search_query=how+to+make+${r.name.replace(/ /g, '+')}`;
    const highlightedSteps = r.steps.map(step => {
        let newStep = step;
        pantry.forEach(item => { const regex = new RegExp(`(${item})`, "gi"); newStep = newStep.replace(regex, `<mark>$1</mark>`); });
        return newStep;
    });
    document.getElementById("modalData").innerHTML = `
        <h2 style="margin-bottom:10px; font-size:1.3rem;">${r.name}</h2>
        <div class="tag-cloud" style="margin-bottom:15px">
            ${r.ingredients.map(ing => {
                const match = pantry.includes(ing.toLowerCase());
                return `<span class="tag" style="border-color:${match ? 'var(--accent)' : 'var(--primary)'}; color:${match ? 'var(--accent)' : 'var(--primary)'}">${ing}</span>`;
            }).join('')}
        </div>
        <div id="steps-area">
            ${highlightedSteps.map((s,i) => `<div class="instruction-box"><b>Step ${i+1}</b>${s}</div>`).join('')}
        </div>
        <a href="${yt}" target="_blank" class="yt-btn">📺 Watch Tutorial</a>
    `;
    document.getElementById("modal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() { document.getElementById("modal").classList.add("hidden"); document.body.style.overflow = "auto"; }

document.addEventListener("click", (e) => {
    if (!e.target.closest('.suggestions-box') && !e.target.closest('input')) {
        document.querySelectorAll('.suggestions-box').forEach(box => box.classList.add("hidden"));
    }
});
