import React, { useEffect, useState, useLayoutEffect, useContext, useMemo} from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CartCard from "../../components/UI/Card/CartCard/CartCard";
import axiosInstance from "../../axios-firebase";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Divider, Typography } from "@material-ui/core";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useSnackbar } from "notistack";
import { ButtonGroup } from "../../components/UI/Button/Button";
import AuthContext from "../../context/authContext";
import FavoritesContext from "../../context/favoriteContext";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const useStyles = makeStyles((theme) => ({
  h3: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  h5: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  NoCartMessage: {
    fontSize: "5.5rem",
    color: "#eec2f3",
    position: "absolute",
    bottom: "40%",
    left: "25%",
    letterSpacing: "5px",
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      letterSpacing: "3px",
      fontSize: "3rem",
      bottom: "45%",
    },
  },
}));

const CartPage = (props) => {
  const Styles = useStyles();

  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //Authentication Context
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const userId = authCtx.userId;

  //Favorites Context
  const favoriteCtx = useContext(FavoritesContext);

  //To display Messages using Snackbar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //To open window at top of the page
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    let queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axiosInstance.get("/Cart.json" + queryParams).then((response) => {
      let fetchProductData = [];
      for (let key in response.data) {
        fetchProductData.push({
          ...response.data[key],
          productId: key,
        });
      }
      setCartProducts(fetchProductData);
      setLoading(false);
    });
  }, [token, userId]);

  //To calculate Total Quantity and Total Price
  const { totalQuantity, totalPrice } = useMemo(() => {
    return cartProducts.reduce(
      ({ totalQuantity, totalPrice }, { price, quantity }) => ({
        totalQuantity: totalQuantity + quantity,
        totalPrice: totalPrice + quantity * price,
      }),
      {
        totalQuantity: 0,
        totalPrice: 0,
      }
    );
  }, [cartProducts]);

  //Move Product To Favorites
  const moveToFavoritesHandler = (event, product) => {
    let ButtonTarget = event.currentTarget.value;

    //Add Favorites to firebase by using Context
    favoriteCtx.addToFavorites(product);

    //To Display ADDED TO FAVORITES Message using useSnackbar()
    enqueueSnackbar("ADDED TO FAVORITES", { variant: "success" });

    //To Remove the product from Favorites once added To Cart
    removeFromCartHandler(ButtonTarget, product.productId);
  };

  //To remove Product from Cart
  const removeFromCartHandler = (event, productId) => {
    //To delete product from Firebase
    setLoading(true);
    axiosInstance
      .delete(`/Cart/${productId}.json?auth=` + token)
      .then((response) => {
        //console.log(response)
        if (event !== "MOVETOFAVORITES") {
          enqueueSnackbar("REMOVED FROM CART", { variant: "error" });
        }
        const removeProduct = cartProducts.filter(
          (product) => product.productId !== productId
        );
        setCartProducts(removeProduct);
        setLoading(false);
      });
  };

  //To increase the product quantity
  const incrementCounterHandler = (index, value) => {
    setCartProducts((cart) =>
      cart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + value } : item
      )
    );
  };

  //To decrease the product quantity
  const decrementCounterHandler = (index, value) => {
    setCartProducts((cart) =>
      cart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity - value } : item
      )
    );
  };

  //To provide/Choose Size of the Products
  const sizeChangeHandler = (value, index) => {
    const updatedCart = [...cartProducts];
    updatedCart[index].size = value;
    //setCartProducts(updatedCart)
  };

  //Exit from CartPage
  const cartPageCancelledHandler = () => {
    props.history.push("/");
  };
  
  //Continue to OrderSummaryPage
  const cartPageContinuedHandler = () => {
    const updatedCart = [...cartProducts];
    let selectedSize = updatedCart.some(
      (vendor) => vendor["size"] === undefined
    );
    //console.log(selectedSize)
    if (selectedSize === true) {
      enqueueSnackbar("PLEASE SELECT SIZE!", {
        variant: "error",
        persist: true,
      });
      return;
    } else {
      closeSnackbar();
      props.history.push({
        pathname: "/Cart/OrderSummary",
        state: {
          order: cartProducts,
          price: totalPrice,
        },
      });
    }
  };

  let CartProducts = (
    <React.Fragment>
      {cartProducts.map((product, index) => {
        //console.log(product)
        return (
          <CartCard
            key={product.id}
            Image={product.productImage}
            Title={product.productName}
            Price={product.price}
            Details={product.productDetails}
            removeFromCart={() =>
              removeFromCartHandler("REMOVE", product.productId)
            }
            moveToFavorites={(event) => moveToFavoritesHandler(event, product)}
            Quantity={product.quantity}
            incrementCounter={() => incrementCounterHandler(index, 1)}
            decrementCounter={() => decrementCounterHandler(index, 1)}
            onHandleCallBack={(value) => sizeChangeHandler(value, index)}
          />
        );
      })}
      <Divider style={{ height: "2px", backgroundColor: "#000" }} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        padding="10px"
        margin="20px"
        marginBottom="0px"
      >
        <Typography variant="h6">
          SubTotal({totalQuantity} Items): Rs.{totalPrice}
        </Typography>
      </Box>
      <ButtonGroup
        cancelled={() => cartPageCancelledHandler()}
        continued={() => cartPageContinuedHandler()}
      />
    </React.Fragment>
  );

  //Check If there are No Favorite Products
  if (cartProducts.length === 0) {
    CartProducts = (
      <Typography className={Styles.NoCartMessage}>CART IS EMPTY!!</Typography>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingTop="20px"
          paddingBottom="10px"
        >
          <Typography variant="h3" className={Styles.h3}>
            Shopping Cart
          </Typography>
          <Typography variant="h5" className={Styles.h5}>
            Price
          </Typography>
        </Box>
        <Divider style={{ height: "2px", backgroundColor: "#000" }} />
        <Box minHeight="90vh">{loading ? <Spinner /> : CartProducts}</Box>
      </Container>
    </React.Fragment>
  );
};

export default withErrorHandler(withRouter(CartPage), axiosInstance);
