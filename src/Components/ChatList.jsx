import React from "react";
import NewMessage from "./NewMessage";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";

const ChatList = () => {
  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
              <OthersMessage />
              <MyMessage />
            </div>
          </div>
        </div>
        <NewMessage />
      </div>
    </div>
  );
};

export default ChatList;
