import { useEffect } from 'react';

export const useClickOutside = (ref: any, handler: Function) => {
  useEffect(() => {
    const listener: EventListener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;
      handler();
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};
