import "./style/App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";
import { useRef } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const sidebarRef = useRef();
  return (
    <div className="App">
      <AppContext.Provider value={{ sidebarRef }}>
        <Sidebar />
        <MainScreen />
      </AppContext.Provider>
    </div>
  );
}

export default App;
