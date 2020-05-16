import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductList } from "./pages/ProductList";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { OrderCompleted } from "./pages/OrderCompleted";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/app.css";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details/:slug" component={ProductDetails} />
              <Route path="/cart" component={Cart} />
              <Route path="/completed" component={OrderCompleted} />
            </Switch>
          </AnimatePresence>
        </main>
        <ToastContainer
          autoClose={1000}
          hideProgressBar
          position={"bottom-right"}
        />
      </div>
    </>
  );
}

export default App;
