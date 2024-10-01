import "./assets/styles/style.css";
import "react-responsive-modal/styles.css";
import logo from "./assets/img/react-ai.png";
import FileDropZone from "./components/dropZone";
import { useState } from "react";
import Slider from "./components/slider";
import axios from "axios";
import { Modal } from "react-responsive-modal";

const apiUrl = "https://python-api.techsimplus.com/api/amazon-service/";

const App = () => {
  const [values, setValues] = useState({
    image: null,
    service_type: "ObjectDetection",
  });

  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);

  const onFileChange = (file) => {
    setValues({ ...values, image: file });
  };

  const onServiceTypeChange = (type) => {
    setValues({ ...values, service_type: type });
  };

  const fileToBase64 = (file) => {
    return new Promise((reslove, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        let out = reader.result.split(",")[1];
        reslove(out);
      };

      reader.readAsDataURL(file);
    });
  };

  const onSubmitClick = async () => {
    if (!values.image) {
      alert("Please Select Image File");
      return;
    }

    let imageBase64 = await fileToBase64(values.image);
    let newValues = { ...values, image: imageBase64 };
    setLoading(true);
    let response = await axios.post(apiUrl, newValues);
    setResultImage(response.data.data.image);
    setLoading(false);
  };

  return (
    <div className="container">
      {resultImage && (
        <Modal onClose={() => setResultImage(null)} open={true}>
          <div className="result-image-container">
            <img alt="" src={resultImage} />
          </div>
        </Modal>
      )}

      {loading && (
        <div className="loading-overlay">
          <div className="loader" />
        </div>
      )}
      <div className="box">
        <div className="left-box">
          <div className="inner-left-box">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h4>AI-React</h4>
            </div>

            <div className="heading">
              <h2>AI-Powered Fun with React</h2>
              <h6>Let's Play Together!</h6>
            </div>
            {values.image && (
              <span style={{ color: "darkblue" }}>
                File: {values.image.name}
              </span>
            )}
            <FileDropZone onFileChange={onFileChange} />

            <div className="service-container">
              <div className="service-item">
                <input
                  onChange={() => onServiceTypeChange("ObjectDetection")}
                  checked={values.service_type === "ObjectDetection"}
                  type="radio"
                  name="service"
                />
                <label>Object Detection</label>
              </div>
              <div className="service-item">
                <input
                  onChange={() => onServiceTypeChange("FaceDetection")}
                  checked={values.service_type === "FaceDetection"}
                  type="radio"
                  name="service"
                />
                <label>Face Detection</label>
              </div>
              <div className="service-item">
                <input
                  onChange={() => onServiceTypeChange("CelebrityDetection")}
                  checked={values.service_type === "CelebrityDetection"}
                  type="radio"
                  name="service"
                />
                <label>Celebrity Detection</label>
              </div>
            </div>

            <button onClick={onSubmitClick} className="magic-btn">
              See The Magic
            </button>
          </div>
        </div>
        <div className="right-box">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default App;
