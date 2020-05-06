import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductList } from "./pages/ProductList";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { OrderCompleted } from "./pages/OrderCompleted";
import { Container } from "semantic-ui-react";

import { addData } from "./redux/actions/products";
import { data } from "./data/products";
import "./css/app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData(data));
  }, []);

  const products = useSelector((state) => state.products.products);

  if (!products) {
    return "Loading..";
  }

  return (
    <>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Container>
            <Route exact path="/" component={ProductList} />
            <Route path="/details/:slug" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/complete" component={OrderCompleted} />
          </Container>
        </main>
        <ToastContainer autoClose={1000} hideProgressBar />
      </div>
    </>
  );
}

export default App;
