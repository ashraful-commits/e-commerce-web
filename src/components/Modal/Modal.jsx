import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className="fixed top-0  p-5 left-0 z-[999999999] w-screen h-screen flex items-center justify-center ">
      <div className="w-full fixed z-0 bg-blend-overlay bg-purple-900 bg-opacity-90 h-full"></div>
      <div className="modal bg-white z-10 p-4 w-full h-full  rounded-lg shadow-lg">
        <button
          className="modal-close absolute top-5 right-10 text-white hover:text-white"
          onClick={onClose}
        >
          <AiOutlineClose className="text-3xl" />
        </button>
        <div className="bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
