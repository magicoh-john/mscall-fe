import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { QuickMenu } from "./components/QuickMenu";
import About from "./pages/About";
import Service from "./pages/Service";
import Home from "./pages/Home";
import Process from "./pages/Process";
import { QnA } from "./pages/QnA";
import ScrollToTop from "./components/ScrollToTop";
import { Privacy } from "./pages/Privacy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id="wrap">
        <Header />
        <div id="cBody">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/process" element={<Process />} />
            <Route path="/qna" element={<QnA />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
        <QuickMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
