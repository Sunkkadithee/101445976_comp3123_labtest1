const delayedSuccess = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        resolve(success); 
      }, 500);
    });
  };
  
  
  const delayedException = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        let error = { 'error': 'delayed exception!' };
        reject(error); 
      }, 500);
    });
  };
  

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
  