import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Cart } from "./pages/Cart";
import { OrderCompleted } from "./pages/OrderCompleted";
import { AnimatePresence } from "framer-motion";

import "./css/app.css";

const Products = lazy(() => import("./pages/ProductList"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <AnimatePresence>
            <Suspense fallback={<div>Loading..</div>}>
              <Switch>
                <Route exact path="/" component={Products} />
                <Route path="/details/:slug" component={ProductDetails} />
                <Route path="/cart" component={Cart} />
                <Route path="/completed" component={OrderCompleted} />
              </Switch>
            </Suspense>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

export default App;
