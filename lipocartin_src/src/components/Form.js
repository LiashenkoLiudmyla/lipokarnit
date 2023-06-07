import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setNameError("Ім'я повинно містити принаймні 3 символи");
    } else {
      setNameError("");
    }
  };

  const handlePhoneChange = (event) => {
    const phoneNumber = event.target.value.replace(/[\s-]/g, ""); // Відсікаємо пробіли та тире
    setPhone(phoneNumber);
    if (phoneNumber.length !== 10) {
      setPhoneError("Номер телефону повинен містити 10 цифр");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length >= 3 && phone.length === 10) {
      alert("Дані валідні. Форма успішно відправлена!");
      setName(""); // Очищення поля імені
      setPhone(""); // Очищення поля номера телефону
    } else {
      alert("Будь ласка, введіть коректні дані");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Ваше ім'я"
          value={name}
          onChange={handleNameChange}
          className="form-input"
        />
        {nameError && <div className="error">{nameError}</div>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Ваш номер телефону"
          value={phone}
          onChange={handlePhoneChange}
          className="form-input"
        />
        {phoneError && <div className="error">{phoneError}</div>}
      </div>
      <button type="submit" className="form-button">
        ОТРИМАТИ ЛИПОКАРТИН+ БЕЗКОШТОВНО*
      </button>
      <p className="form-text">*при замовленні курсу</p>
    </form>
    
  );
};

export default Form;