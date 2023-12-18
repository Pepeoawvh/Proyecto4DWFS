// import { useRef, useEffect } from "react";

// /**
//  * A custom hook for setting up event listeners to trigger a handler function.
//  *
//  * @param {string} name - The name of the event to listen for.
//  * @param {function} handler - The handler function to be called when the event is triggered.
//  */
// function useTrigger(name, handler) {
//   // Create a ref to store the handler function
//   const savedHandler = useRef();

//   // Update the savedHandler ref when the handler prop changes
//   useEffect(() => {
//     savedHandler.current = handler;
//   }, [handler]);

//   // Set up the event listener when the component mounts
//   useEffect(() => {
//     // Check if window.addEventListener is supported in the current environment
//     const isSupported = Boolean(window?.addEventListener);

//     if (!isSupported) return;

//     // Define the event listener function that calls the savedHandler
//     const eventListener = (event) => savedHandler.current(event);

//     // Add the event listener to the window
//     window.addEventListener(name, eventListener);

//     // Remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener(name, eventListener);
//     };
//   }, [name]);
// }

// export default useTrigger;

