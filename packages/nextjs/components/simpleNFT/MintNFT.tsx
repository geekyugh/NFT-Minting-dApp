import nftsMetadata from "~~/utils/simpleNFT/nftsMetadata";

interface NFTProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleMintItem: Function;
}

export const MintNFT = ({ handleMintItem }: NFTProps) => {
  return (
    <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
      {nftsMetadata.map((nft, index) => {
        return (
          <div key={nft.name} className="card card-compact bg-base-100 shadow-lg shadow-secondary m-3">
            <figure className="relative">
              {/* eslint-disable-next-line  */}
              <img src={nft.image} alt="NFT Image" className="h-60 w-60 rounded-xl" />
            </figure>
            <div className="card-body space-y-3">
              <div className="flex items-center justify-center">
                <p className="text-xl p-0 m-0 font-semibold">{nft.name}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary btn-md px-8 tracking-wide" onClick={() => handleMintItem(index)}>
                  Mint
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
