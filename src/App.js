import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductList } from "./pages/ProductList";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { OrderCompleted } from "./pages/OrderCompleted";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/complete" component={OrderCompleted} />
    </div>
  );
}

export default App;
