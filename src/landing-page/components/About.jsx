import React from "react";
import knowledgehive from "../assets/knowledgehive.png";

function About() {
  return (
    <div className="flex flex-row" id="about">
      <div className="relative ml-auto mr-10 items-center w-[45%]">
        <h2 className="text-white about w-full mt-14">
          About Knowledge Hive✌️
        </h2>
        <div className="flex flex-col">
          <p className="text-gray-300 mt-14 pt-8 font-medium text-xl">
            Struggling to find the perfect study materials? Want to connect with
            classmates who share your academic interests? Look no further! The
            KNOWLEDGE HIVE is your one-stop shop for student success.
          </p>
          <p className="text-gray-300 mt-6 font-medium text-xl">
            The Knowledge Hive is more than just a website; it's a vibrant
            online community dedicated to empowering students. We're here to
            help you learn more effectively, collaborate seamlessly, and achieve
            your academic goals.
          </p>
        </div>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:mx-w-5xl mt-14">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient box-shadow">
          <div className="relative rounded-[1rem] bg-slate-900">
            <div className="h-[1.5rem] rounded-t-[0.9rem] bg-slate-800" />
            <div className="rounded-b-[0.9rem] overflow-hidden">
              <img
                src={knowledgehive}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
