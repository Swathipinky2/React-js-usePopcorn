import { useState, useEffect } from "react";

// Custom hook to store state in local storage
export function useLocalStorageState(initialState, key) {
  // Initialize state with value from local storage or initial value
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // Effect to update local storage when state changes
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
