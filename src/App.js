import "./App.css";
import Users from "./components/users/users";
import Navbar from "./components/partial/Navbar";
import UserItem from "./components/users/UserItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container mt-2">
          <Routes>
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/users/:login" render={({match}) => (<UserItem postId={match.params.id} /> )} element={<UserItem/>}  />  
            <Route exact = {true} path='*' element={<Users />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
