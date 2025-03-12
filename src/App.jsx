import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex-row bg-white dark:bg-black">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;