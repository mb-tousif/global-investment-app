"use client";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const keyPhrases = ["Confidence,", "AnyTime,", "AnyWhere,"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % keyPhrases.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [keyPhrases.length]);
  return (
    <div className="">
      <section className="relative bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1642053606681-bead175ff069?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA0fHxiYW5raW5nfGVufDB8fDB8fHww')`,
            }}
          >
            <span className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 pb-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-gray-50 font-semibold text-3xl lg:text-6xl sm:text-4xl md:text-5xl">
                    Welcome to IBBL
                  </h1>
                  <p className="mt-4 pt-6 text-xl font-medium text-gray-50">
                    Invest with
                    <button className="w-28">
                      <span className="animate-rotation text-[#03A776]">
                        {keyPhrases.map((phrase, index) => (
                          <span
                            key={index}
                            className={
                              index === currentPhraseIndex
                                ? "visible"
                                : "hidden"
                            }
                          >
                            {phrase}
                          </span>
                        ))}
                      </span>
                    </button>
                    Thrive with IBBL.
                    <br />
                    Pioneering Progress in Bangladesh&apos;s Financial Horizon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="lg:pt-12 pt-6 w-full px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section
        className="flex-col w-full h-[500px] bg-cover bg-black bg-fixed bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507806456245-8821cbb8bbe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxiYW5raW5nfGVufDB8fDB8fHww')`,
        }}
      >
        <span className="w-full h-[500px] absolute opacity-50 bg-black"></span>
        <div className="container z-50 p-2 sm:p-4 md:p-8">
          <h1 className="text-[#03A776] text-2xl sm:text-3xl md:text-5xl text-center font-semibold mt-20 mb-10">
            Investment Bank Of Bangladesh Ltd
          </h1>
          <p className="text-gray-50 first-letter:text-[#03A776, 2xl,font-semiBold] text-base md:text-xl font-semibold text-center">
            Pioneering Progress in Bangladesh&apos;s Financial Horizon. IBBL
            stands to give the most innovative and affordable banking products
            to Bangladesh. Amongst banks, IBBL is the largest donor in to social
            causes in Bangladesh.It stands as one of the largest private donors
            involved in improving the country. IBBL is proud to be associated
            with helping Bangladesh as well as being a leader in the
            country&apos;s banking sector.
          </p>
        </div>
      </section>
    </div>
  );
}
