import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useDebouncedValue = <T>(value: T, delay = 300): T => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = debounce(() => {
      setDebounced(value);
    }, delay);

    handler();

    return () => {
      handler.cancel();
    };
  }, [value, delay]);

  return debounced;
};

export default useDebouncedValue;
