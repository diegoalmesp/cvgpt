import { useState } from 'react';
import Joyride from 'react-joyride';
import { BrowserRouter } from 'react-router-dom';
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
import { useEffect } from 'react';
import YouTube from './components/YouTube';

const App = () => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: '.joyride-chat',
      content:
        'You can ASK any question to my CV using this chat window. It uses DeepSeek to respond.',
      disableScrolling: true,
      placement: 'top',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setRun(false);
    }, 10000);
  }, []);

  return (
    <BrowserRouter>
      <Joyride
        steps={steps}
        run={run}
        styles={{
          options: {
            arrowColor: '#e3ffeb',
            backgroundColor: '#e3ffeb',
            overlayColor: 'rgba(79, 26, 0, 0.4)',
            textColor: '#004a14',
            width: 200,
            zIndex: 1000,
            beaconSize: 60,
          },
        }}
      />

      <div className="relative z-0 bg-primary">
        <ChatWindow className="joyride-chat" />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar className="joyride-navbar" />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <YouTube />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
