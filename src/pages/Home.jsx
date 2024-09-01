import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="flex items-center justify-between h-32 px-5 xl:px-20">
        <a href="/">
          <img
            class="w-28 md:w-32 xl:w-36"
            alt="logo"
            src="../../images/logo.svg"
          />
        </a>
        <a
          href="https://forms.office.com/r/eNJnzf3XLx"
          target="_blank"
          className="w-36 md:w-40 xl:w-44 h-14 xl:h-16 flex items-center justify-center bg-blue-300 text-white text-lg"
        >
          Join the waitlist
        </a>
      </div>

      <div className="px-5 xl:px-20 py-12 lg:flex items-center">
      <div class="pt-12 lg:pt-0 lg:w-1/2 lg:pr-10">
          <img src="../../images/output-onlinepngtools.png" alt="" />
        </div>
        <div className="flex flex-col lg:justify-center lg:w-1/2 ">
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
            class="w-36 md:w-40 xl:w-44 h-14 xl:h-16 flex items-center justify-center md:text-lg bg-blue-300 text-white"
            href="https://forms.office.com/r/eNJnzf3XLx"
            target="_blank"
          >
            Join the waitlist
          </a>
        </div>
        
      </div>

      <div class="px-5 xl:px-16 pt-16 pb-4 bg-gradient">
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
          <div class="h-[480px] md:h-[580px] lg:h-[580px] xl:h-[500px] px-4 pt-12 lg:w-1/4 bg-white text-blue-100">
            <div class="text-3xl pb-5 font-bold">
              Automated Lead Generation{" "}
              <span style={{ color: "transparent" }}>Personalized</span>
            </div>
            <div>
              Say goodbye to manual lead hunting. Our AI-driven lead scoring
              system identifies and prioritizes your highest-potential leads,
              automating outreach and maximizing your conversion rates. Watch as
              your pipeline fills with quality prospects, effortlessly.
            </div>
          </div>
          <div class="h-[480px] md:h-[580px] lg:h-[580px] xl:h-[500px] px-4 pt-12 lg:w-1/4 bg-white text-blue-100">
            <div class="text-3xl pb-5 font-bold">
              Sales Pipeline Optimization{" "}
              <span style={{ color: "transparent" }}>Personalized</span>
            </div>
            <div>
              Transform your sales process with real-time AI insights. Analyze
              sales data, automate follow-ups, and optimize every step of the
              journey. Our platform helps you quickly identify opportunities,
              track job changes, and re-engage with potential customers—boosting
              efficiency and closing deals faster.
            </div>
          </div>
          <div class="h-[480px] md:h-[580px] lg:h-[580px] xl:h-[500px] px-4 pt-12 lg:w-1/4 bg-white text-blue-100">
            <div class="text-3xl pb-5 font-bold">
              Personalized Customer Engagement
            </div>
            <div>
              Deliver exceptional customer experiences with AI-powered
              personalization. Our platform enhances every interaction, offering
              tailored content and targeted experiences that resonate with your
              audience, driving loyalty and growth.
            </div>
          </div>
          <div class="h-[480px] md:h-[580px] lg:h-[580px] xl:h-[500px] px-4 pt-12 lg:w-1/4 bg-white text-blue-100">
            <div class="text-3xl pb-5 font-bold">
              Amplify Your ROI with Data-Driven Efficiency
            </div>
            <div>
              GrowthForge.ai amplifies your ROI across the entire go-to-market
              process. By optimizing metrics like Customer Acquisition Cost
              (CAC), Lifetime Value (LTV), and Net Revenue Retention (NRR), our
              platform helps you achieve more with less, driving sustainable
              growth
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <img
          src="../../images/digital-tab.jpg"
          className="px-5 xl:px-24 w-[100%] h-[auto] md:h-[600px] lg:h-[600px]"
          alt=""
        />
      </div>

      <div class="flex flex-col lg:flex-row lg:px-20 h-[500px] md:h-80 lg:h-80 px-8 bg-blue-100 advert_bg_image bg-no-repeat bg-cover bg-center justify-center items-center">
        <div class="text-2xl lg:text-3xl pb-8 lg:pb-0 lg:pr-24 font-medium lg:font-bold text-center lg:text-left text-white lg:w-2/3">
        Secure your spot now and unlock exclusive access to our platform before it launches. Don't miss the chance to transform your business—join the waitlist today!
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
          © Copyright GrowthForge. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default HomePage;
