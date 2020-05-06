import React from "react";
import { Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductList } from "./pages/ProductList";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { OrderCompleted } from "./pages/OrderCompleted";
import { Container } from "semantic-ui-react";

import "./css/app.css";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Container>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/complete" component={OrderCompleted} />
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
