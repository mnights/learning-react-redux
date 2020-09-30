const throttle = (fn, delay) => {
   let last = 0;
   return (...args) => {
      const now = new Date().getTime();
      if ((now - last) < delay) {
         return;
      }
      last = now;
      return fn(...args);
   };
};

const debounce = (fn, delay) => {
   let timeout = 0;
   return () => {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay);
   };
};

