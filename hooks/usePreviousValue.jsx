import { useEffect, useRef } from 'react';

/**
 * This is a Custom hook that retrieve the previous value of useState.
 */
const usePrevious = (value) => {
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;