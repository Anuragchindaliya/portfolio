import React from "react";
const Jumbtron = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let's find more that brings us together.
          </h2>
          <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Flowbite helps you connect with friends, family and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups, Watch and Marketplace.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="mr-2 -ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              View more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <img
          className="hidden w-full dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let's create more tools and ideas that brings us together.
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Flowbite helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
const CallToAction = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Start your free trial today
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try Flowbite Platform for 30 days. No credit card required.
          </p>
          <a
            href="#"
            className="mr-2 mb-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Free trial for 30 days
          </a>
        </div>
      </div>
    </section>
  );
};
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full rounded-lg lg:mt-10"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};
const SocialProof = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
        <dl className="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">73M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              developers
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">1B+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              contributors
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">4M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              organizations
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
const services = () => {
  return (
    <>
      <Jumbtron />
      <Hero />
      <CTA />
      <SocialProof />
      <CallToAction />
    </>
  );
};

export default services;
