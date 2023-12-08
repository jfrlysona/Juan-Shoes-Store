import React, { createContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
export const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  function addWishlist(item) {
    if (wishlist.find((x) => x.id === item.id)) {
      setWishlist(wishlist.filter((x) => x.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  }

  function removeItemWishlist(item) {
    setWishlist(wishlist.filter((x) => x.id !== item.id));
  }
  const datas = { wishlist, addWishlist, removeItemWishlist };
  return (
    <WishlistContext.Provider value={datas}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
