import ScrambleText from "@/components/ScrambleText";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-white text-black min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-orbitron-sans)]">
      <main className="flex flex-col gap-8 items-start sm:items-start">
      <div>
        <h1 className="text-4xl font-bold"><ScrambleText content="Naing Aung Linn"/></h1>   
        <p className="bottom-0 left-[7px]"><ScrambleText content="Developer Out Of The Box"/></p>  
        </div>
        <p className="font-mono">A Senior Developer with over six years of experience in full-stack web development. I specialize in PHP, JavaScript, Laravel, and React, with a strong focus on creating efficient and scalable web applications. I am passionate about learning new technologies and continuously improving my skills to deliver high-quality solutions....</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-bold text-xs tracking-widest">© 2025 naingaunglinn. All rights reserved.</p>
      </footer>
    </div>
  );
}
