import React from "react";
import Home from "./Components/Home/Home";
import Pages from "./Components/PagesText/Pages";
import Video from "./Components/PagesVideo/video";
import PagesWhat from "./Components/PagesWhat/PagesWhat";
import Helping from "./Components/Helping/Helping";
import About from "./Components/About/About";
import Image from "./Components/PageImages/Image";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Home />
      <Pages />
      <Video />
      <PagesWhat/>
      <Helping/>
      <About />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
