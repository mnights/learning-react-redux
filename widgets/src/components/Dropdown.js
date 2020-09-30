import React, {useState, useRef, useEffect} from "react";

const Dropdown = ({label, options, selected, onSelectedChange}) => {
   const [open, setOpen] = useState(false);
   // Direct reference to DOM element.
   // Use this to get the top-most element of the dropdown element; className=ui form.
   const ref = useRef();

   useEffect(() => {
      const onBodyClick = (event) => {
         // console.log(event.target);
         // contains function belongs to all DOM elements.
         if (ref.current.contains(event.target)) {
            return;
         }
         // manual event listen, these are called first. After this is called, then
         // the React event get called in bubble-up fashion.
         setOpen(false);
      };
      document.body.addEventListener('click', onBodyClick);

      // Clean up function.
      return () => {
         document.body.removeEventListener('click', onBodyClick);
      };
   }, []);

   const renderedOptions = options.map((option) => {
      if (option.value === selected.value) {
         return null;
      }

      return (
          <div key={option.value}
               onClick={() => {
                  // console.log('item clicked!');
                  onSelectedChange(option);
               }}
               className="item">
             {option.label}
          </div>
      );
   });

   // console.log(ref.current);

   return (
       <div ref={ref} className="ui form">
          <div className="field">
             <label className="label">{label}</label>
             <div onClick={() => {
                // console.log('dropdown clicked!');
                setOpen(!open);
             }}
                  className={`ui selection dropdown ${open ? 'visible active' : ''}`}
             >
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open ? 'visible transition' : ''}`}>
                   {renderedOptions}
                </div>
             </div>
          </div>
       </div>
   );
};

export default Dropdown;