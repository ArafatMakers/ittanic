import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProducts } from "../../contexts/CrudContextProvider";
const ProductDetails = () => {
  const { details } = useCart();
  const { id } = useParams();
  //   console.log(id);
  const { getProductDetails, productDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      <div id="product-details">
        <div className="left">
          <img
            className="product-details-image"
            src={productDetails.picture}
            alt=""
          />
        </div>

        <div className="right">
          <h4>{productDetails.name}</h4>
          <br />
          <p>{productDetails.description}.</p>
          <br />
          <h2>€{productDetails.price}</h2>
          <button
            onClick={() => addProductToCart(productDetails)}
            className="cart-button"
          >
            ADD TO CART
          </button>

          <div className="wine-details">
            <div className="wine-details-left">
              <div className="wine-details-left-left">
                <ul>
                  <li>Year:</li>
                  <li>Genre</li>
                  <li>Country:</li>
                  <li>Region:</li>
                </ul>
              </div>

              <div className="wine-details-left-right">
                <ul>
                  <li>2020</li>
                  <li>Shooter</li>
                  <li>USA</li>
                  <li>Korsika</li>
                </ul>
              </div>
            </div>

            <div className="wine-details-right">
              <div className="wine-details-left-left">
                <ul>
                  <li>Online:</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>Puple:</li>
                </ul>
              </div>
              <div className="wine-details-left-right">
                <ul>
                  <li>Yes</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>750</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomendations">
        <div>
          <h4>BEST WITH</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium modi repudiandae vero odio pariatur expedita, et eum
            harum quam!
          </p>
        </div>

        <div>
          <h4>HOW TO KEEP</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            iusto recusandae necessitatibus obcaecati id inventore enim minus
            commodi quisquam, ducimus, expedita officiis at maxime porro.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
