// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  arr.forEach(function(name, index, arr) {
    if (name == "Waldo") {
      found(index);   // execute callback
    }
  })

}

function actionWhenFound(position) {
  console.log("Found him at position " + position);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
