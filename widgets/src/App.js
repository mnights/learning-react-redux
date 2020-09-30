import React, {useState} from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
   {
      title: 'What is React?',
      content: 'React is a front end javascript framework'
   },
   {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers'
   },
   {
      title: 'How do you use React',
      content: 'You use React by creating components'
   }
];

const options = [
   {
      label: 'Honeycrisp Apples',
      value: 'red'
   },
   {
      label: 'Green Apples',
      value: 'green'
   },
   {
      label: 'Big Toe',
      value: 'blue'
   }
];

// Function for each component... messy.
// const showAccordion = () => {
//    if (window.location.pathname === '/') {
//       return <Accordion items={items}/>;
//    }
// };
// const showList = () => {
//    if (window.location.pathname === '/list') {
//       return <Search/>;
//    }
// };
// const showDropdown = () => {
//    if (window.location.pathname === '/dropdown') {
//       return <Dropdown/>;
//    }
// };
// const showTranslate = () => {
//    if (window.location.pathname === '/translate') {
//       return <Translate/>;
//    }
// }

// Common funtion, Or define a new function to do this.
// const showComponent = (route, component) => {
//    return window.location.pathname === route
//    ? component : null;
// };


export default () => {
   const [selected, setSelected] = useState(options[0]);
   // const [showDropdown, setShowDropdown] = useState(true);

   return (
       <div>
          <Header />
          <Route path="/"><Accordion items={items}/></Route>
          <Route path="/list"><Search/></Route>
          <Route path="/dropdown">
             <Dropdown label="Select a Fruit"
                       options={options}
                       selected={selected}
                       onSelectedChange={setSelected} />
          </Route>
          <Route path="/translate"><Translate/></Route>
       </div>
   );
   // return <div><Accordion items={items}/></div>;
};


// <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
// {showDropdown ?
//     <Dropdown selected={selected}
//               onSelectedChange={setSelected}
//               options={options}
//     /> : null
// }

