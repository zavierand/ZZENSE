import React, { createContext, useEffect, useState } from 'react';

// exports for use to create a global state var for the shopping bag
export const BagContext = createContext();

export const BagProvider = ({ children }) => {
    const [bagProducts, setBagProducts] = useState(localStorage.getItem('bagProducts') ? JSON.parse(localStorage.getItem('bagProducts')) : []);

    const addToBag = (product, size) => {
        setBagProducts((prevBagProducts) => {
          const existingProduct = prevBagProducts.find(
            (bagProduct) => bagProduct.name === product.name && bagProduct.size === size
          );
      
          if (existingProduct) {
            return prevBagProducts.map((bagProduct) =>
              bagProduct.name === product.name && bagProduct.size === size
                ? { ...bagProduct, quantity: bagProduct.quantity + 1 }
                : bagProduct
            );
          } else {
            return [...prevBagProducts, { ...product, size, quantity: 1 }];
          }
        });
      };      
      
    const removeFromBag = (product) => {
        setBagProducts((prevBagProducts) => {
            const existingProduct = prevBagProducts.find((bagProduct) => bagProduct.name === product.name);

            if (existingProduct.quantity === 1) {
                // If only one item is left, remove it from the bag
                const updatedBag = prevBagProducts.filter((bagProduct) => bagProduct.name !== product.name);
                // Check if the bag is empty and clear it if necessary
                if (updatedBag.length === 0) {
                    clearBag();  // Clear the bag if it's empty
                }
                return updatedBag;
            } else {
                // Otherwise, decrement the quantity
                return prevBagProducts.map((bagProduct) =>
                    bagProduct.name === product.name
                        ? { ...bagProduct, quantity: bagProduct.quantity - 1 }
                        : bagProduct
                );
            }
        });
    };

    const clearBag = () => {
        setBagProducts([]); // set the cart items to an empty array
    };

    useEffect(() => {
        localStorage.setItem("bagProducts", JSON.stringify(bagProducts));
    }, [bagProducts]);

    return (
        <BagContext.Provider
            value={{
                bagProducts,
                addToBag,
                removeFromBag,
                clearBag
            }}
        >
            {children}
        </BagContext.Provider>
    );
};
