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
            Unlock Your Business Potential with our AI-Powered Market
            Intelligence
          </h4>
          <p className="text-xl pb-10">
            Introducing GrowthForge.ai—an AI-powered platform revolutionizing
            the go-to-market (GTM) process for startups, SMEs, and tech
            companies. By blending cutting-edge technology with data-driven
            insights, our platform empowers businesses to unlock new levels of
            growth and operational efficiency.
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
              Say goodbye to manual lead hunting. Our AI-driven lead scoring
              system identifies and prioritizes your highest-potential leads,
              automating outreach and maximizing your conversion rates. Watch as
              your pipeline fills with quality prospects, effortlessly.
            </div>
          </div>
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-200 text-blue-100">
            <div class="text-3xl pb-5 font-bold">
              Sales Pipeline Optimization
            </div>
            <div>
              Transform your sales process with real-time AI insights. Analyze
              sales data, automate follow-ups, and optimize every step of the
              journey. Our platform helps you quickly identify opportunities,
              track job changes, and re-engage with potential customers—boosting
              efficiency and closing deals faster.
            </div>
          </div>
          <div class="h-96 px-8 pt-24 lg:w-1/3 bg-blue-200 text-blue-100">
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
        </div>
      </div>

      <img src="../../images/testimonial.png" class="px-5 xl:px-24" alt="" />

      <div class="flex flex-col lg:flex-row lg:px-40 h-80 px-8 bg-blue-100 advert_bg_image bg-no-repeat bg-cover bg-center justify-center items-center">
        <div class="text-2xl lg:text-4xl pb-8 lg:pb-0 lg:pr-24 font-medium lg:font-bold text-center lg:text-left text-white lg:w-2/3">
          Be the first to experience the power of AI-driven go-to-market
          strategies. Sign up now to secure your spot and unlock exclusive
          access to our platform before it launches.
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
