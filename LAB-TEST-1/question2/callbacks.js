// Function to resolve a promise with a success message
const delayedSuccess = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        resolve(success); // Resolve the promise with the success message
      }, 500);
    });
  };
  
  // Function to reject a promise with an error message
  const delayedException = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        let error = { 'error': 'delayed exception!' };
        reject(error); // Reject the promise with the error message
      }, 500);
    });
  };
  
  // Call both functions and handle results
  Promise.allSettled([delayedSuccess(), delayedException()])
    .then((results) => {
      results.forEach(result => {
        if (result.status === "fulfilled") {
          console.log(result.value); 
        } else {
          console.log(result.reason); 
        }
      });
    });
  