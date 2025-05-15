import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Qualites from "../components/Qualites";
import Reservation from "../components/Reservation";
import Team from "../components/Team";
import WhoAreWe from "../components/WhoAreWe";

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualites/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
  );
}

export default Home;
