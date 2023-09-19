import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className="fixed top-0  left-0 z-[999999999] w-full h-full flex items-center justify-center ">
      <div className="w-full fixed z-0 bg-blend-overlay bg-purple-900 bg-opacity-90 h-full"></div>
      <div className="modal bg-white bg-opacity-50 z-10  w-full h-full  rounded-lg shadow-lg">
        <button
          className="modal-close absolute bottom-[60%] bg-white rounded-full p-2 right-10 text-purple-600 hover:text-purple-900"
          onClick={onClose}
        >
          <AiOutlineClose className="text-xl" />
        </button>
        <div className="bg-white w-full h-full p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
