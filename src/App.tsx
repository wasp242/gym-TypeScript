import Navbar from "../src/scenes/navbar";
import { useState } from "react";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
