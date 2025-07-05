import { BrowserRouter } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ChatWindow from "./components/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ChatWindow />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
