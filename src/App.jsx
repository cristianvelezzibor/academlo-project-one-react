import { useState } from "react";
import "./App.css";
import phrases from "./assets/phrases.json";
import { getRandomNumber } from "./utils/getRandomNumber";
import ButtonPhrase from "../components/Button/ButtonPhrase";
import PhraseText from "../components/PhraseText/PhraseText";
import imageOne from "./assets/img/09d6cdfca4c804329824a3e7bb3b2971.jpg";
import imageTwo from "./assets/img/98fd2f90a1b38be82e3aae9db4a1d455.jpg";
import imageThree from "./assets/img/955307b123846d946a86d90dec4f47dc.jpg";
import imageFour from "./assets/img/c8b1cc076bd8a4731c0e25a15c15dea4.jpg";

function App() {
  let getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  let [phraseObj, setPhraseObj] = useState(getRandomPhrase());
  let changePhrase = () => {
    let newPhrase = getRandomPhrase();
    while (newPhrase.phrase == phraseObj.phrase) {
      newPhrase = getRandomPhrase();
    }
    setPhraseObj(newPhrase);
  };

  let imgsArray = [imageOne, imageTwo, imageThree, imageFour];
  let getRandomImage = () => imgsArray[getRandomNumber(imgsArray.length - 1)];
  const [imgCurrent, setImgCurrent] = useState(getRandomImage());
  let changeImage = () => {
    let newImageCurrent = getRandomImage();
    console.log(newImageCurrent);
    if (newImageCurrent == imgCurrent) {
      newImageCurrent = getRandomImage();
    }
    setImgCurrent(newImageCurrent);
  };

  let changeInterface = () => {
    changePhrase();
    changeImage();
  };

  return (
    <div
      className="containerAll"
      style={{ backgroundImage: `url("${imgCurrent}")` }}
    >
      <h1 className="title">INFOGALAX</h1>
      <PhraseText phrase={phraseObj.phrase} />
      <ButtonPhrase eventClick={changeInterface} />
    </div>
  );
}

export default App;
