import { AiOutlineClose } from "react-icons/ai";
import "./Modal.scss";
// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 z-[999999999] w-full h-full flex items-center justify-center ">
      <div className="w-full fixed z-0 bg-blend-overlay bg-[#5CD2E6] bg-opacity-90 h-full"></div>
      <div className="modal bg-white bg-opacity-50 z-10  w-full h-full  rounded-lg shadow-lg">
        <button
          className="animated_boxShadow z-[9999999999] modal-close absolute shadow-lg bottom-[43%] bg-white rounded-full p-2 right-8 hover:bg-[#5CD2E6] hover:text-white text-[#5CD2E6] "
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
