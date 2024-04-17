import React, { useRef, useState } from "react";
import { stables } from "../constants/stables";

const PasswordModal = ({ isOpen, setIsOpen, pass, file }) => {
  const [isPasswordSet, setIsPasswordSet] = useState(false);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPassword = passRef.current.value;
    if (enteredPassword === pass) {
      const pdfUrl = `${stables.MEDIA_URL}/${file}`;
      window.open(pdfUrl, "_blank");
      setIsOpen(false);
    } else {
      passRef.current.classList.add("border-red-500");
      passRef.current.value = "";
      setTimeout(() => {
        passRef.current.classList.remove("border-red-500");
      }, 2000);
    }
  };

  const handleInputChange = () => {
    setIsPasswordSet(passRef.current.value.length > 0);
  };

  return (
    <div className={`w-full h-full ${isOpen ? "block" : "hidden"}`}>
      <form className="flex flex-col group" onSubmit={handleSubmit}>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          ref={passRef}
          onKeyUp={handleInputChange}
          type="password"
          placeholder="Password"
          className={`px-3 py-2 border-l-2 transition-colors ease-out duration-75 border-black peer-only:bg-transparent peer-only:hover:border-[#1f1f1f] focus:outline-none ${
            isPasswordSet ? "focus:bg-gray-100/50" : "focus:bg-transparent"
          }`}
        />
        <button
          type="submit"
          className="px-3 bg-black peer hover:bg-[#1f1f1f] p-2 text-left text-white group-hover:peer-hover:border-[#1f1f1f]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordModal;
