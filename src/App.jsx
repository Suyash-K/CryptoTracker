// import CoinTable from "./Components/CoinTable/CoinTable";
// import Navbar from "./Components/Navbar/Navbar";
// import Banner from "./Components/Banner/Banner";
import { useState } from "react";
// import { CurrencyContext } from "./context/CurrencyContext";
import Home from "./Pages/Home";
import Routing from "./Components/Routing/Routing";

function App() {

    // const [currency,setCurrency] =useState('usd');

  return (
    <div>
        {/* <CurrencyContext.Provider value={ {currency,setCurrency} }> */}
        <Routing />
        {/* </CurrencyContext.Provider> */}
    </div>
  );
}

export default App;
