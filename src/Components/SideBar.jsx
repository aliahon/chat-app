import React from "react";
import ActiveUser from "./ActiveUser";

const SideBar = () => {
  const activeUsers = ["Aliahon", "You", "Mohamed"];
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">AliahonChat</div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Active Users</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            {activeUsers.length}
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
          {activeUsers.map((element) => (
            <ActiveUser key={element} username={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
