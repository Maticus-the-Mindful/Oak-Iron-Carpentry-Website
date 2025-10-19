import { useState, useEffect } from 'react';
import { useScrollPosition } from './useScrollPosition';

export const useParallax = (speed: number = 0.5) => {
  const { y } = useScrollPosition();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(y * speed);
  }, [y, speed]);

  return offset;
};

