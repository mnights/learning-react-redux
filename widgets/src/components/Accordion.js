import React, {useState} from "react";

const Accordion = ({items}) => {

   // useState is Reat primitive hooks for functional components.
   // This is array destructuring, same as destructuring to access elements inside structure.
   // Dereferences array into variables.
   // activeIndex = Piece of State
   // setActiveIndex = Function to change this piece of state.
   // null = Initial value for this piece of state.
   const [activeIndex, setActiveIndex] = useState(null);
   // const [color, setColor] = useState("green");

   const onTitleClick = (index) => {
      setActiveIndex(index);
   };

   const renderedItems = items.map((item, index) => {
      const active = index === activeIndex ? 'active' : '';

          console.log("render");
      return (
          <React.Fragment key={item.title}>
             <div
                 className={`title ${active}`}
                 onClick={() => onTitleClick(index)}
             >
                <i className="dropdown icon"></i>
                {item.title}
             </div>
             <div className={`content ${active}`}>
                <p>{item.content}</p>
             </div>
          </React.Fragment>
      )
   });

   return <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
   </div>;
};

export default Accordion;

