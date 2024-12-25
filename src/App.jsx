import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Front from "./components/Front";
import Goals from "./components/Goals";
import Roadmaps from "./components/Roadmap";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Front />
        <Goals />
        <Roadmaps />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
