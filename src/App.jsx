import "./App.css";

// cpmponents
import Home from "./pages/Home";
import Category from "./pages/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routePath } from "./constants/route";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<Category />} />
          <Route path={routePath.invalid} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
