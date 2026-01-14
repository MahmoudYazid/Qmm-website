import Image from "next/image";
import BarComponent from "./Bar/BarComponent"; 
export default function Home() {
  return (
   <main className="w-full min-h-screen">
      <div className="grid grid-rows-[3fr_6fr_6fr_6fr_6fr_6fr_6fr_6fr] min-h-screen">
        <BarComponent />
        <section className="bg-orange-500 flex items-center justify-center p-4">
          <h2 className="text-white text-xl md:text-3xl">Part 2</h2>
        </section>

        <section className="bg-yellow-400 flex items-center justify-center p-4">
          <h2 className="text-black text-xl md:text-3xl">Part 3</h2>
        </section>

        <section className="bg-green-500 flex items-center justify-center p-4">
          <h2 className="text-white text-xl md:text-3xl">Part 4</h2>
        </section>

        <section className="bg-teal-500 flex items-center justify-center p-4">
          <h2 className="text-white text-xl md:text-3xl">Part 5</h2>
        </section>

        <section className="bg-blue-500 flex items-center justify-center p-4">
          <h2 className="text-white text-xl md:text-3xl">Part 6</h2>
        </section>

        <section className="bg-indigo-600 flex items-center justify-center p-4">
          <h2 className="text-white text-xl md:text-3xl">Part 7</h2>
        </section>

        <section className="bg-purple-600 flex items-center justify-center p-4">
          <h2 className="text-white text-xl md:text-3xl">Part 8</h2>
        </section>
      </div>
    </main>
  );
}
