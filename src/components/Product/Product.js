import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductCartButton from "./ProductCartButton";
import { ProductDetailButton } from "../Button/Button";
import "./Product.css";

const Product = (product) => {
  //console.log('dress: ', this.state.dress);
  const { id, img, name, description, price } = product;

  return (
    <div className="card h-100 product ">
      <Link to={`/dress/${id}`} className="product__link">
        <img className="card-img-top product__img" src={img} />
      </Link>

      <div className="card-body product__text">
        {/* card-body oluşturuldu */}
        <div class="card-body">
          <div class="card-title">
            <h4 className="card-title product__title">
              <Link to={`/dress/${id}`}>{name} </Link>
            </h4>
          </div>

          <h5 className="product__price">{price} €</h5>
          <div class="card-text">
            <p className="card-text product__description">{description}</p>
          </div>
        </div>

        {/* card footer oluşturuldu */}
        <div class="card-footer text-center">
          <ProductCartButton product={product} />
          <Link to={`/dress/${id}`} className="product__link">
            <ProductDetailButton id={id}>Detay</ProductDetailButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect()(Product);
