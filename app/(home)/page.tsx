import Header from "../components/Header";
import Inicio from "./components/Inicio/Inicio";
import Servicos from "./components/servicos/Servicos";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="#inicio">
        <Inicio />
      </section>
      <section id="#services">
        <Servicos />
      </section>
    </main>
  );
}
