import React, { useState, useEffect, useContext,useCallback} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "../../components/UI/Card/ProductCard/ProductCard";
import ProductData from "../../data/ProductData";
import SideBar from "../../components/SideBar/SideBar";
import Pagination from "@material-ui/lab/Pagination";
import Spinner from "../../components/UI/Spinner/Spinner";
import axiosInstance from "../../axios-firebase";
import { useSnackbar } from "notistack";
import Box from "@material-ui/core/Box";
import AuthContext from "../../context/authContext";
import FavoritesContext from "../../context/favoriteContext";
import withErrorHandler  from "../../hoc/WithErrorHandler/WithErrorHandler";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column'
    }
  },
  box: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: theme.spacing(4),
    minHeight: "90vh",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto auto",
    }
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pagination: {
    padding: "15px",
    "& .MuiPaginationItem-root": {
      "&:hover": {
        backgroundColor: "#000000",
        color: "white",
      },
    },
    "& .Mui-selected": {
      color: "white",
      backgroundColor: "#000000",
    },
  },
}));

const CollectionPage = () => {
  const Styles = useStyles();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([
    {
      id: 1,
      label: "Rs.1599 - Rs.1899",
      value: "1599-1899",
      checked: false,
    },
    {
      id: 2,
      label: "Rs.1999 - Rs.2299",
      value: "1999-2299",
      checked: false,
    },
    {
      id: 3,
      label: "Rs.2399 - Rs.2599",
      value: "2399-2599",
      checked: false,
    },
  ]);
  const [fit, setFit] = useState([
    {
      id: 1,
      label: "Medium Fit",
      checked: false,
    },
    {
      id: 2,
      label: "Regular Fit",
      checked: false,
    },
    {
      id: 3,
      label: "Relaxed Fit",
      checked: false,
    },
    {
      id: 4,
      label: "Large Fit",
      checked: false,
    },
  ]);

  //Authentication Context
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;

  //Favorites Context
  const favoriteCtx = useContext(FavoritesContext)
  const favorites = favoriteCtx.favorites
  
  //To display Messages using Snackbar
  const { enqueueSnackbar } = useSnackbar();

  //To Display the Products in Main Content
  const DisplayProductsHandler = useCallback((Data) => {
    //Get value of FirstPageNumber and LastPageNumber
    const indexOfLastPage = currentPage * productsPerPage;
    const indexOfFirstPage = indexOfLastPage - productsPerPage;
    const productData = Data.slice(indexOfFirstPage, indexOfLastPage);
    favoriteCtx.storedFavorites(productData)
    setProducts(productData);
     // eslint-disable-next-line
  },[currentPage,productsPerPage]);

  //Display the Products from DisplayProductHandler
  useEffect(() => {
    setLoading(true);
    //Scroll To Top When Reloaded
    window.scrollTo(0, 0);
    //To Display the Products
    if (filteredProducts.length === 0) {
      DisplayProductsHandler(ProductData);
    } else {
      DisplayProductsHandler(filteredProducts);
    }
    setLoading(false);
  }, [currentPage, filteredProducts,DisplayProductsHandler]);

  //Add to Favorites Handler
  const addTofavoritesHandler =(likedProduct,index) => {
    setLoading(true);
    let updatedLikedProduct = {
      ...likedProduct,
      userId: userId,
    };
    //Add Favorites to firebase by using Context
    favoriteCtx.addToFavorites(updatedLikedProduct,index)
    //To Display ADDED TO FAVORITES Message using useSnackbar()
    enqueueSnackbar("ADDED TO FAVORITES", { variant: "success" })
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
        enqueueSnackbar("ADDED TO CART - CHECK IT OUT!", {
          variant: "success",
        });
      });
    setLoading(false);
  };

  //To Change between the Pages using Pagination
  const pageChangeHandler = (event, value) => {
    setCurrentPage(value);
  };

  //To reset the Page On Filtering Products
  const resetPaginationHandler = () => {
    setCurrentPage(1);
  };

  //To display Products based on Price Filter
  const priceChangeHandler = (event, item) => {
    // To Disable Fit choices when Price is clicked
    setFit(
      fit.map((obj) =>
        obj.checked === true
          ? { ...obj, checked: !obj.checked }
          : { ...obj, checked: false }
      )
    );

    //Display filtered Products based on Price
    const priceType = item.value.split("-");
    const lowPrice = priceType[0];
    const highPrice = priceType[1];
    const priceFilterProducts = ProductData.filter(
      (product) => product.price >= lowPrice && product.price <= highPrice
    );

    if (item.checked === false) {
      setFilteredProducts(priceFilterProducts);
    } else {
      setFilteredProducts([]);
    }

    setPrice(
      price.map((obj) =>
        obj.id === item.id
          ? { ...obj, checked: !item.checked }
          : { ...obj, checked: false }
      )
    );
    resetPaginationHandler();
  };

  //To display Products based on Fit Filter
  const fitChangeHandler = (event, item) => {
    // To Disable Price choices when Fit is clicked
    setPrice(
      price.map((obj) =>
        obj.checked === true
          ? { ...obj, checked: !obj.checked }
          : { ...obj, checked: false }
      )
    );

    //Display filtered Products based on Fit
    const productFit = item.label;
    const fitFilteredProducts = ProductData.filter(
      (product) => product.Fit === productFit
    );
    if (item.checked === false) {
      setFilteredProducts(fitFilteredProducts);
    } else {
      setFilteredProducts([]);
    }
    setFit(
      fit.map((obj) =>
        obj.id === item.id
          ? { ...obj, checked: !item.checked }
          : { ...obj, checked: false }
      )
    );
    resetPaginationHandler();
  };



  const Collection = (
    <div className={Styles.content}>
      <main className={Styles.box}>
        {products.map((product, index) => {
          return (
            <ProductCard
              Link={`/Info/${product.id}`}
              key={product.id}
              Title={product.productName}
              Image={product.productImage}
              Value={product.price}
              addToFavorites={() => addTofavoritesHandler(product, index)}
              addToCart={() => addToCartHandler(product)}
              disableFavoriteButton={favorites[index]}
            />
          );
        })}
      </main>
      <Pagination
        className={Styles.pagination}
        count={
          filteredProducts.length === 0
            ? Math.ceil(ProductData.length / productsPerPage)
            : Math.ceil(filteredProducts.length / productsPerPage)
        }
        size="large"
        page={currentPage}
        onChange={pageChangeHandler}
      />
    </div>
  );

  return (
    <React.Fragment>
      <div className={Styles.root}>
        <SideBar
          priceBox={price}
          onPriceChange={(event, item) => priceChangeHandler(event, item)}
          fitBox={fit}
          onFitChange={(event, item) => fitChangeHandler(event, item)}
        />
        <Box minHeight="90vh">{loading ? <Spinner /> : Collection}</Box>
      </div>
    </React.Fragment>
  );
};

export default withErrorHandler(CollectionPage,axiosInstance);
