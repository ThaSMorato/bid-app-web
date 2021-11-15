import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import "./styles/global.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
