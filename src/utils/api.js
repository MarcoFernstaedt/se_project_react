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

const postCard = ({ name, imageUrl, weather, token }) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  };

  return request(`${baseUrl}/items`, options);
};

const deleteCard = ({ id, token }) => {
  const deleteOpiions = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  return request(`${baseUrl}/items/${id}`, deleteOpiions);
};

// addCardLike
const addCardLike = ({ id, token }) => {
  const options = {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return request(`${baseUrl}/items/${id}/likes`, options);
};

// removeCardLike
const removeCardLike = ({ id, token }) => {
  const options = {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return request(`${baseUrl}/items/${id}/likes`, options);
};

const updateUser = ({ name, avatar, token }) => {
  const options = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  };

  return request(`${baseUrl}/users/me`, options);
};

export {
  getCards,
  postCard,
  deleteCard,
  request,
  removeCardLike,
  addCardLike,
  updateUser,
};
