import React from "react";
import ProductItems from "./ProductItems/ProductItems";
import useStyles from "./Styles";
import { Grid } from "@mui/material";

const Products = ({ product, onAddToCart }) => {
  const classes = useStyles();

  if (!product.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {product.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductItems product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
