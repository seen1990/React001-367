import "./App.css";
import { useState } from "react"

export default function App(){
  const [level, setLevel]=useState(10);
  const [image, setImage] = useState("หมูเด้ง.jpg");

   // ฟังก์ชันป้อนอาหารและเพิ่มค่า Level
   const feed = (foodValue) => {
    setLevel((prevLevel) => {
      const newlevel = prevLevel + foodValue;

  // ถ้า level มากกว่า 100 จะเปลี่ยนเป็นรูปหมูกระทะ
      if (newlevel > 100) {
        setImage("หมูกระทะ.jpg"); 
      }
      return newlevel;
    });
  };

  return(
    <>
      <div className="game-container">
        <h1>เกมส์เลี้ยง "หมูเด้ง"</h1>
      </div>
      <div className="level-container">
        <h2>(Level : {level})</h2>
      </div>
      <div className="image-container" >
        <img className="image1" alt="หมูเด้ง" src={image} style={{width: `${150 + level}px`,height: "auto",borderRadius: "10px",}}/>
      </div>
    
      <div className="food-container">
        <div className="food-item">
          <img  className="image2" alt="แตงโม" src="แตงโม.jpg" />
          <button className="food-button watermelon" onClick={() => feed(5)}>
            แตงโม (Level +5)
          </button>
        </div>
        <div className="food-item">
          <img className="image3" alt="ฟักทอง" src="ฟักทอง.jpg" />
          <button className="food-button pumpkin" onClick={() => feed(10)}>
            ฟักทอง (Level +10)
          </button>
        </div>
        <div className="food-item">
          <img className="image4" alt="หญ้า" src="หญ้า.jpg" />
          <button className="food-button grass" onClick={() => feed(20)}>
            หญ้า (Level +20)
          </button>
        </div>
      </div>
    </>
  );
}


