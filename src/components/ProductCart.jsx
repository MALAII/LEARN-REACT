import { useState } from "react";

function ProductCart() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Keyboard", price: 1500 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>


      <h2>Total Items in Cart: {cart.length}</h2>

      <h2>Products:</h2>
      {products.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price}
          </p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}

      <h2>Your Cart:</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - ₹{item.price}
            </p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductCart;
