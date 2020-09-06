import React from "react";

class SearchBar extends React.Component {
   state = {term: 'Image Name'};

   // One way to let JS know what this is, is to bind the function name in a constructor.
   // constructor() {
   //    super();
   //    this.onFormSubmit = this.onFormSubmit.bind(this);
   // }

   // arrow syntax, introduced in ES2015, automatically creates the bind on the function name.
   // Replace standard function syntax with arrow reference.  Default method to solve error.
   onFormSubmit = event => {
   // onFormSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
   }

   render() {
      return (
          <div className="ui segment">
             <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                   <label>Image Search:</label>
                   <input
                       type="text" value={this.state.term}
                       onChange={e => this.setState({term: e.target.value})}
                   >
                   </input>
                </div>
             </form>
          </div>
      );
   }
}

export default SearchBar;
