import "./App.css";
import Users from "./components/users/users";
import Navbar from "./components/partial/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-2">
        <Users />
      </div>
    </div>
  );
}

export default App;
