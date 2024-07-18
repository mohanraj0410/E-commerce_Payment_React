import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import useStyles from "./Styles";
import { Container, Typography, Button, Grid } from "@mui/material";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const renderEmptyCart = () => {
    return (
      <Typography style={{ textAlign: "center" }} variant="subtitle1">
        You have no items in your shopping cart,
        <Link className={classes.link} to="/">
          start adding some
        </Link>
        !
      </Typography>
    );
  };


  // if (cart.total_items === 0) return "Loading...";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items?.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart?.subtotal?.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
            style={{ marginRight: "10px" }}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.total_items === 0 ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
