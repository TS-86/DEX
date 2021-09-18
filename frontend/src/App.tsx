
import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./components/Swap";
import { Swap2 } from "./components/Swap2";
import { Swap3 } from "./components/Swap3";
import { Swap4 } from "./components/Swap4";
import { Swap5 } from "./components/Swap5";
import { Swap6 } from "./components/Swap6";

function App() {
  return (
    <div className="App">
        <Symfoni autoInit={true}>
          <div className="min-h-screen bg-custom-3">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
              <div className="mx-auto flex items-center justify-center">
              <img src="https://gateway.pinata.cloud/ipfs/QmXLBHd1jLcP7fhdWCFUFefTtpaDWsQoqsayvKruUr1ULJ" 
                width="300px" className="mx-auto p-4" alt=""/>
                <div className="text-black text-8xl pt-28 pb-10">
                BASil SwaP
                </div>
                <img src="https://gateway.pinata.cloud/ipfs/QmXLBHd1jLcP7fhdWCFUFefTtpaDWsQoqsayvKruUr1ULJ" 
                width="300px" className="mx-auto p-4" alt=""/>
              </div>
                <div className="text-black text-2xl pt-0 pb-10">
                A project done for BAS and SP
                </div>

              <div className="text-black text-4xl pt-10 pb-5">
              BAS / CAKE
              </div>
              <Swap 
                tokenA="0x6215682EadF1971D66695b7211a1Ef6Bffd62560" 
                tokenB="0xe40811C538a5e5FF60e614Ce903Fe86869Eb306a"
              ></Swap>
              <Swap2 
                tokenA="0xe40811C538a5e5FF60e614Ce903Fe86869Eb306a" 
                tokenB="0x6215682EadF1971D66695b7211a1Ef6Bffd62560"
              ></Swap2>

              <div className="text-black text-4xl pt-20 pb-5">
              BAS / SUSHI
              </div>
              <Swap3 
                tokenA="0x6215682EadF1971D66695b7211a1Ef6Bffd62560" 
                tokenB="0x7bBEE99cFd797791CFF5eDCC0f23CA58D107AA24"
              ></Swap3>
              <Swap4 
                tokenA="0x7bBEE99cFd797791CFF5eDCC0f23CA58D107AA24" 
                tokenB="0x6215682EadF1971D66695b7211a1Ef6Bffd62560"
              ></Swap4>

              <div className="text-black text-4xl pt-20 pb-5">
              CAKE / SUSHI
              </div>
              <Swap5 
                tokenA="0xe40811C538a5e5FF60e614Ce903Fe86869Eb306a" 
                tokenB="0x7bBEE99cFd797791CFF5eDCC0f23CA58D107AA24"
              ></Swap5>
              <Swap6 
                tokenA="0x7bBEE99cFd797791CFF5eDCC0f23CA58D107AA24" 
                tokenB="0xe40811C538a5e5FF60e614Ce903Fe86869Eb306a"
              ></Swap6>

              <div className="text-black text-4xl pt-10 pb-10"></div>
            </div>
          </div>
        </Symfoni>
    </div>
  );
}

export default App;


