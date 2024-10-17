import React, { useState } from "react";
import Button from "../../Components/Button";
import LogoBack from "../../Components/LogoBack";
import { useNavigate } from "react-router-dom";
import "./adventure.css";

function Accommodation() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate("/accommodations");
  };

  const images = [
    {
      id: 1,
      src: "/src/assets/t-4.png",
      alt: "Tree House 1",
      title: "Tree House",
    },
    {
      id: 2,
      src: "/src/assets/t-5.png",
      alt: "Tree House 2",
      title: "Tree House",
    },
    {
      id: 3,
      src: "/src/assets/t-6.png",
      alt: "Tree House 3",
      title: "Tree House",
    },
    {
      id: 4,
      src: "/src/assets/t-7.png",
      alt: "Tree House 4",
      title: "Tree House",
    },
    {
      id: 5,
      src: "/src/assets/t-2.png",
      alt: "Tree House 5",
      title: "Tree House",
    },
    {
      id: 6,
      src: "/src/assets/t-1.png",
      alt: "Tree House 6",
      title: "Tree House",
    },
    {
      id: 7,
      src: "/src/assets/t-4.png",
      alt: "Tree House 7",
      title: "Tree House",
    },
    {
      id: 8,
      src: "/src/assets/t-5.png",
      alt: "Tree House 8",
      title: "Tree House",
    },
    {
      id: 9,
      src: "/src/assets/t-1.png",
      alt: "Tree House 9",
      title: "Tree House",
    },
  ];

  return (
    <div className="accommodation-page">
      <div className="main-cont">
        <LogoBack onClick={handleBack} />
        <div className="step-text">Step 2 of 4</div>
      </div>

      <div className="main-content flex justify-between items-start">
        <div className="main-leftside">
          <h1 className="title-text">
            Unleash Your Inner <br />
            Adventurer!
          </h1>
          <p className="find-deals-text">
            We&apos;ll use your choices to find <br />
            attractions you&apos;ll love!
          </p>
          <Button onClick={handleContinue} className="continue-button ">
            Continue
          </Button>
        </div>

        <div className="right-side">
          <div className="image-gallery  grid grid-cols-3 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className={`image-item border-2 rounded-lg transition-transform duration-300 flex flex-col items-center ${
                  selectedImage === image.id
                    ? "border-purple-500 scale-105"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[140px] object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-sm text-gray-700">
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
