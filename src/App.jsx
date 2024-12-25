import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Front from "./components/Front";
import Goals from "./components/Goals";
import Roadmaps from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Front />
        <Goals />
        <Roadmaps />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
