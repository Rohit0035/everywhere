import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeFour from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeFour />} />
      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;
