import Header from "./componetns/Header";
import HealthSystem from "./componetns/HealthSystem";
import Organizations from "./componetns/Organizations";
import Section1 from "./componetns/Section1";
import Solution from "./componetns/Solution";
import Competence from "./componetns/Competence";
import TeamHelp from "./componetns/TeamHelp";
import DemoVersion from "./componetns/DemoVersion";
import Footer from "./componetns/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Organizations />
      <HealthSystem />
      <Solution />
      <Competence />
      <TeamHelp/>
      <DemoVersion/>
      <Footer/>
    </div>
  );
}

export default App;
