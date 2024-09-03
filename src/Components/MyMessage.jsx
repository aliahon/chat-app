import React from "react";

const MyMessage = () => {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          Y
        </div>
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <p className="text-sm text-teal font-semibold">You</p>
          <div>I'm ok what about you?</div>
        </div>
      </div>
    </div>
  );
};

export default MyMessage;
