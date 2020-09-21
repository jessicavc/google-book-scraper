import React from "react";


function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h4>Search the world's most comprehensive index of books</h4></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder=""
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-outline-success mt-3 mb-5">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;
