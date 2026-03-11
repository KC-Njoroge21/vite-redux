import React from "react";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import AllProducts from "./pages/AllProducts";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const itemList = useSelector((state) => state.cart.itemList);

  console.log(itemList);
  console.log(isLoggedIn);

  return <div>{isLoggedIn ? <AllProducts /> : <Login />}</div>;
};

export default App;
