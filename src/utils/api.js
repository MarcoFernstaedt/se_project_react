const baseUrl = "http://localhost:3001";

const request = (url, options) => {
  return fetch(url, options).then(processServerResponce);
};

const processServerResponce = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

const getCards = () => {
  return request(`${baseUrl}/items`);
};

const postCard = ({ name, imageUrl, weather }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  };

  return request(`${baseUrl}/items`, options);
};

const deleteCard = (id) => {
  const deleteOpiions = {
    method: "DELETE",
  };

  return request(`${baseUrl}/items/${id}`, deleteOpiions);
};

const updateUser = ({ name, avatar }) => {
  const token = getToken()
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  };

  return request(`${baseUrl}/user/me`, options);
};

const getToken = () => {
  return localStorage.getItem('token'); 
}

export { getCards, postCard, deleteCard, request, updateUser };
