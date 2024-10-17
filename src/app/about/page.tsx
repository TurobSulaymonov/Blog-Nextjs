import Hero from "@/components/Hero";
const TITLE_Class = "text-2xl font-bold text-gray-800 my-2"
export default function AboutPage() {
  return (
    <>
    <Hero/>
    <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
      <h2 className={TITLE_Class}>
        Who am I?
      </h2>
      <p>
        개발을 사랑하는 FullStack 개발자 <br />
        사람과 디자인을 담는 웹앱을 만들고 있음
      </p>
      <h2 className={TITLE_Class}>Career</h2>
      <p>경복대학교(-Now) <br />
       UzbekTelecom(-2018)
      </p>
      <h2 className={TITLE_Class}>Skills</h2>
      <p>
        React, Node Nestjs <br />
        Git, Clean Code <br />
        Vs Code, MongoDb, FireBase
      </p>
    </section>
    </>
  );

}
