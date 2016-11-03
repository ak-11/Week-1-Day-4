function findWaldo(names, found) {
  names.forEach(function(name, i) {  //Function can be anonymous. name and i can be name anything.
    if (name === "Waldo") found(i);
  })
}

function actionWhenFound(whereFound) {
  console.log("Found Waldo at index " + whereFound + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


