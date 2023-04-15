import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpeg";

const Hero = () => {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="me"
        height={250}
        width={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, i'm jeon!"}</h2>
      <h3 className="text-xl font-semibold">Frontend developer</h3>
      <p>물처럼 잘 적응하는 개발자</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          contact me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
