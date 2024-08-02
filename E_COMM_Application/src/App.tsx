import { useState } from "react";
import Navigation from "./Customer/components/Navigation/Navigation";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
   <div>
    <Navigation/>
   </div>
  );
}

export default App;
