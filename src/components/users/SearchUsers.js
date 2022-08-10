import React, { useState } from "react";

export default function SearchUsers(props) {

    const [search,setSearch] = useState('');

    function handelForm(e){
        setSearch(e.target.value)
    }

    function handelSubmit(e){
        e.preventDefault()
        props.getUserFromGit(search)
    }
  return (
    <div>
      <form onSubmit={handelSubmit}  >
        <div className="form-groupe my-2">
          <label htmlFor="search"> Search </label>

          <input
          value={search}
          
          onChange={handelForm}
            type="text"
            className="form-control"
            name=""
            id="search"
            placeholder="search for users"
          />
        </div>
        <button className="btn btn-danger btn-block">Search</button>
      </form>
    </div>
  );
}
