import ChatList from "./Components/ChatList";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <SideBar />
        <ChatList />
      </div>
    </div>
  );
}

export default App;
