// The second argument/parameter is expected to be a function
var arrayposition = [];

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      arrayposition = arr.indexOf("Waldo");
      found();   // execute callback
    }
  }
}

function actionWhenFound(arr) {
  console.log("Found him at position " + arrayposition);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);