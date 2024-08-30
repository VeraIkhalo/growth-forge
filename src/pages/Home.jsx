import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="flex items-center justify-between h-32 px-5 xl:px-24">
        <a href="/">
          <img
            src="../../images/growth-forge-logo.jpeg"
            className="w-56 md:w-64 xl:w-72"
            alt=""
          />
        </a>
        <a
          href="https://docs.google.com/document/d/1JTsCYpQx-nYcaS05rGkT8fLmbGEgO-FX6xzd-QVdAtI/edit"
          target="_blank"
          className="w-36 md:w-40 xl:w-44 h-14 xl:h-16 flex items-center justify-center bg-blue-100 text-white text-lg"
        >
          Join the waitlist
        </a>
      </div>

      <div className="px-5 xl:px-24 py-12 lg:flex">
        <div className="flex flex-col lg:justify-center lg:w-1/2 lg:pr-10">
          <h4 className="text-5xl pb-4 font-medium text-purple-100">
            Close deals faster, focus on the legal tasks that matter
          </h4>
          <p className="text-xl pb-10">
            Ervis helps legal teams minimize the time spent on legal processes
            by harnessing the power of AI
          </p>
          <a
            class="w-36 md:w-40 xl:w-44 h-14 xl:h-16 flex items-center justify-center md:text-lg bg-blue-100 text-white"
            href="https://qhtbmipglyz.typeform.com/to/j10bYwYY"
            target="_blank"
          >
            Join the waitlist
          </a>
        </div>
        <div class="pt-12 lg:pt-0 lg:w-1/2">
          <img src="../../images/hero.png" class="" alt="" />
        </div>
      </div>

      <div class="px-5 xl:px-24 pt-16 bg-gradient">
        <div class="flex flex-col lg:flex-row lg:pb-14">
          <div class="text-5xl pb-12 lg:pb-0 lg:pr-12 lg:w-1/2 font-medium text-white">
            Dive into the new age of contract management
          </div>
          <div class="text-xl lg:text-lg pb-16 lg:pb-0 lg:pt-2 lg:w-1/2 text-white">
            Effortlessly draft, review, negotiate and sign legal contracts with
            Ervis. Our AI technology simplifies your contract process, saving
            time and enhancing accuracy in contract processes.
          </div>
        </div>
        <div class="flex flex-col lg:flex-row lg:items-end gap-2">
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-100 text-white">
            <div class="text-3xl pb-5 font-bold">Draft</div>
            <div>
              Create legal contracts with the click of a button from templates
              within seconds. Alternatively, import your counterpart templates
              from Word, Google doc, PDF or even a webpage.
            </div>
          </div>
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-200 text-blue-100">
            <div class="text-3xl pb-5 font-bold">Review</div>
            <div>
              Ervis' cutting-edge AI swiftly reviews and analyses contracts,
              ensuring accuracy, compliance, and efficiency. Our intelligent
              system identifies critical clauses and potential negotiation
              areas, transforming how you handle legal documents.
            </div>
          </div>
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-200 text-blue-100">
            <div class="text-3xl pb-5 font-bold">Generate</div>
            <div>
              Generate alternate clauses while automatically marking up contract
              based on instructions in the contract native language.
            </div>
          </div>
        </div>
      </div>

      <img src="../../images/testimonial.png" class="px-5 xl:px-24" alt=""/>

      <div class="flex flex-col lg:flex-row lg:px-40 h-80 px-8 bg-blue-100 advert_bg_image bg-no-repeat bg-cover bg-center justify-center items-center">
        <div class="text-2xl lg:text-4xl pb-8 lg:pb-0 lg:pr-24 font-medium lg:font-bold text-center lg:text-left text-white lg:w-2/3">
          Be the first to Experience AI-Powered Contract Review
        </div>
        <a
          class="w-40 md:w-44 h-14 xl:h-16 flex items-center justify-center md:text-lg bg-white text-darkblue"
          href="https://docs.google.com/document/d/1JTsCYpQx-nYcaS05rGkT8fLmbGEgO-FX6xzd-QVdAtI/edit"
          target="_blank"
        >
          Join the waitlist
        </a>
      </div>
      {/*FOOTER */}
      <div class="flex flex-col p-12 justify-center items-center text-center max-w-sm mx-auto">
        <div class="text-base lg:text-lg font-bold pb-1.5">
          Empowering Legal Teams with Cutting-Edge AI Technology
        </div>
        <div class="text-xs lg:text-sm text-grey-100">
          © Copyright Ervis. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default HomePage;
