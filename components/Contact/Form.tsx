import React, { FormEvent, useState } from "react";
import Modal from "../ui/Modal/Modal";

const Form = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = (e: FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8" onSubmit={handleModal}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={"anuragchindaliya@gmail.com"}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="name@flowbite.com"
                required
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={"Let's create crazy projects"}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Let us know how we can help you"
                required
                readOnly
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Leave a comment..."
                defaultValue={""}
                readOnly
              />
            </div>
            <button
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg py-3 px-5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <Modal show={isModalOpen} setShow={setModalOpen} />
    </>
  );
};

export default Form;
