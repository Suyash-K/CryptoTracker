import { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "react-query";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from "../../state/store";
import  { useNavigate } from "react-router-dom";
import Pageloader from "..Components/Pageloader/Pageloader";
// import { LazyResult } from "postcss";

function CoinTable(){

    const {currency} = currencyStore();

    const navigate = useNavigate();

    // async function download() { 
    //     const response = await fetch("https://api.coingecko.com/api/v3/ping"); 
    //     console.log(response);
    //     const result = await response.json(); 
    //     console.log(result); }
    
    // useEffect(()=>{
    //         fetchCoinData(1, 'usd');
    // } ,[]);

    const [page, setPage] = useState(1);
    const {data, isError,isLoading,error}=useQuery(['coins',page,currency], ()=> fetchCoinData(page,currency),{
        // retry:2,
        // retryDelay:1000,
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2, 
    });

    const handleCoinRedirect = (id) => {
        navigate(`/details/${id}`);
    }
    
    if(isError){
        return <div>Error:{error.message()}
        </div>;
    }

    if(isLoading){
        return <Pageloader/>
    }

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                {/* Header of the table */}
                <div className="basis-[35%]">
                    Coin 
                </div>
                <div  className="basis-[25%]">
                    Price 
                </div>
                <div  className="basis-[20%]">
                    24h change 
                </div>
                <div  className="basis-[20%]">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div>Loading...</div>}
                {data && data.map((coin) => {
                    return (
                        <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">

                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full"  loading="lazy"/>
                                </div>

                                <div className="flex flex-col"> 
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>


                            </div>

                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>
                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 justify-center items-center">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page-1)} 
                    className="btn btn-primary btn-wide text-white text-2xl"
                >
                    Prev
                </button>
                <button 
                    onClick={() => setPage(page+1)} 
                    className="btn btn-secondary btn-wide text-white text-2xl"
                >
                    Next
                </button>
            </div>
        </div>
    )
};
export default CoinTable;
