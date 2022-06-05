import React from "react";

function Subscribe() {
  return (
    <div
      className="w-full px-4 py-16 bg-black text-white text-center"
      id="community"
    >
      <h1>Join our Defi Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <p>Yes, i agree to recieve email communications from Defi</p>
      </div>
    </div>
  );
}

export default Subscribe;
