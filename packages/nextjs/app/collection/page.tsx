"use client";

import type { NextPage } from "next";
import { MyHoldings } from "~~/components/simpleNFT";

const MyNFTs: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">My Robotz</span>
          </h1>
        </div>
      </div>
      <MyHoldings />
    </>
  );
};

export default MyNFTs;
