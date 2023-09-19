import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { useState } from "react";
import "./App.css";

function App() {
  const weatherTemp = 75;
  const [activeModal, setActiveModal] = useState("");

  const handleCreateModal = () => {
    setActiveModal('create');
  }

  const handleCloseModal = () => {
    setActiveModal('');
  }

  return (
    <div className="App">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      {activeModal === 'create' && (
        <ModalWithForm title="New Garmnet" onClose={handleCloseModal}>
          <label className="form__label">Name</label>
          <input className='form__input' type="text" name="name" minLength="1" maxLength="36" placeholder="Name" />
          <label className='form__label' >Image</label>
          <input className="form__input" type="url" name="link" placeholder="Image URL" />
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>cold</label>
            </div>
          </div>
        </ModalWithForm>
      )};
    </div>
  );
}

export default App;
