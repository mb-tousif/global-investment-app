import React from "react";

export default function Home() {
  return (
    <section>
      <div className="background-image">
        <div className="container mx-auto">
          <div className="bn-text-style lg:w-[600px] lg:ml-[73px]">
            <h1 className="text-4xl font-semibold text-white mb-8 ">Crypto Trade Ltd</h1>
            <p className="text-white">One of the Best trading platform by investing your money with possible return.</p>
            <div className="btnContainer mt-10  w-[150px] text-center py-3 text-white bg-[#03A776] ">
              <button> Read Bank</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}