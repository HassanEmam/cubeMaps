import { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import PropTypes from "prop-types";

const CameraCapture = ({ onSaveCubemap }) => {
  const [step, setStep] = useState(0);
  const [orientation, setOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });
  const [isAligned, setIsAligned] = useState(false);
  const directions = [
    {
      name: "Front",
      target: { alpha: 0, beta: 90 },
      instruction: "Face the front wall.",
    },
    {
      name: "Right",
      target: { alpha: 90, beta: 90 },
      instruction: "Rotate 90° to the right.",
    },
    {
      name: "Back",
      target: { alpha: 180, beta: 90 },
      instruction: "Rotate 180° to face the back wall.",
    },
    {
      name: "Left",
      target: { alpha: -90, beta: 90 },
      instruction: "Rotate 90° to the left.",
    },
    {
      name: "Top",
      target: { alpha: 0, beta: -180 },
      instruction: "Tilt the camera upwards.",
    },
    {
      name: "Bottom",
      target: { alpha: 0, beta: 0 },
      instruction: "Tilt the camera downwards.",
    },
  ];
  const tolerance = 5; // Tolerance in degrees
  const [images, setImages] = useState([]);
  const webcamRef = useRef(null);

  useEffect(() => {
    const handleOrientation = (event) => {
      const { alpha, beta, gamma } = event;
      setOrientation({ alpha, beta, gamma });

      // Check if the orientation is within tolerance
      if (step < directions.length) {
        const target = directions[step].target;
        const isAlignedAlpha =
          Math.abs((target.alpha - alpha + 360) % 360) <= tolerance ||
          Math.abs((target.alpha - alpha - 360) % 360) <= tolerance;
        const isAlignedBeta = Math.abs(target.beta - beta) <= tolerance;

        setIsAligned(isAlignedAlpha && isAlignedBeta);
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [step]);

  const captureImage = () => {
    if (webcamRef.current && isAligned) {
      const imageSrc = webcamRef.current.getScreenshot({
        width: 512,
        height: 512,
      });
      setImages([...images, imageSrc]);
      setStep(step + 1);
    }
  };

  const handleSave = () => {
    if (images.length === 6) {
      onSaveCubemap(images);
    }
  };

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      {step < directions.length ? (
        <>
          <h2>Capture: {directions[step].name}</h2>
          <p>{directions[step].instruction}</p>
          <p>
            Current Orientation: Alpha: {Math.round(orientation.alpha)}°, Beta:{" "}
            {Math.round(orientation.beta)}°
          </p>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              ref={webcamRef}
              style={{ width: "512px", height: "512px" }}
            />
            {/* Directional Arrow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: isAligned ? "green" : "red",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              {step === 0
                ? "↑"
                : step === 1
                ? "→"
                : step === 2
                ? "→"
                : step === 3
                ? "→"
                : step === 4
                ? "↑"
                : "↓"}
            </div>
          </div>
          <button
            onClick={captureImage}
            style={{ marginTop: "20px" }}
            disabled={!isAligned}
          >
            Capture {directions[step].name}
          </button>
        </>
      ) : (
        <>
          <h2>Capture Complete!</h2>
          <p>All six images have been successfully captured.</p>
          <button onClick={handleSave} style={{ marginTop: "20px" }}>
            Save Cubemap
          </button>
        </>
      )}
    </div>
  );
};

CameraCapture.propTypes = {
  onSaveCubemap: PropTypes.func.isRequired,
};

export default CameraCapture;
