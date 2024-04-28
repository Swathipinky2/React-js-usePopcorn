import { useEffect } from "react";

// Custom hook to handle keyboard events
export function useKey(key, action) {
  useEffect(
    function () {
      // Callback function for key event
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      // Add event listener for keydown
      document.addEventListener("keydown", callback);

      // Cleanup function to remove event listener
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
