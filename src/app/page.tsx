
import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-orbitron-sans)]">
      <main className="flex flex-col gap-8 items-start sm:items-start">
        <div className="grid grid-cols-6 grid-row-6 gap-5">
          <div className="row-span-2 row-end-3 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <h1 className="lg:text-8xl text-6xl lg:mb-3 font-[900]">Naing Aung Linn</h1>   
            <p className="text-xl">Senior Web Developer @ <Link href={'https://www.brycenmyanmar.com.mm/'} className="text-[#FF9F29] hover:text-amber-600" target="_blank">Brycen Myanmar</Link></p>
            <p className="text-3xl">Developer Out Of The Box</p> 
          </div> 
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl ">
            <p className="text-lg text-justify indent-8 font-mono">A Senior Developer with over seven years of experience in full-stack web development. I specialize in PHP, JavaScript, Laravel, and React with a strong focus on creating efficient and scalable web applications. I&apos;m passionate about learning new technologies and continuously improving my skills to deliver high-quality solutions. My passion lies in writing maintainable code, collaborating with cross-functional teams, and delivering high-quality solutions that align with business goals and user needs.</p>
          </div>
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <h1 className="text-4xl font-[900]">Projects <Counter to={3} duration={1} /></h1>
          </div>
          <div className="row-span-1 lg:col-span-4 col-span-6 bg-black text-white p-5 rounded-xl">
            <h1 className="col-span-6 font-mono text-2xl">Horse Management System</h1>
            <p className="col-span-9">2023-04-05 ~ 2023-10-20 <br/> <Link href={"https://umapoi.jp"} target="_blank" className="text-[#FF9F29] hover:text-amber-600">https://umapoi.jp</Link></p>
          </div>
          <div className="row-span-1 lg:col-span-2 col-span-6 lg:block hidden bg-black text-white p-5 rounded-xl">
            <h1 className="col-span-6 font-mono text-2xl">Event Management Application</h1>
            <p className="col-span-9">2022-12-15 ~ 2022-12-31  <br/> <Link href={"https://key-persons.jp/ "} target="_blank" className="text-[#FF9F29] hover:text-amber-600">https://key-persons.jp/</Link></p>
          </div>
          <div className="row-span-1 lg:col-span-4 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <div className="grid grid-row-6 grid-cols-9 gap-5 text-sm font-mono">
              <div className="col-span-2">
                <p>Languages</p>
                <ul className="list-disc list-start">
                  <li>PHP</li>
                  <li>Javascript</li>
                  <li>Postgre</li>
                </ul>
              </div>
              <div className="col-span-2">
                <p>Frameworks</p>
                <ul className="list-disc list-start">
                  <li>Laravel</li>
                  <li>Filament</li>
                  <li>NextJs</li>
                </ul>
              </div>
              <div className="col-span-2">
                <p>Systems</p>
                <ul className="list-disc list-start">
                  <li>Stripe</li>
                  <li>AWS</li>
                  <li>DOCKER</li>
                </ul>
              </div>
              <div className="col-start-1 col-span-9">
                <p>Descriptions</p>
                <ul className="list-disc list-start">
                  <li>Developed a responsive interface with  React  , enhancing  user engagement by 35%.</li>
                  <li>Optimized data handling for 1M+ records with  PostgreSQL  ,  improving query speed by 50%.</li>
                  <li>Deployed on  AWS  , ensuring 99.9% uptime and reliable  scalability for 100K+ users. </li>
                  <li> Integrated  Stripe  for secure payment processing, supporting  10K+ monthly transactions. </li>
                  <li> Implemented a rewards system, enabling users to earn and redeem points, boosting retention by 25%.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row-span-1 lg:col-span-2 col-span-6 lg:hidden block bg-black text-white p-5 rounded-xl">
            <h1 className="col-span-6 font-mono text-2xl">Event Management Application</h1>
            <p className="col-span-9">2022-12-15 ~ 2022-12-31  <br/> <Link href={"https://key-persons.jp/ "} target="_blank" className="text-[#FF9F29] hover:text-amber-600">https://key-persons.jp/</Link></p>
          </div>
          <div className="row-span-2 lg:col-span-2 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <div className="grid grid-row-6 grid-cols-6 gap-5 text-sm font-mono">
              <div className="col-span-2">
                <p>Languages</p>
                <ul className="list-disc list-start">
                  <li>PHP</li>
                  <li>TypeScript</li>
                  <li>Postgre</li>
                </ul>
              </div>
              <div className="col-span-2">
                <p>Frameworks</p>
                <ul className="list-disc list-start">
                  <li>Cake</li>
                  <li>React</li>
                  <li>MUI</li>
                </ul>
              </div>
              <div className="col-span-3">
                <p>Systems</p>
                <ul className="list-disc list-start">
                  <li>AWS Lambda</li>
                </ul>
              </div>
              <div className="col-start-1 col-span-9">
                <p>Descriptions</p>
                <ul className="list-disc list-start">
                  <li> Developed an event management platform using React and TypeScript, improving development efficiency by 30% and streamlining event creation and participation.</li>
                  <li> Implemented AWS Lambda for serverless back-end functions, reducing infrastructure costs by 25% while ensuring scalability during peak usage. </li>
                  <li> Integrated a real-time chat feature, boosting user engagement by 40% and enhancing communication between organizers and participants. </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row-span-1 lg:col-span-4 col-span-6 bg-black text-white p-5 rounded-xl">
            <h1 className="col-span-6 font-mono text-2xl">School Management System</h1>
            <p className="col-span-9">2023-12-01 ~ 2024-10-31  <br/> <Link href={"http://pkt-educenter.com/"} target="_blank" className="text-[#FF9F29] hover:text-amber-600">http://pkt-educenter.com/</Link></p>
          </div>
          <div className="row-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <div className="grid grid-row-6 grid-cols-6 gap-5 text-sm font-mono">
              <div className="col-span-2">
                <p>Languages</p>
                <ul className="list-disc list-start">
                  <li>PHP</li>
                  <li>TypeScript</li>
                  <li>Mysql</li>
                </ul>
              </div>
              <div className="col-span-2">
                <p>Frameworks</p>
                <ul className="list-disc list-start">
                  <li>Laravel</li>
                  <li>NextJs</li>
                  <li>Tailwind</li>
                </ul>
              </div>
              <div className="col-start-1 col-span-9">
                <p>Descriptions</p>
                <ul className="list-disc list-start">
                  <li> Developed a comprehensive School Management System that streamlines administrative tasks and enhances communication</li>
                  <li> Utilized React for the front end to create a user-friendly interface for students, teachers, and administrators.</li>
                  <li> Employed Laravel for the back-end to ensure robust and scalable application architecture. </li>
                  <li> Implemented PostgreSQL for efficient data management and storage.</li>
                  <li> Deploy the project on the Ubuntu Server with CD on Git.</li>
                  <li> Designed features for student registration, attendance tracking, grade management, and communication between teachers, students, and parents.</li>
                  <li> Focused on ensuring the system is user-friendly, secure, and scalable to handle a large number of users and transactions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-8 text-black row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-bold text-xs tracking-widest">© 2025 naingaunglinn. All rights reserved.</p>
      </footer>
    </div>
  );
}
