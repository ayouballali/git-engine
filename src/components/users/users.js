import { useEffect, useState } from "react";
import axios from "axios";
import User from "./user";
import SearchUsers from "./SearchUsers";
function Users(params) {
  const [users, setUsers] = useState([]);

  function getUsers() {
    axios.get("https://api.github.com/users").then((response) => {
      setUsers(response.data);
    }).catch(e => {
      console.log(e);
  });
  }

  useEffect(() => {
    getUsers();
  }, []);

  function getUserFromGit(name) {
    if (name !== "") {
      axios
        .get(`https://api.github.com/search/users?q=${name}`)
        .then((response) => {
          setUsers(response.data.items);
        }).catch(e => {
          console.log(e);
      });
    }
    
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <SearchUsers getUserFromGit={getUserFromGit} />
        </div>
      </div>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4" key = {user.id}>
            <User  user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
