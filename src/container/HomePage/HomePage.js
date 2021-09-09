import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../../components/UI/Carousel/Carousel";
import ProductCard from "../../components/UI/Card/ProductCard/ProductCard";
import ProductData from "../../data/ProductData";
import axiosInstance from "../../axios-firebase";
import { useSnackbar } from "notistack";
import Spinner from "../../components/UI/Spinner/Spinner";
import AuthContext from "../../context/authContext";
import FavoritesContext from "../../context/favoriteContext";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    width:'100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "60px auto",
    padding: "10px auto",
  },
  Products: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    margin: "15px",
    padding: "20px",
    minHeight: "120vh",
    [theme.breakpoints.down("sm")]:{
      gridTemplateColumns: "auto auto ",
      padding:'10px'
    },
    [theme.breakpoints.down("xs")]:{
      gridTemplateColumns: "auto auto ",
      padding:'10px'
    },
  },
  h3: {
    fontSize: "30px",
    fontWeight: "600",
    position: "relative",
    display: "inline-block",
    margin: 0,
    "&::before": {
      position: "absolute",
      top: "17px",
      left: "-100px",
      width: "80px",
      height: "2px",
      content: '""',
      backgroundColor: "#000",
      [theme.breakpoints.down("sm")]:{
        width:'50px',
        left:'-70px'
      },
    },
    "&::after": {
      position: "absolute",
      top: "17px",
      right: "-100px",
      width: "80px",
      height: "2px",
      content: '""',
      backgroundColor: "#000",
      [theme.breakpoints.down("sm")]:{
        width:'50px',
        right:'-70px'
      },
    },
  },
}));

const HomePage = (props) => {
  const Styles = useStyles();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //Authentication Context
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;

  //Favorites Context
  const favoriteCtx = useContext(FavoritesContext);
  const favorites = favoriteCtx.favorites

  //To display Messages using Snackbar
  const { enqueueSnackbar } = useSnackbar();

  // To open window at top of the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  //To display the products in container
  useEffect(() => {
    setLoading(true);
    const productData = ProductData.slice(0, 8);
    //Retrive Favorites Products Information
    favoriteCtx.storedFavorites(productData)
    setProducts(productData);
    setLoading(false);
     // eslint-disable-next-line
  },[]);

  //Add the Product to Cart
  const addToCartHandler = (product) => {
    setLoading(true);
    let updatedProduct = {
      ...product,
      userId: userId,
    };
    //Send the product data to firebase and display success message
    axiosInstance
      .post("Cart.json?auth=" + token, updatedProduct)
      .then((response) => {
        //console.log(response)
        enqueueSnackbar("ADDED TO CART - CHECK IT OUT!", {
          variant: "success",
        });
      })
      .catch((error) => console.log(error));
    setLoading(false);
  };

  //Add to Favorites
  const addTofavoritesHandler = (likedProduct, index) => {
    setLoading(true);
    let updatedLikedProduct = {
      ...likedProduct,
      userId: userId,
    };
    //Add Favorites to firebase by using Context
    favoriteCtx.addToFavorites(updatedLikedProduct,index)
    //To Display ADDED TO FAVORITES Message using useSnackbar()
    enqueueSnackbar("ADDED TO FAVORITES", { variant: "success" });
    setLoading(false);
  };

  let productContainer = (
    <React.Fragment>
      {products.map((product, index) => {
        return (
          <ProductCard
            Link={`/Info/${product.id}`}
            key={product.id}
            Title={product.productName}
            Image={product.productImage}
            Value={product.price}
            addToCart={() => addToCartHandler(product)}
            addToFavorites={() => addTofavoritesHandler(product, index)}
            disableFavoriteButton={favorites[index]}
          />
        );
      })}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Carousel link="Container" />
      <div className={Styles.Container} id="Container">
        <Typography component="h3" className={Styles.h3}>
          "DAILY DEALS!"
        </Typography>
        <div className={Styles.Products}>
          {loading ? <Spinner /> : productContainer}
        </div>
      </div>
    </React.Fragment>
  );
};

export default withErrorHandler(HomePage,axiosInstance)