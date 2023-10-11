
  

  function task(arr) {
    if (arr.length > 0) {
      const birinchi = arr.shift(); 
      arr.push(birinchi); 
    }
    return arr;
  }
  
  const array = [7, 0, 5, 3, 4, 2];
  const result = task(array);
  console.log(result);
  
  