"use client";
import { useCart } from "CartContext";

export default function CartPage() {
  const { cartItems, getTotalCartPrice, removeFromCart, updateQuantity } = useCart();
  const totalPrice = getTotalCartPrice();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  let discountPercentage = 0;
  let discountMessage = "";

  // Discount Logic
  if (totalPrice >= 10000) {
    discountPercentage = 30;
    discountMessage = "🎉 You’ve unlocked the highest discount of 30%!";
  } else if (totalPrice >= 5000) {
    discountPercentage = 10;
    discountMessage = `🎉 You’ve unlocked 10% off! Buy ${Math.ceil((10000 - totalPrice) / (totalPrice / totalItems))} more items for 30% off!`;
  } else {
    discountMessage = `🛍️ Buy ${Math.ceil((5000 - totalPrice) / (totalPrice / totalItems))} more items to get 10% off!`;
  }

  const discountAmount = (totalPrice * discountPercentage) / 100;
  const finalPrice = totalPrice - discountAmount;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl p-6 border border-gray-200 gap-6 items-center"
              >
                {/* Product Image */}
                <div className="w-full md:w-40 h-40 flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={item.thumbnail || "/placeholder.png"}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-600 mt-1 leading-tight">{item.description}</p>
                  <p className="text-lg font-bold text-gray-700 mt-2">₹{item.price}</p>

                  {/* Quantity Buttons */}
                  <div className="flex items-center space-x-4 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-all mt-4 md:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Right Section - Summary & Checkout */}
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6 border border-gray-200 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>

            {/* Discount Message */}
            <div className="p-4 text-center text-lg font-semibold bg-blue-100 text-blue-700 rounded-lg mb-4">
              {discountMessage}
            </div>

            {/* Total Price & Discount */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Total: ₹{totalPrice.toFixed(2)}</h2>

              {discountAmount > 0 && (
                <p className="text-green-600 text-lg font-semibold mt-2">
                  🎉 Discount Applied: -₹{discountAmount.toFixed(2)} ({discountPercentage}% off)
                </p>
              )}

              <h2 className="text-3xl font-bold text-blue-800 mt-2">
                Final Amount: ₹{finalPrice.toFixed(2)}
              </h2>

              <button className="mt-5 bg-green-500 text-white px-7 py-4 rounded-lg hover:bg-green-700 transition-all text-lg w-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
