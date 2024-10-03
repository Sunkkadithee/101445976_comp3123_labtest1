function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      try {
        const result = mixedArray
          .filter((item) => typeof item === 'string') 
          .map((item) => item.toLowerCase()); 
        resolve(result); 
      } catch (error) {
        reject('An error occurred while processing the array.');
      }
    });
  }
  
  // Test the function
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then((result) => console.log(result)) // Output: ['pizza', 'wings']
    .catch((error) => console.error(error));
  