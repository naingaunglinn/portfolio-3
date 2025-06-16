
import Counter from "@/components/Counter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-black min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-orbitron-sans)]">
      <main className="flex flex-col gap-8 items-start sm:items-start">
        <div className="grid grid-cols-6 grid-row-6 gap-5">
          <div className="row-span-2 row-end-3 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <h1 className="lg:text-8xl text-6xl lg:mb-3 font-[900]">Naing Aung Linn</h1>   
            <p className="text-xl">Senior Web Developer @ <Link href={'https://www.brycenmyanmar.com.mm/'} className="text-green-500 hover:text-green-700" target="_blank">Brycen Myanmar</Link></p>
            <p className="text-3xl">Developer Out Of The Box</p> 
          </div> 
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black/75 backdrop-blur-sm text-white p-5 rounded-xl ">
            <p className="text-lg text-justify indent-8">A Senior Developer with over seven years of experience in full-stack web development. I specialize in PHP, JavaScript, Laravel, and React with a strong focus on creating efficient and scalable web applications. I'm passionate about learning new technologies and continuously improving my skills to deliver high-quality solutions. My passion lies in writing maintainable code, collaborating with cross-functional teams, and delivering high-quality solutions that align with business goals and user needs.</p>
          </div>
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black text-white p-5 rounded-xl">
            <h1 className="text-4xl font-[900]">Projects <Counter to={5} duration={1} /></h1>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-bold text-xs tracking-widest">© 2025 naingaunglinn. All rights reserved.</p>
      </footer>
    </div>
  );
}
