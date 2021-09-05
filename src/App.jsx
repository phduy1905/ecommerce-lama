import HomePage from "./pages/HomePage";
import GlobalStyle from "./GlobalStyle";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage.component";
import RegisterPage from "./pages/RegisterPage/RegisterPage.component";
import LoginPage from "./pages/LoginPage/LoginPage.component";
import CartPage from "./pages/CartPage/CartPage.component";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <CartPage />
    </>
  );
};

export default App;
