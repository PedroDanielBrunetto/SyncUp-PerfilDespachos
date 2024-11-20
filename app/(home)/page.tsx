import Header from "../components/Header";
import Inicio from "./components/Inicio/Inicio";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="#inicio">
        <Inicio />
      </section>
    </main>
  );
}
