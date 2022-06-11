import Navbar from "../Navbar";
import React from "react";
import MyFooter from "../MyFooter";
import Khalti from "./CHeckout/Khalti"
import ItemImage from "../../../src/assets/images/nati-melnychuk-51sGDpm5S78-unsplash.jpg";
import ItemImage2 from "../../../src/assets/images/lina-verovaya-F39Yk-FM_fg-unsplash.jpg";
import ItemImage3 from "../../../src/assets/images/pmv-chamara-MEsWk-dZzlI-unsplash.jpg";
import { CartContext } from "../Context/CardContext";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const CartView = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart] = React.useContext(CartContext)
  const [CartItems, setCartItems] = useState([
    {
      id: 1,
      image: ItemImage,
      name: "Face Wash",
      price: "Rs. 2000",
      quantity: 1,
    },
    {
      id: 2,
      image: ItemImage2,
      name: "BB Cream",
      price: "Rs. 1000",
      quantity: 1,
    },
    {
      id: 3,
      image: ItemImage3,
      name: "Lip-stick",
      price: "Rs. 800",
      quantity: 1,
    },
  ]);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubstract = () => {
    setQuantity(quantity - 1);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="w-full h-screen p-10">
      <Navbar />
      <div className="my-5 bg-white rounded-3xl shadow-sm p-10 h-auto">
        {/* top headers */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold">My Cart</h2>

          {/* Clear Cart */}
          <button
            className="px-3 rounded-xl shadow-sm py-2 bg-red-600 text-white"
            onClick={() => clearCart()}
          >
            Empty Cart
          </button>
        </div>

        {/* Cart Items Loop Data */}
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 bg-gray-100 shadow-sm rounded-xl p-3"
            >
              {/* Item Image and Name */}
              <div className="col-span-5 h-auto flex items-center gap-3">
                {/* Image of Product */}
                <img
                  src={`http://localhost:1026/${item.productId.image}`}
                  className="rounded shadow-md w-16 h-16 object-cover"
                  alt="itemImage"
                />

                {/* Name of Product */}
                <p className="text-gray-700 font-semibold">{item.productId.name}</p>
              </div>

              {/* Quantity */}
              <div className="col-span-3 flex justify-center items-center gap-3">
                <button onClick={() => handleAdd(item.quantity)}>
                  <FiPlus />
                </button>

                <div className="flex justify-center items-center w-9 h-9 border-2 border-gray-400 shadow-sm rounded-xl">
                  <p className="text-sm">{quantity}</p>
                </div>

                <button onClick={() => handleSubstract(quantity)}>
                  <FiMinus />
                </button>
              </div>

              {/* Price */}
              <div className="col-span-3 flex justify-center items-center">
                <p className="font-semibold ">{item.price}</p>
              </div>

              {/* Delete */}
              <div className="col-span-1 flex justify-center items-center">
                <button className="bg-red-600 w-10 h-10 rounded-xl flex justify-center items-center">
                  <MdDelete className="text-white" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-4 border-t-2 border-dotted w-full h-auto pt-3 flex flex-row-reverse">
          <h3 className="font-semibold">Total: Rs. 2000</h3>
        </div>
        <button
            className="px-3 rounded-xl shadow-sm py-2 bg-red-600 text-white"
            
          >
            <Khalti/>
          </button>
      </div>
      <MyFooter />
    </div>
  );
};
export default CartView
