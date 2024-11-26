
import Content from "./Content";
import NavBar from "./NavBar";
import VertialScroll from "./VertialScroll";
import CardBox from "./CardBox";
import SquareBox from "./SquareBox";
import Banner from "./Banner";
import AboutCard from "./AboutCard";


function App() {
  return (
    <div className="App" >
      <NavBar />
      <Content />
      <VertialScroll />
      <Banner />
      <SquareBox/>
      <CardBox />
      <AboutCard />
    </div>
  );
}

export default App;
