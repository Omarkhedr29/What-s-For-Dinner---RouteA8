var mainElement = document.getElementById("main");
var starsElement = document.getElementById("stars");
var reviewsElement = document.getElementById("reviews");
var recipeImgElement = document.getElementById("recipeImg");
var prepTimeElement = document.getElementById("prepTime");
var cookTimeElement = document.getElementById("cookTime");
var servingsElement = document.getElementById("servings");
var nameElement = document.getElementById("name");
var descElement = document.getElementById("desc");
var category1Element = document.getElementById("category1");
var category2Element = document.getElementById("category2");
var ingredientsElement = document.getElementById("ingredients");
var instructionsElement = document.getElementById("instructions");
var caloriesElement = document.getElementById("calories");
var proteinElement = document.getElementById("protein");
var carbohydratesElement = document.getElementById("carbohydrates");
var fatElement = document.getElementById("fat");
var fiberElement = document.getElementById("fiber");
var sodiumElement = document.getElementById("sodium");
var chefTipsElement = document.getElementById("chefTips");
var alertElement = document.getElementById("alert");

var recipes = [
  {
    name: "Slow-Braised Lamb Shanks",
    desc: "Tender, fall-off-the-bone lamb shanks slow-cooked in a rich red wine and rosemary reduction",
    category: ["Intermediate", "Meat"],
    img: "img/Slow-Braised Lamb Shanks.jpg",
    stars: "4.9",
    reviews: "512",
    prepTime: 20,
    cookTime: 150,
    servings: "2",
    ingredients: [
      "2 large Lamb shanks (about 400g each)",
      "2 tablespoons Olive oil",
      "1 large Onion, finely diced",
      "2 Carrots and 2 Celery stalks, chopped",
      "4 cloves Garlic, minced",
      "2 cups Dry red wine (Cabernet or Merlot)",
      "2 cups Beef stock",
      "2 tablespoons Tomato paste",
      "Fresh herbs: 3 sprigs rosemary, 4 sprigs thyme",
    ],
    instructions: [
      "Sear: Season the lamb shanks generously with salt and pepper. Heat oil in a heavy Dutch oven over high heat. Sear the shanks until deeply browned on all sides (about 8 minutes). Remove and set aside.",
      "Sauté: In the same pot, add the onion, carrots, and celery. Cook for 5 minutes until softened. Add garlic and tomato paste, stirring for 2 minutes until the paste darkens.",
      "Deglaze: Pour in the red wine, scraping the bottom of the pot to release the flavorful bits. Let the wine reduce by half.",
      "Braise: Return the shanks to the pot. Add beef stock and herbs. The liquid should cover 3/4 of the meat. Cover with a tight lid.",
      "Slow Cook: Transfer to a 325°F (160°C) oven and cook for 2.5 hours. Turn the shanks halfway through. The meat should be tender enough to fall off the bone.",
    ],
    calories: "680",
    protein: "52",
    carbohydrates: "14",
    fat: "42",
    fiber: "3",
    sodium: "590",
    chefTips: [
      "The Sauce: After cooking, if the sauce is too thin, remove the meat and boil the liquid for 5-10 minutes to create a thick, glossy glaze.",
      "Patience: This dish is even better if made a day in advance and reheated; the flavors deepen significantly overnight.",
    ],
  },
  {
    name: "Whole Roasted Herb Chicken",
    desc: "Classic rotisserie-style chicken with a crispy herb-butter skin and juicy, tender meat",
    category: ["Easy", "Poultry"],
    img: "img/Whole Roasted Herb Chicken.jpg",
    stars: "4.8",
    reviews: "890",
    prepTime: 15,
    cookTime: 75,
    servings: "4",
    ingredients: [
      "1.8kg Whole chicken",
      "4 tablespoons Unsalted butter, softened",
      "2 tablespoons Olive oil",
      "1 large Lemon, halved",
      "1 bulb Garlic, sliced horizontally",
      "Fresh herbs: Parsley, sage, rosemary, and thyme",
      "Salt and cracked black pepper",
    ],
    instructions: [
      "Prep: Preheat oven to 425°F (220°C). Remove giblets and pat the chicken completely dry. Dry skin equals crispy skin!",
      "Season: Stuff the cavity with lemon, garlic, and half the herbs. Rub the softened butter under the skin of the breasts and over the legs.",
      "Truss: Tie the legs together with kitchen twine and tuck the wings under the body. Rub the outside with oil, salt, and pepper.",
      "Roast: Place in a roasting pan. Roast for 1 hour and 15 minutes, or until the internal temperature reaches 165°F (74°C).",
      "Rest: Remove from the oven and let it rest for 20 minutes before carving. This keeps the juices from running out.",
    ],
    calories: "450",
    protein: "40",
    carbohydrates: "1",
    fat: "30",
    fiber: "0",
    sodium: "480",
    chefTips: [
      "Room Temp: Take the chicken out of the fridge 30 minutes before cooking to ensure even roasting.",
      "The Pan: Place the chicken on a bed of thick-sliced onions and carrots to act as a natural roasting rack and flavor the drippings.",
    ],
  },
  {
    name: "Traditional Baked Ziti",
    desc: "Comforting layers of ziti pasta, rich marinara, three cheeses, and savory Italian sausage",
    category: ["Intermediate", "Italian"],
    img: "img/Traditional Baked Ziti.jpg",
    stars: "4.7",
    reviews: "430",
    prepTime: 20,
    cookTime: 50,
    servings: "6",
    ingredients: [
      "500g Ziti or Penne pasta",
      "500g Italian sausage (removed from casings)",
      "3 cups Marinara sauce",
      "2 cups Ricotta cheese",
      "3 cups Shredded mozzarella",
      "1/2 cup Grated Parmesan",
      "1 Large egg",
      "Fresh basil and dried oregano",
    ],
    instructions: [
      "Pasta: Cook ziti in salted water for 2 minutes less than the package directions (it will finish cooking in the oven). Drain.",
      "Meat: Brown the sausage in a large skillet, breaking it into small crumbles. Drain excess fat and stir in the marinara sauce.",
      "Cheese Mix: In a bowl, whisk together ricotta, egg, Parmesan, and chopped basil.",
      "Assemble: Combine the pasta, meat sauce, and ricotta mixture in a large bowl. Stir gently. Pour half into a 9x13 baking dish.",
      "Layer: Sprinkle with half the mozzarella. Add the rest of the pasta and top with the remaining mozzarella.",
      "Bake: Cover with foil and bake at 375°F (190°C) for 30 minutes. Remove foil and bake 15-20 minutes more until bubbly and golden.",
    ],
    calories: "590",
    protein: "32",
    carbohydrates: "55",
    fat: "28",
    fiber: "4",
    sodium: "820",
    chefTips: [
      "Under-cook Pasta: If you cook the pasta fully in water, it will become mushy after 50 minutes in the oven. Keep it firm!",
      'Mozzarella: Use low-moisture mozzarella for the best "cheese pull" without making the dish watery.',
    ],
  },
  {
    name: "Pan-Seared Garlic Butter Steak",
    desc: "Juicy, high-quality steak seared to perfection and basted with aromatic garlic herb butter",
    category: ["Easy", "Meat"],
    img: "img/Pan-Seared Garlic Butter Steak.jpg",
    stars: "4.9",
    reviews: "1200",
    prepTime: 10,
    cookTime: 10,
    servings: "2",
    ingredients: [
      "2 Ribeye or New York Strip steaks (1.5 inches thick)",
      "3 tablespoons Unsalted butter",
      "3 cloves Garlic, smashed",
      "2 sprigs Fresh rosemary",
      "1 tablespoon High-smoke point oil (Avocado or Grapeseed)",
      "Salt and coarse black pepper",
    ],
    instructions: [
      "Season: Pat steaks dry with paper towels. Season very heavily with salt and pepper on both sides and the edges.",
      "Sear: Heat oil in a cast-iron skillet over high heat until it starts to smoke. Place steaks in the pan.",
      "Crust: Cook for 3 minutes without moving to develop a deep brown crust. Flip the steaks.",
      "Baste: Immediately add butter, garlic, and rosemary to the pan. As the butter melts, tilt the pan and spoon the foaming butter over the steaks continuously for 3 minutes.",
      "Rest: Remove steaks when the internal temperature is 130°F (54°C) for medium-rare. Let them rest on a board for 10 minutes before slicing.",
    ],
    calories: "540",
    protein: "48",
    carbohydrates: "0",
    fat: "38",
    fiber: "0",
    sodium: "520",
    chefTips: [
      "Dry Surface: Moisture is the enemy of a good sear. If the steak is wet, it will steam instead of browning.",
      "The Rest: Slicing a steak too early allows all the juices to run out, leaving the meat dry.",
    ],
  },
  {
    name: "Honey Garlic Glazed Shrimp",
    desc: "Plump, succulent shrimp tossed in a sticky, sweet-and-savory glaze served over rice",
    category: ["Easy", "Seafood"],
    img: "img/Honey Garlic Glazed Shrimp.jpg",
    stars: "4.8",
    reviews: "340",
    prepTime: 15,
    cookTime: 10,
    servings: "2",
    ingredients: [
      "400g Large shrimp, peeled and deveined",
      "1/3 cup Honey",
      "1/4 cup Soy sauce",
      "3 cloves Garlic, minced",
      "1 tablespoon Fresh ginger, grated",
      "1 tablespoon Lemon juice",
      "Green onions for garnish",
    ],
    instructions: [
      "Marinade: Whisk honey, soy sauce, garlic, ginger, and lemon juice in a bowl. Pour half over the shrimp and let marinate for 15 minutes.",
      "Sauté: Heat a skillet over medium-high heat. Add shrimp (discard the used marinade) and cook for 2 minutes per side.",
      "Glaze: Pour the remaining half of the fresh marinade into the pan. Bring to a simmer.",
      "Finish: Cook for 2 more minutes until the sauce thickens into a sticky glaze that coats the shrimp.",
    ],
    calories: "310",
    protein: "24",
    carbohydrates: "28",
    fat: "8",
    fiber: "1",
    sodium: "740",
    chefTips: [
      "Thawing: If using frozen shrimp, ensure they are completely thawed and patted dry so the glaze sticks.",
      "Heat: Don't let the honey sauce burn; if it thickens too fast, add a teaspoon of water.",
    ],
  },
  {
    name: "Creamy Mushroom Fettuccine",
    desc: "Silky, decadent pasta with sautéed cremini mushrooms and a hint of truffle oil",
    category: ["Easy", "Vegetarian"],
    img: "img/Creamy Mushroom Fettuccine.jpg",
    stars: "4.6",
    reviews: "215",
    prepTime: 10,
    cookTime: 15,
    servings: "2",
    ingredients: [
      "250g Fettuccine pasta",
      "300g Cremini mushrooms, sliced",
      "1 cup Heavy cream",
      "1/2 cup Parmesan cheese",
      "2 tablespoons Butter",
      "Fresh thyme and black pepper",
    ],
    instructions: [
      "Pasta: Boil fettuccine in salted water. Reserve 1/2 cup of pasta water.",
      "Mushrooms: Sauté mushrooms in butter over high heat until browned and the liquid has evaporated.",
      "Sauce: Lower heat, add cream and thyme. Simmer for 3 minutes.",
      "Combine: Toss pasta into the cream. Add Parmesan and a splash of pasta water, stirring until creamy.",
    ],
    calories: "490",
    protein: "14",
    carbohydrates: "58",
    fat: "28",
    fiber: "3",
    sodium: "410",
    chefTips: [
      "Don't Salt Early: Salting mushrooms at the start makes them release water and steam. Salt at the very end for a better sear.",
      "Warmth: Serve on warm plates to prevent the cream sauce from thickening too quickly.",
    ],
  },
  {
    name: "Grilled Lemon Herb Cod",
    desc: "Light, flaky white fish fillets seasoned with Mediterranean herbs and fresh lemon",
    category: ["Easy", "Seafood"],
    img: "img/Grilled Lemon Herb Cod.jpg",
    stars: "4.7",
    reviews: "180",
    prepTime: 10,
    cookTime: 12,
    servings: "2",
    ingredients: [
      "2 Cod fillets (6 oz each)",
      "2 tablespoons Olive oil",
      "1 teaspoon Dried oregano",
      "1/2 teaspoon Smoked paprika",
      "Lemon slices and fresh parsley",
    ],
    instructions: [
      "Season: Rub fillets with olive oil, oregano, paprika, salt, and pepper.",
      "Grill: Place on a medium-high grill or grill pan. Cook for 5-6 minutes per side.",
      "Finish: Squeeze fresh lemon over the fish just before serving.",
    ],
    calories: "210",
    protein: "32",
    carbohydrates: "2",
    fat: "9",
    fiber: "1",
    sodium: "380",
    chefTips: [
      "Flipping: Use a wide fish spatula. Cod is delicate and can break easily when flipped.",
      "Oil the Grates: Make sure your grill is very clean and well-oiled to prevent the skinless fish from sticking.",
    ],
  },
  {
    name: "Spicy Sesame Tofu Stir-Fry",
    desc: "Crispy tofu cubes and vibrant bell peppers tossed in a spicy, ginger-sesame sauce",
    category: ["Easy", "Vegetarian"],
    img: "img/Spicy Sesame Tofu Stir-Fry.jpg",
    stars: "4.5",
    reviews: "290",
    prepTime: 15,
    cookTime: 15,
    servings: "2",
    ingredients: [
      "1 block Extra-firm tofu, pressed and cubed",
      "2 tablespoons Cornstarch",
      "2 Bell peppers, sliced",
      "2 tablespoons Sriracha or chili paste",
      "3 tablespoons Soy sauce",
      "1 tablespoon Sesame oil",
    ],
    instructions: [
      "Crisp: Toss tofu in cornstarch. Fry in a hot pan with oil until all sides are golden and crispy.",
      "Veggies: Remove tofu. Add peppers to the pan and stir-fry for 3 minutes.",
      "Sauce: Whisk soy sauce, Sriracha, and sesame oil. Pour into the pan.",
      "Toss: Return tofu to the pan and toss until the sauce thickens and coats everything.",
    ],
    calories: "340",
    protein: "18",
    carbohydrates: "22",
    fat: "20",
    fiber: "4",
    sodium: "850",
    chefTips: [
      "Press the Tofu: Use a heavy object to press the water out of the tofu for 15 minutes before cooking. This ensures maximum crispiness.",
      "Cornstarch: Don't skip the cornstarch coating; it's what gives the tofu that \"restaurant-style\" crunch.",
    ],
  },
  {
    name: "Mediterranean Chickpea Salad",
    desc: "Refreshing, no-cook salad with chickpeas, cucumbers, tomatoes, and a tangy lemon dressing",
    category: ["Easy", "Healthy"],
    img: "img/Mediterranean Chickpea Salad.jpg",
    stars: "4.6",
    reviews: "150",
    prepTime: 15,
    cookTime: 0,
    servings: "4",
    ingredients: [
      "2 cans Chickpeas, rinsed",
      "1 English cucumber, diced",
      "1 cup Cherry tomatoes, halved",
      "1/4 cup Red onion, finely chopped",
      "1/2 cup Feta cheese",
      "Dressing: Olive oil, lemon juice, dried oregano.",
    ],
    instructions: [
      "Combine: In a large bowl, mix chickpeas, cucumber, tomatoes, and onion.",
      "Dress: Whisk dressing ingredients and pour over the salad.",
      "Finish: Gently stir in the feta cheese and chill for 10 minutes.",
    ],
    calories: "280",
    protein: "12",
    carbohydrates: "38",
    fat: "10",
    fiber: "10",
    sodium: "420",
    chefTips: [
      "Freshness: Use the highest quality olive oil you have; since there is no cooking, the oil's flavor stands out.",
      'Mint: Adding a handful of fresh chopped mint or parsley adds a layer of "brightness" to the salad.',
    ],
  },
  {
    name: "Garlic Herb Roasted Potatoes",
    desc: "Crispy on the outside, fluffy on the inside golden potatoes with toasted garlic",
    category: ["Easy", "Vegetarian"],
    img: "img/Garlic Herb Roasted Potatoes.jpg",
    stars: "4.8",
    reviews: "420",
    prepTime: 10,
    cookTime: 35,
    servings: "4",
    ingredients: [
      "1kg Baby potatoes, halved",
      "3 tablespoons Olive oil",
      "4 cloves Garlic, minced",
      "1 tablespoon Fresh rosemary, chopped",
      "Salt and pepper",
    ],
    instructions: [
      "Toss: Mix potatoes with oil, garlic, and rosemary on a baking sheet.",
      "Roast: Bake at 400°F (200°C) for 30-35 minutes.",
      "Flip: Toss halfway through to ensure even browning.",
    ],
    calories: "240",
    protein: "4",
    carbohydrates: "35",
    fat: "10",
    fiber: "5",
    sodium: "180",
    chefTips: [
      "Steam First: For extra-crispy potatoes, boil them for 5 minutes before roasting to roughen up the edges.",
      "Garlic Timing: If you find the garlic is burning, add it only for the last 10 minutes of roasting.",
    ],
  },
];
randomRecipes();

var oldRandomNum;

function randomNumber() {
  do {
    var randomNum = Math.floor(Math.random() * 10);
  } while (randomNum === oldRandomNum);

  oldRandomNum = randomNum;
  return randomNum;
}
function randomRecipes() {
  var randomNum = randomNumber();

  starsElement.innerHTML = recipes[randomNum].stars;
  reviewsElement.innerHTML = recipes[randomNum].reviews;
  recipeImgElement.src = recipes[randomNum].img;
  prepTimeElement.innerHTML = recipes[randomNum].prepTime;
  cookTimeElement.innerHTML = recipes[randomNum].cookTime;
  servingsElement.innerHTML = recipes[randomNum].servings;
  nameElement.innerHTML = recipes[randomNum].name;
  descElement.innerHTML = recipes[randomNum].desc;
  category1Element.innerHTML = recipes[randomNum].category[0];
  category2Element.innerHTML = recipes[randomNum].category[1];

  var ingredientsContaner = "";
  for (var i = 0; i < recipes[randomNum].ingredients.length; i++) {
    ingredientsContaner += `<div class="line d-flex flex-row mb-2 pb-1">
        <span
        class="number rounded-circle text-white fs-12px fw-bold d-flex justify-content-center align-items-center flex-shrink-0"
        >${i + 1}</span
        >
        <span>${recipes[randomNum].ingredients[i]}</span>
        </div>`;
  }
  ingredientsElement.innerHTML = ingredientsContaner;

  var instructionsContaner = "";
  for (var j = 0; j < recipes[randomNum].instructions.length; j++) {
    instructionsContaner += `<div class="line d-flex flex-row mb-4 align-items-center">
                  <span
                    class="number rounded-4 text-white fs-5 fw-bold d-flex justify-content-center align-items-center me-3 flex-shrink-0 flex-shrink-0"
                    >${j + 1}</span
                  >
                  <span>${recipes[randomNum].instructions[j]}</span>
                </div>`;
  }
  instructionsElement.innerHTML = instructionsContaner;

  caloriesElement.innerHTML = recipes[randomNum].calories;
  proteinElement.innerHTML = recipes[randomNum].protein;
  carbohydratesElement.innerHTML = recipes[randomNum].carbohydrates;
  fatElement.innerHTML = recipes[randomNum].fat;
  fiberElement.innerHTML = recipes[randomNum].fiber;
  sodiumElement.innerHTML = recipes[randomNum].sodium;

  var chefTipsContaner = "";
  for (var k = 0; k < recipes[randomNum].chefTips.length; k++) {
    chefTipsContaner += `<div class="line p-3 d-flex flex-row align-items-center mb-3">
                  <i class="fa-solid fa-circle-check me-2-5 fs-5"></i>
                  <p class="m-0 py-1">${recipes[randomNum].chefTips[k]}</p>
                </div>`;
  }
  chefTipsElement.innerHTML = chefTipsContaner;

  if (recipes[randomNum].cookTime + recipes[randomNum].prepTime > 45) {
    alertElement.classList.remove("d-none");
  } else {
    alertElement.classList.add("d-none");
  }
  mainElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
