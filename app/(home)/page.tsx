import Footer from "../components/Footer";
import Header from "../components/Header";
import Historia from "./components/historia/Historia";
import Inicio from "./components/Inicio/Inicio";
import Servicos from "./components/servicos/Servicos";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="inicio">
        <Inicio />
      </section>
      <section id="services">
        <Servicos />
      </section>
      <section id="story" className="p-0 m-0">
        <Historia />
      </section>
    </main>
  );
}
