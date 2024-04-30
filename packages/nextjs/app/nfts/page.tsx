"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MintNFT } from "~~/components/simpleNFT/MintNFT";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { addToIPFS } from "~~/utils/simpleNFT/ipfs-fetch";
import nftsMetadata from "~~/utils/simpleNFT/nftsMetadata";

const MyNFTs: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const { writeAsync: mintItem } = useScaffoldContractWrite({
    contractName: "Robotz",
    functionName: "mintItem",
    args: [connectedAddress, ""],
  });

  const { data: tokenIdCounter } = useScaffoldContractRead({
    contractName: "Robotz",
    functionName: "tokenIdCounter",
    watch: true,
    cacheOnBlock: true,
  });

  const handleMintItem = async (tokenIndex: number) => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return;
    window.scrollTo(0, 0);
    // const tokenIdCounterNumber = Number(tokenIdCounter);
    const currentTokenMetaData = nftsMetadata[tokenIndex];
    const notificationId = notification.loading("Uploading to IPFS");
    try {
      const uploadedItem = await addToIPFS(currentTokenMetaData);

      // First remove previous loading notification and then show success notification
      notification.remove(notificationId);
      notification.success("Metadata uploaded to IPFS");

      await mintItem({
        args: [connectedAddress, uploadedItem.path],
      });
    } catch (error) {
      notification.remove(notificationId);
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Mint Rototz</span>
          </h1>
        </div>
      </div>
      <MintNFT handleMintItem={handleMintItem} />
    </>
  );
};

export default MyNFTs;
