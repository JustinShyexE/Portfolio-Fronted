import React from "react";
import Frame from "./HomeComponents/Frame";
import AppleLaptopDiv from "./HomeComponents/AppleLaptopDiv";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2original.mp4";
import video3 from "./videos/video3.mp4";
import Slider from "./HomeComponents/Slider";
import Description from "./HomeComponents/Description";
import Introduction from "./Introduction";
import Message from "./HomeComponents/Message";
import Footer from "./HomeComponents/Footer";
import Details from "./HomeComponents/Details";
import { useState } from "react";

//import { useMediaQuery } from 'react-responsive';

function Home() {
  //const is320 = useMediaQuery({ query: `(max-width: 1000px)` });
  const [color, setColor] = useState(4);
  const [theme, setTheme] = useState({
    bck: "white",
      border: "black",
      ft: "grey",
      text: "black",
  });

  function setTheme1() {
    setColor(1);
    setTheme({
      bck: "#F9F7C9",
      border: "#AAD9BB",
      ft: "#D5F0C1",
      text: "#80BCBD",
    });
  }
  function setTheme2() {
    setColor(2);
    setTheme({
      bck: "#E8DFCA",
      border: "#4F6F52",
      ft: "#B6C7AA",
      text: "#1A4D2E",
    });
  }
  function setTheme3() {
    setColor(3);
    setTheme({
      bck: "#F3F7EC",
      border: "#006989",
      ft: "#E88D67 ",
      text: "#005C78 ",
    });
  }

  function setTheme4() {
    setColor(4);
    setTheme({
      bck: "white",
      border: "black",
      ft: "grey",
      text: "black",
    });
  }

  return (
    <div className="mainBody" style={{ backgroundColor: theme.bck }}>
      <div className="theme themeCentering">

        <div className="theme-wrap">
        <div
            className="themeSelector center"
            id={color === 4 ? "themeSelectorOn" : "themeSelectorOff"}
          >
            <div className="themeColor Theme4" onClick={setTheme4}></div>
          </div>


          <div
            className="themeSelector center"
            id={color === 1 ? "themeSelectorOn" : "themeSelectorOff"}
          >
            <div className="themeColor Theme1" onClick={setTheme1}></div>
          </div>


          <div
            className="themeSelector center"
            id={color === 3 ? "themeSelectorOn" : "themeSelectorOff"}
          >
            <div className="themeColor Theme3" onClick={setTheme3}></div>
          </div>

          <div
            className="themeSelector center"
            id={color === 2 ? "themeSelectorOn" : "themeSelectorOff"}
          >
            <div className="themeColor Theme2" onClick={setTheme2}></div>
          </div>

        </div>
      </div>

      <div className="boody">
        <Frame color={theme.border} />
        <Introduction color={theme.text} />
      </div>
      <div className="sliderDiv">
        <Slider color={theme.text} />
      </div>
      <Details color={theme.text} />
      <div className="anmBasic">
        <p className="anmProj" style={{ color: theme.text }}>
          Projects:
        </p>
      </div>

      <div className="firstDiv fadeIn">
        <div className="laptopTitlePost">
          <div>
            <a href="https://restaurant-frontend-gamma-seven.vercel.app/" className="undrln">
              <h3 className="dscTitle" style={{ color: theme.text }}>
                Restaurant Website
              </h3>
            </a>
            <AppleLaptopDiv key="1" video={video3} idd="Video3" />
          </div>
        </div>
        <Description
          color={theme.text}
          logos="restaurant"
          description="This is a Restaurant Website."
          text="This is a fully responsive website designed for restaurants to promote their food and attract more customers."
          code="https://github.com/JustinShyexE/Restaurant-Frontend"
          project="https://restaurant-frontend-gamma-seven.vercel.app/"
        />
      </div>

      <div className="firstDiv fadeIn">
        <div className="laptopTitlePost">
          <div>
            <a href="https://ashopp.onrender.com" className="undrln">
              <h3 className="dscTitle" style={{ color: theme.text }}>aShop</h3>
            </a>
            <AppleLaptopDiv key="2" video={video2} idd="Video2" />
          </div>
        </div>
        <Description
          color={theme.text}
          description="This is an eCommerce website."
          text="aShop it's an eCommerce website that can be used by any entrepreneurs to sell their products online. Users can find their desired product and buy it, after creating an account."
          logos="aShop"
          code="https://github.com/JustinShyexE/aShop-Fullstack"
          project="https://ashopp.onrender.com"
        />
      </div>

      <div className="firstDiv fadeIn">
        <div className="laptopTitlePost">
          <div>
            <a href="https://porsche-frontend.vercel.app/" className="undrln">
              <h3 className="dscTitle" style={{ color: theme.text }}>Car Shop PorscheV2</h3>
            </a>
            <AppleLaptopDiv key="3" video={video1} idd="Video1" />
          </div>
        </div>
        <Description
          color={theme.text}
          logos="carShop"
          description="This is a car shop website."
          text="This a FULLY-Responsive Website, that can be used by Porsche themselves to sell their cars. 
          It has a good presentation of the Porsche cars and an option to buy after creating a Porsche account."
          code="https://github.com/JustinShyexE/Porsche-Frontend"
          project="https://porsche-frontend.vercel.app/"
        />
      </div>

      <div className="scroll-watcher"></div>
      <div className="anmBasic ">
        <p className="anmProj me" style={{ color: theme.text }}>
          Contact me:
        </p>
      </div>
      <Message color={theme.text} border={theme.border} ft={theme.ft} />
      <Footer color={theme.text} ft={theme.ft} />
    </div>
  );
}

export default Home;
