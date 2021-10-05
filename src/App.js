import Header from "./Components/Header/Header.js";
import ProjectOne from "./Components/Project1/ProjectOne.js";
import ProjectTwo from "./Components/Project2/ProjectTwo.js";
import ProjectThree from "./Components/Project3/ProjectThree.js";

import "./App.css";



function App() {
  return (
    <>
      <div className="container">
        <Header />
        <ProjectThree />
        <ProjectTwo />
        <ProjectOne />
      </div>
    </>
  );
}
export default App;
