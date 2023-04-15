import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Jeon 커리어 소개"
}

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 프론트엔드 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
          <h2 className={TITLE_CLASS}>Career</h2>
          <p>
            비스키트(2022.01 - 2023.04) <br />
            컨트롤클로더(2021.02 - 2021.10)
          </p>
          <h2 className={TITLE_CLASS}>Skills</h2>
          <p>React, Javascript</p>
        </p>
      </section>
    </>
  );
};

export default AboutPage;
