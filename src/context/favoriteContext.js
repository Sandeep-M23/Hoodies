import React, { useState,useContext} from "react";
import AuthContext from './authContext.js';
import axiosInstance from '../axios-firebase';

const FavoritesContext = React.createContext({
  addToFavorites: (id,index) => {},
  favorites:[],
  storedFavorites:(data) => {}
});


export const FavoritesContextProvider = (props) => {

  const [favorites,setFavorites] = useState([]);

  //Authentication Context
  const authCtx = useContext(AuthContext)
  const token = authCtx.token;
  const userId = authCtx.userId;

  //To retirve Stored Favorites from FireBase
  const retriveStoredFavorites = (data) => {
    let fav = new Array(data.length).fill(false);
    setFavorites(fav);

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
        let favoriteList = [];
        //To find if the product is present in the Fetched Favorite products List
        for(let i=0;i<data.length;i++){
          let ids = data[i].id
          let favoriteProducts = !!fetchProductData.find((product)=>product.id===Number(ids))
          favoriteList.push(favoriteProducts)
        }
        setFavorites(favoriteList)
      });
  }

  //Add to Favorites
  const addTofavoritesHandler = (Product,index) => {
    axiosInstance
    .post('Favorites.json?auth='+token,Product)
    .then((response) => {
      //console.log("SUCCESS")
    })
    .catch((error) => console.log(error));
    let favoriteOnes = [...favorites];
    favoriteOnes[index] = true;
    setFavorites(favoriteOnes);
  };

  //Context value
  const contextValue = {
      addToFavorites:addTofavoritesHandler,
      favorites:favorites,
      storedFavorites:retriveStoredFavorites
  };

  return (
      <FavoritesContext.Provider value={contextValue}>
        {props.children}
      </FavoritesContext.Provider>
  );
};

export default FavoritesContext;