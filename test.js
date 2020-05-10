function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}


function reduce(arr, f, acc  ) {
  if (acc === undefined) {
    acc = arr[0];
    arr = arr.slice(1);
  }
​
  each(arr, function(element, i){
    acc = f(acc, element, i);
  });
​
  return acc;
}