import { BrowserRouter } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from './components';
import ChatWindow from './components/Chat';

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
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
