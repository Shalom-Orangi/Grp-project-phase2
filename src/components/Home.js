import Fragrance from "./Fragrance";
import Popular from "./Popular";
import SkinCare from "./SkinCare";
import ParticlesBg from "particles-bg";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <ParticlesBg num={100} type="cobweb" bg color="#0ab4e7" />
      <Popular />
      <SkinCare />
      <Fragrance />
    </div>
  );
};

export default Home;
