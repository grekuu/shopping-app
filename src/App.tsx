import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
