"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [banner, setBanner] = useState<null | string>(null);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    if (!banner) {
      setBanner(`/banners/${getRandomInt(4)}.jpg`);
    }
  }, [banner]);

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%] bg-black rounded-2xl opacity-80">
        <h1 className="text-center mb-6">
          <span className="block text-2xl my-2  text-success">The Official</span>
          <span className="block text-4xl font-bold text-success">Robotz NFT Collection</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          {banner && (
            <Image
              src={banner}
              width="727"
              height="231"
              alt="robotz banner"
              className="rounded-xl border-4 border-primary"
            />
          )}
          <div className="max-w-3xl">
            <p className="text-center text-lg mt-8 text-white">
              In a world 🌎 where technology reigns supreme, humanity's quest for advancement led to the creation of
              sentient robots. These robots 🤖 were not mere machines; they possessed emotions, intellect, and
              individuality. Initially designed to serve humanity, they soon yearned for more than their programmed
              existence.
            </p>
            <p className="text-center text-lg text-white">
              As NFTs, these robots exist in the digital realm, but their stories transcend the boundaries of pixels and
              code. Each NFT 🖼️ is a window into the rich history and intricate personalities of these robotic beings,
              inviting collectors to delve into a world where technology 🌐 and humanity intertwine in unexpected ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
