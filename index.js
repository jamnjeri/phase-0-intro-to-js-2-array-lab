// Create an array called cats
const cats = ["Milo", "Otis", "Garfield"];

//Function to destructively add a cat (Ralph) to end of Array
function destructivelyAppendCat() {
  cats.push(`Ralph`);
  return cats;
}
//Function to destructively add a cat (Bob) to beginning of Array
function destructivelyPrependCat(){
  cats.unshift("Bob");
  return cats;
}

//Function to destructively remove last cat name from end of Array
function destructivelyRemoveLastCat(){
  cats.pop("Bob");
  return cats;
}
//Function to destructively remove first cat name from beginning of Array
function destructivelyRemoveFirstCat(){
  cats.shift("Bob");
  return cats;
}
//Function to non-destructively add a cat name (Broom) to end of Array
function appendCat(){
  const copyOfCats= [...cats, "Broom"];
  return copyOfCats;
}
//Function to non-destructively add a cat name (Broom) to beginning of Array
function prependCat(){
  const copyOfCats= ["Arnold", ...cats];
  return copyOfCats;
}
//Function to non-destructively remove the last cat name from the Array
function removeLastCat(){
  const copyOfCats= cats.slice(0,2);
  return copyOfCats;
}
//Function to non-destructively remove the first cat name from the Array
function removeFirstCat(){
  const copyOfCats= cats.slice(1);
  return (copyOfCats);
}
