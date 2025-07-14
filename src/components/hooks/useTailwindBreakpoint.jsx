import { useEffect, useState } from 'react';

const getTailwindBreakpoint = (width) => {
  if (width < 640) return 'sm';
  if (width < 768) return 'md';
  if (width < 1024) return 'lg';
  if (width < 1280) return 'xl';
  if (width < 1536) return '2xl';
  return 'full';
};

const isIpad = () => {
  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform;

  const isiPadOld = /ipad/.test(ua);
  const isiPadNew = platform === 'MacIntel' && navigator.maxTouchPoints > 1; // iPadOS reports as Mac now

  return isiPadOld || isiPadNew;
};

export const useTailwindBreakpointAndDevice = () => {
  const [breakpoint, setBreakpoint] = useState('');
  const [isIPad, setIsIPad] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getTailwindBreakpoint(window.innerWidth));
    };

    setIsIPad(isIpad());
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { breakpoint, isIPad };
};

export default useTailwindBreakpointAndDevice;
export { useTailwindBreakpointAndDevice as useTailwindBreakpoint };
