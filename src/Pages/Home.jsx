import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import CoinTable from "../Components/CoinTable/CoinTable";

function Home() {
  console.log("Home component rendered"); // Debug mounting
  return (
    <>
      
      <Banner/>
      <CoinTable />
      
    </>
  );
}

export default Home;