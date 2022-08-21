import React from "react";
type ModalType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal = ({ show, setShow }: ModalType) => {
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div
      id="info-popup"
      tabIndex={-1}
      onClick={closeModal}
      className={`${
        show ? "block" : "hidden"
      } h-modal fixed top-0 right-0 left-0 z-50 h-screen w-full overflow-y-auto overflow-x-hidden md:inset-0`}
    >
      <div className="relative m-auto flex items-center justify-center  h-full w-full max-w-lg p-4 ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-8"
        >
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Privacy info
            </h3>
            <p>
              The backup created with this export functionnality may contain
              some sensitive data. We suggest you to save this archive in a
              securised location.
            </p>
          </div>
          <div className="items-center justify-between space-y-4 pt-0 sm:flex sm:space-y-0">
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Learn more about privacy
            </a>
            <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <button
                id="close-modal"
                type="button"
                onClick={closeModal}
                className="w-full rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 sm:w-auto"
              >
                Cancel
              </button>
              <button
                id="confirm-button"
                type="button"
                onClick={closeModal}
                className="w-full rounded-lg bg-primary-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
