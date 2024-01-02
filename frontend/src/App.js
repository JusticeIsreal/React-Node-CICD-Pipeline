// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserNmae] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("http://localhost:1234/names");
    console.log(response);
    setUserNmae(response.data);
  };
  return (
    <div className="App">
      <h1>My front end</h1>
      <h3>{userName}</h3>
    </div>
  );
}

export default App;
