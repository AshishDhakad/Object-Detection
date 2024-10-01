import { useState } from "react";
import Image1 from "../assets/img/image_1.png";
import Image2 from "../assets/img/image_2.png";
import Image3 from "../assets/img/image_3.png";

const Slider = () => {
  const [slideId, setSlideId] = useState(0);

  const changeSlideId = (id) => {
    setSlideId(id);
  };

  return (
    <div className="inner-right-box">
      <div>
        {slideId === 0 && <img alt="ai" className="image" src={Image1} />}
        {slideId === 1 && <img alt="ai" className="image" src={Image2} />}
        {slideId === 2 && <img alt="ai" className="image" src={Image3} />}
      </div>

      <div>
        <div className="text-wrap">
          {slideId === 0 && (
            <h2 className="text">Spot Faces, Age, Gender & Emotions</h2>
          )}
          {slideId === 1 && (
            <h2 className="text">Discover Objects - Identify What's Around</h2>
          )}
          {slideId === 2 && (
            <h2 className="text">Find Celebrities - Spot the Stars</h2>
          )}
        </div>
        <div className="bullets">
          <span
            className={slideId === 0 && "active"}
            onClick={() => changeSlideId(0)}
          ></span>
          <span
            className={slideId === 1 && "active"}
            onClick={() => changeSlideId(1)}
          ></span>
          <span
            className={slideId === 2 && "active"}
            onClick={() => changeSlideId(2)}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
