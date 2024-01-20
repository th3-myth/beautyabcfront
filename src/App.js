import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import hair_banner from "./Components/Assets/banner_hair.png";
import face_banner from "./Components/Assets/banner_face.png";
import makeovers_banner from "./Components/Assets/banner_makeovers.png";
import LoginSignup from "./Pages/LoginSignup";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/jewellery" element={<ShopCategory banner={face_banner} category="jewellery" />} />
          <Route path="/dresses" element={<ShopCategory banner={hair_banner} category="dresses" />} />
          <Route path="/makeovers" element={<ShopCategory banner={makeovers_banner} category="makeovers" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;