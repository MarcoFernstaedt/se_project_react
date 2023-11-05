const baseUrl = "http://localhost:3000";

const getItems = () => {
    fetch(`${baseUrl}/items`)
  .then((res) => {
    if (res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
}

// PUT PATCH POST header reqirment Content-Type: application/json

export {getItems};