import React, {useState, useEffect} from "react";
import axios from 'axios';


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

const Search = () => {
   const [term, setTerm] = useState('programming');
   const [debouncedTerm, setDebouncedTerm] = useState(term);
   const [results, setResults] = useState([]);

   useEffect(() => {
      const timerId = setTimeout(() => {
         setDebouncedTerm(term);
      }, 700);
      return () => {
         clearTimeout(timerId);
      };
   }, [term]);

   useEffect(() => {
      const search = async () => {
         // gets all data
         const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
             {
                params: {
                   action: 'query',
                   list: 'search',
                   origin: '*',
                   format: 'json',
                   srsearch: debouncedTerm,
                }
             });

         setResults(data.query.search);
      };
      search();
   }, [debouncedTerm]);

   // Not allow to mark useEffect with async, use alternative solution.
   // 3-ways to make calls in useEffect.
   // useEffect(() => {
   //    // Other use of useEffect() - when provide function in it, we can return a value, but
   //    // it can only be another function.
   //
   //    // * Method 1 - temp var as function with async, then call it.
   //    const search = async () => {
   //       // gets all data
   //       // const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
   //       const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
   //           {
   //              params: {
   //                 action: 'query',
   //                 list: 'search',
   //                 origin: '*',
   //                 format: 'json',
   //                 srsearch: term,
   //              }
   //           });
   //
   //       setResults(data.query.search);
   //    };
   //    if (term && !results.length) {
   //       search();
   //    } else {
   //       const timeoutId = setTimeout(() => {
   //          if (term) {
   //             search();
   //          }
   //       }, 700);
   //
   //       // React keeps track of this function and calls it first when useEffect is re-rendered.
   //       return () => {
   //          clearTimeout(timeoutId);
   //       };
   //    }
   //    // * Method 2 - anonymous call. Declare helper function and immediately invoke it.
   //    // (async () => {
   //    //    await axios.get('');
   //    // })();
   //
   //    // * Method 3 - Use promise.
   //    // axios.get('')
   //    //     .then((response) => {
   //    //        console.log(response.data);
   //    //     });
   // }, [term, results.length]);  // second arg is 'dependency array'.

   const renderedResults = results.map((result) => {
      return (
          <div key={result.pageid} className="item">
             <div className="right floated content">
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`}
                   className="ui button">Go
                </a>
             </div>
             <div className="content">
                <div className="header">
                   {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
             </div>
          </div>
      );
   });

   return (
       <div>
          <div className="ui form">
             <div className="field">
                <label>Enter Search Term</label>
                <input value={term}
                       onChange={(e) => setTerm(e.target.value)}
                       className="input"/>
             </div>
             <div className="ui celled list">
                {renderedResults}
             </div>
          </div>
       </div>
   );
};

// We configure the hook to run some code automatically in one of three scenarios:
//    1. When the component is rendered for the first time.
//    2. When the component is rendered for the first time AND whenever it re-renders.
//    3. When the component is rendered for the first time AND whenever it re-renders
//       AND when some piece of data has changed.

// useEffect(function, define one of the 3 scenarios);
//  1 of 3 scenarios defined like:
//    No argument - Run at initial render AND run after every re-render,
//    Empty array argument - Run at initial render,
//    Array argument with something inside of it - Run at initial render AND after
//       every re-render AND after every re-render if data has change since last render.

export default Search;
