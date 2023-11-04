import React, { useState, useEffect, useRef } from "react";
import "./footer.css";
import img1 from "./../../images/image1.jpeg";
import img2 from "./../../images/image2.jpeg";
import img3 from "./../../images/image3.jpeg";
import img4 from "./../../images/image1(1).jpeg";
import img5 from "./../../images/greenbg.jpg";

const Footer = () => {
  const cardData = [
    { title: "Card 1", image: img1 },
    { title: "Card 2", image: img2 },
    { title: "Card 3", image: img3 },
    { title: "Card 4", image: img4 },
    { title: "Card 5", image: img5 },
    { title: "Card 6", image: img1 },
    { title: "Card 7", image: img2 },
    { title: "Card 8", image: img3 },
    { title: "Card 9", image: img4 },
    { title: "Card 10", image: img5 },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentCardIndex + 1) % cardData.length;
      setCurrentCardIndex(nextIndex);

      if (cardRef.current) {
        cardRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }, 300000000);

    return () => {
      clearInterval(interval);
    };
  }, [currentCardIndex, cardData.length]);
  const handlePreviousClick = () => {
    const previousIndex = currentCardIndex - 1;
    setCurrentCardIndex(previousIndex);
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleNextClick = () => {
    const nextIndex = currentCardIndex + 1;
    setCurrentCardIndex(nextIndex);
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  const handleCardClick = (index: number) => {
    setCurrentCardIndex(index);
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <>
      <div className="footer">
        <div className="card-wrapper">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={index === currentCardIndex ? cardRef : null}
              className={`card ${
                index === currentCardIndex ? "current" : "hidden"
              }`}
              onClick={() => handleCardClick(index)} // Add click handler
            >
              <div className="bidder1">
                <img
                  src={card.image}
                  alt="bidder"
                  width={50}
                  height={50}
                  className="pic2"
                />
                <div className="picdesc1">
                  <div className="costdesc">
                    <div className="label">lorem bhj:</div>
                    <div className="cost">$12njbd</div>
                  </div>
                  <div className="v1"></div>
                  <div className="division">
                    <div className="label">loremhj:</div>
                    <div className="cost">@gemt</div>
                  </div>
                </div>
                <button
                  className={`btn3 ${
                    index === currentCardIndex ? "currentbtn" : "hidden"
                  }`}
                >
                  Stwgfzg km
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="btn4" onClick={handlePreviousClick}>
        &laquo;
      </button>
      <button className="btn4" onClick={handleNextClick}>
        &raquo;
      </button>
    </>
  );
};

export default Footer;
