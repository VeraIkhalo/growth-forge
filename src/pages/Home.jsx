import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="flex items-center justify-between h-32 px-5 xl:px-20">
        <a href="/">
        <img class="w-28 md:w-32 xl:w-36" alt="logo" src="../../images/logo.svg" />
        </a>
        <a
          href="https://forms.office.com/r/eNJnzf3XLx"
          target="_blank"
          className="w-36 md:w-40 xl:w-44 h-14 xl:h-16 flex items-center justify-center bg-blue-100 text-white text-lg"
        >
          Join the waitlist
        </a>
      </div>

      <div className="px-5 xl:px-20 py-12 lg:flex items-center">
        <div className="flex flex-col lg:justify-center lg:w-1/2 lg:pr-10">
          <h4 className="text-5xl pb-4 font-medium text-purple-100">
            Unlock Your Business with AI-Powered Market Intelligence
          </h4>
          <p className="text-xl pb-10">
            Introducing GrowthForge.ai—an AI-powered platform revolutionizing
            go-to-market strategies for startups, SMEs, and tech companies.
            Unlock new levels of growth and efficiency with data-driven
            insights.
          </p>
          <a
            class="w-36 md:w-40 xl:w-44 h-14 xl:h-16 flex items-center justify-center md:text-lg bg-blue-100 text-white"
            href="https://forms.office.com/r/eNJnzf3XLx"
            target="_blank"
          >
            Join the waitlist
          </a>
        </div>
        <div class="pt-12 lg:pt-0 lg:w-1/2">
          <img src="../../images/nuclear-energy.jpg" className="h-[900px]" alt="" />
        </div>
      </div>

      <div class="px-5 xl:px-16 pt-16 bg-gradient">
        <div class="flex flex-col lg:flex-row lg:pb-14">
          <div class="text-5xl pb-12 lg:pb-0 lg:pr-12 lg:w-1/2 font-medium text-white">
            AI-Powered Market Analysis
          </div>
          <div class="text-xl lg:text-lg pb-16 lg:pb-0 lg:pt-2 lg:w-1/2 text-white">
            Stay ahead of the competition by leveraging AI to dive deep into
            market trends, customer segments, and competitor strategies. Gain
            actionable insights that pave the way for strategic market entry and
            ensure your business is always a step ahead.
          </div>
        </div>
        <div class="flex flex-col lg:flex-row lg:items-end gap-2">
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-100 text-white">
            <div class="text-3xl pb-5 font-bold">Automated Lead Generation</div>
            <div>
              Say goodbye to manual lead hunting. Our AI-driven system
              prioritizes top leads, automates outreach, and boosts conversions,
              effortlessly filling your pipeline with quality prospects
            </div>
          </div>
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-200 text-blue-100">
            <div class="text-3xl pb-5 font-bold">
              Sales Pipeline Optimization
            </div>
            <div>
              Transform your sales process with real-time AI insights. Automate
              follow-ups, optimize every step, and quickly spot opportunities.
              Boost efficiency and close deals faster
            </div>
          </div>
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-200 text-blue-100">
            <div class="text-3xl pb-5 font-bold">
              Personalized Customer Engagement
            </div>
            <div>
              Our platform enhances every interaction, offering tailored content
              and targeted experiences that resonate with your audience.
            </div>
          </div>
        </div>
      </div>

     <div className="py-3">
     <img src="../../images/digital-tab.jpg" className="px-5 xl:px-24 w-[100%] h-[auto] md:h-[600px] xl:h-[600px]" alt="" />
     </div>

      <div class="flex flex-col lg:flex-row lg:px-20 h-80 px-8 bg-blue-100 advert_bg_image bg-no-repeat bg-cover bg-center justify-center items-center">
        <div class="text-2xl lg:text-4xl pb-8 lg:pb-0 lg:pr-24 font-medium lg:font-bold text-center lg:text-left text-white lg:w-2/3">
          Be the first to experience the power of AI-driven go-to-market
          strategies. Sign up now to secure your spot.
        </div>
        <a
          class="w-40 md:w-44 h-14 xl:h-16 flex items-center justify-center md:text-lg bg-white text-darkblue"
          href="https://forms.office.com/r/eNJnzf3XLx"
          target="_blank"
        >
          Join the waitlist
        </a>
      </div>
      {/*FOOTER */}
      <div class="flex flex-col p-12 justify-center items-center text-center max-w-sm mx-auto">
        <div class="text-base lg:text-lg font-bold pb-1.5">
          Empowering Your Business with AI-Powered Market Intelligence
        </div>
        <div class="text-xs lg:text-sm text-grey-100">
          © Copyright Gbenga. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default HomePage;
