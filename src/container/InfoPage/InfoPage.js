import React, { useLayoutEffect, useState, useEffect,useContext, useCallback} from "react";
import { useParams, withRouter } from "react-router";
import InfoCard from "../../components/UI/Card/InfoCard/InfoCard";
import ProductData from "../../data/ProductData";
import axiosInstance from "../../axios-firebase";
import {useSnackbar} from 'notistack';
import Spinner from '../../components/UI/Spinner/Spinner';
import AuthContext from '../../context/authContext';
import FavoritesContext from "../../context/favoriteContext";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const InfoPage = (props) => {

  const [productInfo, setProductinfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorite,setFavorite] = useState(true);

  //Authentication Context
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;

  //Favorites Context
  const favoriteCtx = useContext(FavoritesContext);

  //To display Messages using Snackbar
  const { enqueueSnackbar } = useSnackbar();

  let { productId } = useParams();

  //To open window at top of the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Retrive stored Favorite products
  const retriveStoredFavorites = useCallback((id) => {
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
        //To find if the product is present in the Fetched Favorite products List
        let favoriteProduct = !!fetchProductData.find(
          (product) => product.id === Number(id)
        );
        if (favoriteProduct) {
          setFavorite(true)
        } else {
          setFavorite(false);
        }
      });
  },[token,userId])

  //To find and Display the product
  useEffect(() => {
    setLoading(true);
    setFavorite(false);
    const product = ProductData.find((product) => product.id === Number(productId));
    retriveStoredFavorites(productId);
    setProductinfo(product);
    setLoading(false);
  }, [productId,retriveStoredFavorites]);

  //Add to Favorites Handler
  const addTofavoritesHandler = (likedProduct) => {
    setLoading(true);
    let updatedLikedProduct = {
      ...likedProduct,
      userId: userId,
    };
    //Add Favorites to firebase by using Context
    favoriteCtx.addToFavorites(updatedLikedProduct);
    //To Display ADDED TO FAVORITES Message using useSnackbar()
    enqueueSnackbar("ADDED TO FAVORITES", { variant: "success" });
    setFavorite(true)
    setLoading(false);
  };

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

  let Info = (
    <InfoCard
      productImage={productInfo.productImage}
      productName={productInfo.productName}
      price={productInfo.price}
      productDetails={productInfo.productDetails}
      fit={productInfo.Fit}
      material={productInfo.material}
      addToFavorites={() => addTofavoritesHandler(productInfo)}
      addToCart={() => addToCartHandler(productInfo)}
      disableFavoriteButton={favorite}
    />
  );

  return <React.Fragment>{loading ? <Spinner /> : Info}</React.Fragment>;
};
export default withErrorHandler(withRouter(InfoPage),axiosInstance);