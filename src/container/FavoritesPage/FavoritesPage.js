import React, { useEffect, useState,useContext,useLayoutEffect} from "react";
import { Box, Typography } from "@material-ui/core";
import {makeStyles} from  '@material-ui/core/styles';
import axiosInstance from "../../axios-firebase";
import FavoriteProductCard from "../../components/UI/Card/FavoriteCard/FavoriteCard";
import {useSnackbar,}  from 'notistack';
import Spinner from '../../components/UI/Spinner/Spinner';
import AuthContext from '../../context/authContext';
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";


const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px auto",
    padding: "10px auto",
  },
  h2: {
    fontSize: "50px",
    fontWeight: "500",
    position: "relative",
    display: "inline-block",
    margin: '20px auto 30px auto',
    [theme.breakpoints.down("sm")]:{
      fontSize: "40px",
    },
    "&::before": {
      position: "absolute",
      top: "35px",
      left: "-100px",
      width: "80px",
      height: "4px",
      content: '""',
      backgroundColor: "#000",
      [theme.breakpoints.down("sm")]:{
        top: "30px",
        width: "70px",
      },
    },
    "&::after": {
      position: "absolute",
      top: "35px",
      right: "-100px",
      width: "80px",
      height: "4px",
      content: '""',
      backgroundColor: "#000",
      [theme.breakpoints.down("sm")]:{
        top: "30px",
        width: "70px",
      },
    },
  },
  Box:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    minHeight:"120vh"
  },
  NoFavMessage:{
    fontSize: "5.5rem", 
    color: "#eec2f3", 
    position: "absolute", 
    bottom: "40%", 
    letterSpacing: "5px",
    [theme.breakpoints.down("md")]:{
      fontSize: "5rem",
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "4.5rem",
    },
    [theme.breakpoints.down("xs")]:{
      letterSpacing: "3px",
      fontSize: "3rem",
      bottom:'45%'
    },
  }
}));

const FavoritesPage = () => {
  const Styles = useStyles();

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading,setLoading] = useState(false);

  //Authentication Context
  const authCtx = useContext(AuthContext)
  const token = authCtx.token;
  const userId = authCtx.userId;

  //To display Messages using Snackbar
  const { enqueueSnackbar } = useSnackbar();

  // To open window at top of the page
  useLayoutEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  //To display the products in favorites container
  useEffect(() => {
    setLoading(true)
    let queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axiosInstance.get('/Favorites.json' + queryParams)
    .then((response) => {
      let fetchProductData = [];
      for (let key in response.data) {
        fetchProductData.push({
          ...response.data[key],
          productId: key,
        });
      }
      setFavoriteProducts(fetchProductData);
      setLoading(false)
    })
  }, [token,userId]);

  //To Add product to Cart Handler
  const addToCartHandler = (event,product) => {
    let ButtonTarget = event.currentTarget.value;
    let updatedProduct = {
      ...product,
      userId:userId
    }
    axiosInstance
      .post("Cart.json?auth="+token, updatedProduct)
      .then((response) => {
        //To Display ADDED TO CART Message using useSnackbar()
        enqueueSnackbar('ADDED TO CART - CHECK IT OUT!',{variant:'success'})
      })
    //To Remove the product from Favorites once added To Cart
    removeFromFavoritesHandler(ButtonTarget,product.productId);
  };

  //To Remove from Favorite Handler
  const removeFromFavoritesHandler = (event, productId) => {
    //To delete product from Firebase
    setLoading(true);
    axiosInstance
      .delete(`/Favorites/${productId}.json?auth=` + token)
      .then((response) => {
        if (event !== "ADDTOCART") {
          enqueueSnackbar("REMOVED FROM FAVORITES", { variant: "error" });
        }
        const removeProduct = favoriteProducts.filter(
          (product) => product.productId !== productId
        );
        setFavoriteProducts(removeProduct);
        setLoading(false);
      });
  };

  //Displaying Favorite Products
  let FavoriteProducts = favoriteProducts.map((product) => {
    return (
      <FavoriteProductCard
        Link={`/Info/${product.id}`}
        key={product.id}
        Title={product.productName}
        Image={product.productImage}
        Value={product.price}
        removeFromFavorites={() =>removeFromFavoritesHandler("REMOVE",product.productId)}
        addToCart={(event) => addToCartHandler(event,product)}
      />
    );
  });

  //Check If there are No Favorite Products 
  if(FavoriteProducts.length===0){
    FavoriteProducts = 
      <Typography className={Styles.NoFavMessage}>
      NO FAVORITES YET!!
    </Typography>
    
  }

  return (
    <React.Fragment>
      <div className={Styles.Container}>
        <Typography component="h2" className={Styles.h2}>Favorite Products</Typography>
        <Box className={Styles.Box}>
          { loading ? <Spinner/> : FavoriteProducts}
        </Box>
      </div>
    </React.Fragment>
  );
};
export default withErrorHandler(FavoritesPage,axiosInstance);
