import React, { useState } from 'react';
import birthday from '../Assets/birthday.jpg';
import harshu from '../Assets/harshu.jpg';
import harshi from '../Assets/harshi.jpg';
import harsh from '../Assets/harsh.jpg';
import harshiy from '../Assets/harshiy.jpg';
import harshiym from '../Assets/harshiym.jpg';
import HY from '../Assets/HY.mp4';

export const Birthdaywish = () => {
  const [imageSrc, setImageSrc] = useState(birthday);
  const [imageContent, setImageContent] = useState("Happy");

  const [image, setImage] = useState(harsh);
  const [imageContent2, setImageContent2] = useState("Birthday ");

  const [imageh, setImageh] = useState(harshiy);
  const [imageContent3, setImageContent3] = useState("Hrshu");

  const handleImageChange = () => {
    setImageSrc(imageSrc === birthday ? harshu : birthday);
    setImageContent("Happy Birthday to the most amazing sister in the world! 🎂🎉");
  };

  const handleImage = () => {
    setImage(image === harsh ? harshi : harsh);
    setImageContent2("Wishing you a day filled with joy and laughter! 🎈🎁");
  };

  const handle = () => {
    setImageh(imageh === harshiy ? harshiym : harshiy);
    setImageContent3("May your day be as special as you are! 🌟🎂");
  };

  return (
    <>
      <div className="card">
        <img
          src={imageSrc}
          className="card-img-top"
          onClick={handleImageChange}
          onTouchStart={handleImageChange}
        />
        {/* <h5 className="card-title">Happy Birthday</h5> */}
        <p className="card-text">{imageContent}</p>

        <img
          src={image}
          className="card-img-top"
          onClick={handleImage}
          onTouchStart={handleImage}
        />
        {/* <h5 className="card-title">Happy Birthday</h5> */}
        <p className="card-text">{imageContent2}</p>

        <img
          src={imageh}
          className="card-img-top"
          onClick={handle}
          onTouchStart={handle}
        />
        {/* <h5 className="card-title">Happy Birthday</h5> */}
        <p className="card-text">{imageContent3}</p>

        <video controls className="card-img-top">
          <source src={HY} type="video/mp4" />
        </video>
        <div className="card-body">
          {/* Additional content if needed */}
        </div>
      </div>
    </>
  );
};
