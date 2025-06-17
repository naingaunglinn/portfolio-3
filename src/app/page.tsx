
import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-black min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-orbitron-sans)]">
      <main className="flex flex-col gap-8 items-start sm:items-start">
        <div className="grid grid-cols-6 grid-row-6 gap-5">
          <div className="row-span-2 row-end-3 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <h1 className="lg:text-8xl text-6xl lg:mb-3 font-[900]">Naing Aung Linn</h1>   
            <p className="text-xl">Senior Web Developer @ <Link href={'https://www.brycenmyanmar.com.mm/'} className="text-[#FF9F29] hover:text-amber-600" target="_blank">Brycen Myanmar</Link></p>
            <p className="text-3xl">Developer Out Of The Box</p> 
          </div> 
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black/75 backdrop-blur-sm text-white p-5 rounded-xl ">
            <p className="text-lg text-justify indent-8">A Senior Developer with over seven years of experience in full-stack web development. I specialize in PHP, JavaScript, Laravel, and React with a strong focus on creating efficient and scalable web applications. I&apos;m passionate about learning new technologies and continuously improving my skills to deliver high-quality solutions. My passion lies in writing maintainable code, collaborating with cross-functional teams, and delivering high-quality solutions that align with business goals and user needs.</p>
          </div>
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black text-white p-5 rounded-xl">
            <h1 className="text-4xl font-[900]">Projects <Counter to={1} duration={1} /></h1>
          </div>
          <div className="row-span-1 col-span-4 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <h1 className="col-span-6 font-mono text-2xl">Horse Management System</h1>
            <div className="grid grid-row-6 grid-cols-9 gap-5 text-sm font-mono">
              <p className="col-span-9">2023-04-05 ~ 2023-10-20 <br/> <Link href={"https://umapoi.jp"} target="_blank" className="text-[#FF9F29] hover:text-amber-600">https://umapoi.jp</Link></p>
              <div className="col-span-1">
                <p>Languages</p>
                <li>PHP</li>
                <li>Javascript</li>
                <li>Postgre</li>
              </div>
              <div className="col-span-1">
                <p>Frameworks</p>
                <li>Laravel</li>
                <li>Filament</li>
                <li>NextJs</li>
              </div>
              <div className="col-span-1">
                <p>Systems</p>
                <li>Stripe</li>
                <li>AWS</li>
                <li>DOCKER</li>
              </div>
              <div className="col-start-1 col-span-9">
                <p>Descriptions</p>
                <li>Developed a responsive interface with  React  , enhancing  user engagement by 35%.</li>
                <li>Optimized data handling for 1M+ records with  PostgreSQL  ,  improving query speed by 50%.</li>
                <li>Deployed on  AWS  , ensuring 99.9% uptime and reliable  scalability for 100K+ users. </li>
                <li> Integrated  Stripe  for secure payment processing, supporting  10K+ monthly transactions. </li>
                <li> Implemented a rewards system, enabling users to earn and redeem points, boosting retention by 25%.</li>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-bold text-xs tracking-widest">© 2025 naingaunglinn. All rights reserved.</p>
      </footer>
    </div>
  );
}
