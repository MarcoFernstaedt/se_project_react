import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithConfirmation from "../ModalWithConfirmation/ModalWithConfirmation";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import ProtectedRoute from "../../utils/ProtectedRoute.js";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getCards,
  postCard,
  deleteCard,
  removeCardLike,
  addCardLike,
  updateUser,
} from "../../utils/api";
import { signup, signin, checkTokenValidity } from "../../utils/auth";
import {
  getForecastWeather,
  parseCityData,
  parseWeatherData,
} from "../../utils/weatherApi.js";
import "./App.css";

const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [originalTemp, setOriginalTemp] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
      handleTempConversion(temp);
    } else {
      setCurrentTemperatureUnit("F");
      handleTempConversion(temp);
    }
  };

  const handleTempConversion = (temp) => {
    if (currentTemperatureUnit === "F") {
      // Convert Fahrenheit to Celsius
      setTemp(Math.round(((temp - 32) * 5) / 9));
    } else {
      // Convert Celsius to Fahrenheit
      setTemp(Math.round((temp * 9) / 5 + 32));
    }
  };

  const getToken = () => {
    return localStorage.getItem("jwt");
  };

  const handleOnAddItemSubmit = ({ name, imageUrl, weather }) => {
    const token = getToken();
    const newItem = {
      name,
      imageUrl,
      weather,
      token,
    };

    setIsLoading(true);

    postCard(newItem)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUpdateUserSubmit = ({ name, avatar }) => {
    const token = getToken();
    const newdata = {
      name,
      avatar,
      token,
    };

    setIsLoading(true);

    updateUser(newdata)
      .then((userData) => {
        setCurrentUser(() => ({
          _id: currentUser._id,
          name: userData.data.name,
          avatar: userData.data.avatar,
          email: userData.data.email,
        }));

        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const loggedInUser = await signin({ email, password });
      setCurrentUser(loggedInUser.user);
      setIsLoggedIn(true);
      localStorage.setItem("jwt", loggedInUser.token);
      handleCloseModal();
    } catch (err) {
      console.error("Login Failed: ", err);
    }
  };

  const handleRegister = async ({ name, email, password, avatar }) => {
    try {
      const newUser = await signup({ name, email, password, avatar });
      setCurrentUser(newUser);
      setIsLoggedIn(true);
      localStorage.setItem("jwt", newUser.token);
      handleCloseModal();
    } catch (err) {
      console.error("Registration Failure: ", err);
    }
  };

  const handleLogOut = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
  };

  const handleLoginModalOpen = () => {
    setActiveModal("login");
  };

  const handleRegisterModalOpen = () => {
    setActiveModal("register");
  };

  const openConfirmationModal = () => {
    setActiveModal("delete");
  };

  const handleCardDelete = (id) => {
    const token = getToken();

    const data = {
      id,
      token,
    };

    setIsLoading(true);

    deleteCard(data)
      .then(() => {
        const updatedClothing = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(updatedClothing);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = getToken();
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        // the first argument is the card's id
        addCardLike({ id, token })
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        // the first argument is the card's id
        removeCardLike({ id, token })
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchUserDataAndWeather = async () => {
      const token = getToken();

      if (token) {
        try {
          const userData = await checkTokenValidity(token);
          setCurrentUser({
            _id: userData._id,
            name: userData.name,
            avatar: userData.avatar,
            email: userData.email,
          });
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Invalid token:", error);
          localStorage.removeItem("jwt");
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
        localStorage.removeItem("jwt");
      }

      try {
        const weatherData = await getForecastWeather();
        setCity(parseCityData(weatherData));
        setTemp(parseWeatherData(weatherData));
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserDataAndWeather();
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await getCards();
        setClothingItems(cards.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCards();
  }, [clothingItems]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onLoginModal={handleLoginModalOpen}
            onRegisterModal={handleRegisterModalOpen}
            onCreateModal={handleCreateModal}
            weatherCity={city}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                onCardLike={handleCardLike}
                clothingItems={clothingItems}
              />
            </Route>
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              render={() => {
                return (
                  <Profile
                    handleEditProfileModal={handleEditProfileModal}
                    handleLogOut={handleLogOut}
                    onSelectCard={handleSelectedCard}
                    onCardLike={handleCardLike}
                    handleOpenModal={handleCreateModal}
                    clothingItems={clothingItems}
                  />
                );
              }}
            />
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleOnAddItemSubmit}
              buttonText={!isLoading ? "Add garment" : "Adding..."}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              openModal={openConfirmationModal}
              buttonText={!isLoading ? "Delete Item" : "Deleting..."}
            />
          )}
          {activeModal === "delete" && (
            <ModalWithConfirmation
              isOpen={activeModal === "delete"}
              onClose={handleCloseModal}
              isSelectedCard={selectedCard}
              onSubmit={handleCardDelete}
              buttonText={!isLoading ? "Delete" : "Deleting..."}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              isOpen={activeModal === "login"}
              openRegisterModal={handleRegisterModalOpen}
              onSubmit={handleLogin}
              buttonText={!isLoading ? "Log In" : "logging in..."}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              isOpen={activeModal === "register"}
              openLoginModal={handleLoginModalOpen}
              onSubmit={handleRegister}
              buttonText={!isLoading ? "Sign In" : "Signing in..."}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              isOpen={activeModal === "edit"}
              onClose={handleCloseModal}
              onSubmit={handleUpdateUserSubmit}
              buttonText={isLoading ? "Saving..." : "Save Changes"}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
