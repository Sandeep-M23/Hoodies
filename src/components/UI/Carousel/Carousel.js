import React, { useContext } from "react";
import Slider from "react-animated-slider";
import { withRouter } from "react-router-dom";
import "./styles.css";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import authContext from "../../../context/authContext";


const useStyles = makeStyles((theme) => ({
  Button: {
    color: "inherit",
    fontSize: "1.7rem",
    margin: "5px auto",
    borderColor: "#fff",
    "&:hover": {
      backgroundColor: "#A21CAF",
      color: "#000",
      border: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
}));

const Carousel = (props) => {
  const Styles = useStyles();
  let content = [
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/3aaf0f72-0cf4-40ef-a36c-c81e3186c3281565956541245-Campus-Sutra-Men-Sweatshirts-2091565956539708-1.jpg",
      heading: "Exclusive Hoodies",
      description: "Sign Up and Explore Now",
      buttonLabel: "SIGNUP",
    },
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1395989/2017/8/24/11503578130066-Kook-N-Keech-Men-Black-Printed-Hooded-Sweatshirt-1081503578130040-1.jpg",
      heading: "Fashion Trends",
      description: "Enjoy the Daily deals!!",
      buttonLabel: "CHECK NOW!",
    },
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381431/2019/8/16/56334df9-19ae-427d-a503-e0034d4f75fd1565956527010-Campus-Sutra-Men-Sweatshirts-9541565956525908-1.jpg",
      heading: "HOODIES & SWEATSHIRTS",
      description: "Brand New Winter Collection",
      buttonLabel: "BUY NOW",
    },
  ];

  //Authentication Context
  const authCtx = useContext(authContext);
  const isLoggedIn = authCtx.isLoggedIn;

  //Carousel Button Functionality
  const onClickHandler = (index) => {
    if(isLoggedIn){
      if(index===0){
       const anchor = document.querySelector(`#${props.link}`);
       anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }else if(index === 1){
        props.history.push("/Collections");
      }else if(index===2){
        props.history.push("/Favorites");
      }
    }
    else{
      if(index===0){
        props.history.push("/Login");
      }else if(index===1){
        const anchor = document.querySelector(`#${props.link}`);
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }else if(index===2){
        props.history.push("/Collections");
      }
    }
  };

  if (isLoggedIn) {
    content = [
      {
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1395989/2017/8/24/11503578130066-Kook-N-Keech-Men-Black-Printed-Hooded-Sweatshirt-1081503578130040-1.jpg",
        heading: "FASHION TRENDS",
        description: "Enjoy the Daily deals!!",
        buttonLabel: "CHECK NOW!",
      },
      {
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381431/2019/8/16/56334df9-19ae-427d-a503-e0034d4f75fd1565956527010-Campus-Sutra-Men-Sweatshirts-9541565956525908-1.jpg",
        heading: "HOODIES & SWEATSHIRTS",
        description: "Brand New Winter Collection",
        buttonLabel: "BUY NOW",
      },
      {
        image:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/9/9/37502927-1c77-4a78-87ce-110ced5cefe91568034368915-1.jpg",
        heading: "YOUR FAVORITES",
        description: "Your Favorites Collection",
        buttonLabel: "CHECK IT OUT!",
      },
    ];
  }

  return (
    <React.Fragment>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat `,
              backgroundSize: "50% ",
              width: "100%",
            }}
          >
            <div className="inner">
              <h3>{item.heading}</h3>
              <h1>{item.description}</h1>
              <Button
                variant="outlined"
                className={Styles.Button}
                onClick={() => onClickHandler(index)}
              >
                {item.buttonLabel}
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default withRouter(Carousel);
