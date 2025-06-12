const mainIngredients = [
  "fluffy clouds",
  "a single sock",
  "existential dread",
  "leftover Tuesday",
  "a well-meaning badger",
  "the sound of silence",
  "yesterday's sunshine",
  "a forgotten dream",
  "sparkle dust",
  "a rogue potato",
  "the echoes of a forgotten laugh",
  "a whisper of autumn leaves",
];

const preparationMethods = [
  "gently sautéed in moonlight",
  "slow-roasted with forgotten memories",
  "finely chopped and whispered",
  "deep-fried in paradox",
  "whipped with pure imagination",
  "marinated in awkward pauses",
  "boiled until it achieves enlightenment",
  "smoked over ancient mysteries",
  "infused with existential dread",
  "baked in a quantum oven",
  "blended with the tears of a cosmic clown",
  "pan-fried in a puddle of starlight",
];

const servingSuggestions = [
  "serve with a side of cosmic dust",
  "garnish with sprinkles of doubt",
  "best enjoyed under a waxing gibbous moon",
  "pairs well with interpretive dance",
  "best served lukewarm with a sigh",
  "sprinkled with a pinch of irony",
  "accompanied by the tears of a clown",
  "on a bed of unfulfilled prophecies",
  "drizzled with the essence of 'maybe'",
  "with a side of awkward silence",
  "served in a teacup of forgotten promises",
  "garnished with a single, knowing wink",
];

const cookingTimes = [
  "for exactly 7 millennia",
  "until the fabric of reality shimmers",
  "at the temperature of a lukewarm wish",
  "until it feels 'right'",
  "for precisely 3.14 seconds",
  "over a low flame of confusion",
  "until your third eye opens",
  "just before dawn, or after dusk",
  "until cosmic alignment",
  "for eternity, or until done",
  "until the platypus learns to fly",
  "just long enough for a good existential crisis",
];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateAbsurdRecipe() {
  const ingredient = getRandomElement(mainIngredients);
  const method = getRandomElement(preparationMethods);
  const suggestion = getRandomElement(servingSuggestions);
  const time = getRandomElement(cookingTimes);

  const recipe = `Take ${ingredient}, ${method}, and ${suggestion}. Cook ${time}.`;

  return recipe;
}

const recipeOutputDiv = document.getElementById("recipeOutput");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
  recipeOutputDiv.textContent = generateAbsurdRecipe();
});

document.addEventListener("DOMContentLoaded", () => {
  recipeOutputDiv.textContent = generateAbsurdRecipe();
});
