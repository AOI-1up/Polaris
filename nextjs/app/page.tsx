import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { Main } from "@/components/Main";
import { Aside } from "@/components/Aside";

export const metadata = { title: "Polaris" };

const Home = () => {
  return (
    <div className="flex h-screen flex-col text-blue-gray-900">
      <header className="h-[50px]">
        <Header />
      </header>

      <div className="flex flex-grow">
        <nav
          className="w-[230px] min-w-[230px]"
          style={{ height: "calc(100vh - 50px)" }}
        >
          <Nav />
        </nav>

        <main className="flex-grow">
          <Main />
        </main>

        <aside
          className="w-[230px] min-w-[230px]"
          style={{ height: "calc(100vh - 50px)" }}
        >
          <Aside />
        </aside>
      </div>
    </div>
  );
};

export default Home;
