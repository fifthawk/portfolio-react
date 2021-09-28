import Header from "./Components/Header/Header.js";
import ProjectOne from "./Components/Project1/ProjectOne.js"
import ProjectTwo from "./Components/Project2/ProjectTwo.js"
import "./App.css";

function App() {
  
  return (
    <>
      <div className="container">
        <Header />
        <ProjectOne />
        <ProjectTwo />
      </div>
    </>
  );
}
export default App;
