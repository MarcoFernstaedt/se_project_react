import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithConfirmation from "../ModalWithConfirmation/ModalWithConfirmation";
// import LoginModal from "../LoginModal/LoginModal.js";
// import RegisterModal from "../RegisterModal/RegisterModal.js";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { Route, Switch } from "react-router-dom";
import { getCards, postCard, deleteCard } from "../../utils/api";
// import { signup, signin, checkTokenValidity } from "../../utils/auth";
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

  const handleOnAddItemSubmit = ({ name, imageUrl, weather }) => {
    const newItem = {
      name,
      imageUrl,
      weather,
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

  // const handleLogin = async ({ email, password }) => {
  //   try {
  //     const loggedInUser = await signin(email, password);
  //     setCurrentUser(loggedInUser);
  //     setIsLoggedIn(true);
  //     localStorage.setItem("jwt", loggedInUser.token);
  //     handleCloseModal();
  //   } catch (err) {
  //     console.error("Login Failed: ", err);
  //   }
  // };

  // const handleRegister = async ({ name, email, password, avatar }) => {
  //   try {
  //     const newUser = await signup({ name, email, password, avatar });
  //     setCurrentUser(newUser);
  //     setIsLoggedIn(true);
  //     localStorage.setItem("jwt", newUser.token);
  //     handleCloseModal();
  //   } catch (err) {
  //     console.error("Registration Failure: ", err);
  //   }
  // };

  const handleLogOut = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
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

  const handleCardDelete = () => {
    setIsLoading(true);
    deleteCard(selectedCard._id)
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

  useEffect(() => {
    // const token = localStorage.getItem("jwt");
    // if (token) {
    //   checkTokenValidity(token)
    //     .then((userData) => {
    //       setCurrentUser(userData);
    //     })
    //     .catch((error) => {
    //       console.error("Invalid token:", error);
    //       setCurrentUser(null);
    //       localStorage.removeItem("jwt");
    //     });
    // }

    getForecastWeather()
      .then((data) => {
        setCity(parseCityData(data));
        setTemp(parseWeatherData(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(originalTemp);

  useEffect(() => {
    getCards()
      .then((cards) => {
        setClothingItems(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      {/* <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}> */}
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onCreateModal={handleCreateModal} weatherCity={city} />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            </Route>
            <Route path="/profile">
              <Profile
                onSelectCard={handleSelectedCard}
                handleOpenModal={handleCreateModal}
                clothingItems={clothingItems}
              />
            </Route>
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
              onSubmit={handleCardDelete}
              buttonText={!isLoading ? "Delete" : "Deleting..."}
            />
          )}
          {/* {activeModal === "login" && (
            // <LoginModal
            //   handleCloseModal={handleCloseModal}
            //   isOpen={activeModal === "login"}
            //   onSubmit={handleLogin}
            //   buttonText={!isLoading ? "Log In" : "Adding..."}
            // />
          )} */}
          {/* {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register"}
              onSubmit={handleRegister}
              buttonText={!isLoading ? "Register" : "Adding..."}
            />
          )} */}
        </CurrentTemperatureUnitContext.Provider>
      {/* </CurrentUserContext.Provider> */}
    </div>
  );
};

export default App;
