"use client";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { Main } from "@/components/Main";
import { Aside } from "@/components/Aside";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-[50px]">
        <Header />
      </header>

      <div className="flex flex-grow">
        <nav className="w-[230px]">
          <Nav />
        </nav>

        <main className="flex-grow">
          <Main />
        </main>

        <aside className="w-[230px]">
          <Aside />
        </aside>
      </div>
    </div>
  );
};

export default Home;
