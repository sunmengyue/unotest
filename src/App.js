import "./style/App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
