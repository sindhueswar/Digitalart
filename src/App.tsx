import React,{useState,useEffect,useCallback} from 'react';
import Header from './components/Header/Header';
import img1 from "./images/image1.jpeg";
import img2 from "./images/image2.jpeg";
import img3 from "./images/image3.jpeg";
import Accordion from './components/accordion/Accordion';
import Footer from './components/footer/Footer';
import './App.css';
function App() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
 const accordionData = [
  { title: "1", isOpen: false, imageSrc: img1 },
  { title: "2", isOpen: false, imageSrc: img2 },
  { title: "3", isOpen: false, imageSrc: img3 },
];

const toggleAccordion = (index: number) => {
  if (index === openAccordion) {
     setTimeout(() => {
      setOpenAccordion(null);
    }, 2000);
  } else {
    setOpenAccordion(index);
  }
};

const openNextAccordion = useCallback(
  (index: number) => {
    if (index < accordionData.length) {
      toggleAccordion(index);
      setTimeout(() => openNextAccordion(index + 1), 6000); 
      if (index === accordionData.length - 1) {
        setTimeout(() => openNextAccordion(0), 6000);
      }
    }
  },
  [accordionData]
);
useEffect(() => {
  if (openAccordion === null) {
    openNextAccordion(0);
  }
}, [openAccordion, openNextAccordion]);
  return (
    <div className="App">
      <header className="App-header" >
        <Header/>
        <div className="accordions">
        <div className="accordioncontent">
        <p className="feature">bvjscb jnj ecnm</p>
        <h2 className="featuretitle"> Dchvfjv hv jgdaoj</h2>
        <div className="featuredesc">Jkhbx Vhhbfgan deuyg jwheb nmsdzjhuwre ui8kjrstbmgnjjjew hgkrt jhmnhkygufb</div>
          {accordionData.map((data, index) => (
            <Accordion
              key={index}
              title={data.title}
              isOpen={openAccordion === index}
              onToggle={() => toggleAccordion(index)}
            >
              <p className='accrcontent'>
                Lorem ipsum dolor sit amet    .  .
               </p>
            </Accordion>
          ))}
        </div>
        <div className="image-column">
          {openAccordion !== null && (
            <div className="picture-animation">
            <img src={accordionData[openAccordion].imageSrc} alt="bidder" width={50} height={50} className="pic1" />
            {/* <div className="picdesc">
              <div className="costdesc">
                <div className="label">lorem bhj:</div>
                <div className="cost">$12njbd</div>
              </div>
              <div className="v1"></div>
              <div className="division">
                <div className="label">loremhj:</div>
                <div className="cost">@gemt</div>
              </div>
            </div> */}
          </div>
          )}
        </div>
      </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
