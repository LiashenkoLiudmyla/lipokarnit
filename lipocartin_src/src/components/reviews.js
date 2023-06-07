import React from "react";
import "./reviews.css"; // Підключте свій файл стилів для компонента
import luda1 from "../img/l1.jpg";
import luda2 from "../img/l2.jpg";
import luda3 from "../img/l3.jpg";
import luda4 from "../img/l4.jpg";
import lenka1 from '../img/len1.jpg'
import lenka2 from '../img/len2.jpg'
import lenka3 from '../img/len3.jpg'

const Reviews = () => {
  return (
    <>
    <hr className="horizontal-line" />
    <h2>Відгуки</h2>
    
    <div className="reviews-container">
      
      <div className="flex-container">
        <div className="left-column">
          <img className="photo_ludmila" src={luda1} alt="foto Ludmila" />
          <p className="image-caption">ЛЮДМИЛА</p>
        </div>
        <div className="right-column">
          <p className="text">
            Живу в м Дніпро з самого народження. Через свою роботу схильна до
            зайвої ваги і колись давно я важила майже 140 кг. Я замовила для
            схуднення 2 курса «Липокарнит+» і тепер важу неймовірні 71кг.
            Результат - мінус 69 кг за 3,5 місяці! Вага тримається! Я з гордість
            хочу показати вам фотографії - результат моєї боротьби із зайвою
            вагою. Я навіть не вірила, що зможу настільки змінитися в свої роки,
            але виявилося схуднути реально в будь-якому віці! Спасибі Анні, що
            розказала про цей засіб. І посилка з розіграшу прийшла дуже швидко.
            Дякую за розіграш, заощадила значить заробила.
            <br />
          </p>
        </div>
      </div>
      <div className="three-photos">
        <img className="photo" src={luda2} alt="foto Ludmila" />
        <img className="photo photo-centrum" src={luda3} alt="foto Ludmila" />
        <img className="photo" src={luda4} alt="foto Ludmila" />
      </div>






      <div className="flex-container">
        <div className="left-column">
          <img className="photo_ludmila" src={lenka1} alt="foto Lenka" />
          <p className="image-caption">ОЛЕНА</p>
        </div>
        <div className="right-column">
          <p className="text">
            Живу в м Дніпро з самого народження. Через свою роботу схильна до
            зайвої ваги і колись давно я важила майже 140 кг. Я замовила для
            схуднення 2 курса «Липокарнит+» і тепер важу неймовірні 71кг.
            Результат - мінус 69 кг за 3,5 місяці! Вага тримається! Я з гордість
            хочу показати вам фотографії - результат моєї боротьби із зайвою
            вагою. Я навіть не вірила, що зможу настільки змінитися в свої роки,
            але виявилося схуднути реально в будь-якому віці! Спасибі Анні, що
            розказала про цей засіб. І посилка з розіграшу прийшла дуже швидко.
            Дякую за розіграш, заощадила значить заробила.
            <br />
          </p>
        </div>
      </div>
      <div className="three-photos">
        <img className="photo" src={lenka2} alt="foto Ludmila" />
        <img className="photo photo-centrum" src={lenka3} alt="foto Ludmila" />
      </div>



      


      
      
    </div>
    
   
    </>
  );
};

export default Reviews;
