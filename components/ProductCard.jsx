import React from "react";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, currency } = useAppContext();

  const handleAddToCart = () => {
    addToCart(product._id);
  };

  const handleIncrease = () => {
    addToCart(product._id);
  };

  const handleDecrease = () => {
    removeFromCart(product._id);
  };

  const quantity = cartItems[product._id] || 0;

  return (
    <div className="border p-4 rounded-lg flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-40 h-40 object-cover" />
      <p className="mt-2 text-lg font-medium">{product.name}</p>
      <p className="text-gray-600">{currency} {product.price}</p>

      <div className="flex items-center mt-2 gap-2">
        {quantity > 0 ? (
          <>
            <button
              onClick={handleDecrease}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </>
        ) : (
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
