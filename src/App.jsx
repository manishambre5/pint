import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex-row md:flex-col bg-white dark:bg-black">
      <Main />
      <SideBar />
    </div>
  );
}

export default App;