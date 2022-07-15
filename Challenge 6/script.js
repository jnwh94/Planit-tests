fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
  .then(response => {
    return response.json();
  })
  .then(results => {
    console.log("No. of pets: "+results.length);
  });