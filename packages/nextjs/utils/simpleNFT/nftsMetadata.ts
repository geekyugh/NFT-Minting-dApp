const nftsMetadata = [
  {
    description: "Beep-boop",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/01.jpg",
    name: "Circuit",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "light",
      },
      {
        trait_type: "Eyes",
        value: "blue",
      },
    ],
  },
  {
    description: "Whirr-click",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/02.jpg",
    name: "Nova",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "dark",
      },
      {
        trait_type: "Eyes",
        value: "black",
      },
    ],
  },
  {
    description: "Buzz-hum",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/03.jpg",
    name: "Spark",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "light",
      },
      {
        trait_type: "Eyes",
        value: "yellow",
      },
    ],
  },
  {
    description: "Zap-zing",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/04.jpg",
    name: "Quantum",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "dark",
      },
      {
        trait_type: "Eyes",
        value: "purple",
      },
    ],
  },
  {
    description: "Clank-clank",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/05.jpg",
    name: "Electra",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "light",
      },
      {
        trait_type: "Eyes",
        value: "pink",
      },
    ],
  },
  {
    description: "Whizz-buzz",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/06.jpg",
    name: "Titan",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "light",
      },
      {
        trait_type: "Eyes",
        value: "pink",
      },
    ],
  },
  {
    description: "Bleep-bloop",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/07.jpg",
    name: "Pulse",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "pink",
      },
      {
        trait_type: "Eyes",
        value: "pink",
      },
    ],
  },
  {
    description: "Ratchet-clack",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/08.jpg",
    name: "Byte",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "light",
      },
      {
        trait_type: "Eyes",
        value: "black",
      },
    ],
  },
  {
    description: "Whirr-chirp",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/09.jpg",
    name: "Zenith",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "blue",
      },
      {
        trait_type: "Eyes",
        value: "red",
      },
    ],
  },
  {
    description: "Zap-zap",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/10.jpg",
    name: "Aurora",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "dark",
      },
      {
        trait_type: "Eyes",
        value: "blue",
      },
    ],
  },
  {
    description: "Ping-pong",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/11.jpg",
    name: "Echo",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "light",
      },
      {
        trait_type: "Eyes",
        value: "orange",
      },
    ],
  },
  {
    description: "Ding-dong",
    image:
      "https://blue-significant-falcon-772.mypinata.cloud/ipfs/QmaHEp2a4KHF3Cm6LTcReM8WF9uuUGFnNUmUUsfuD38JuN/12.jpg",
    name: "Nexus",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "blue",
      },
      {
        trait_type: "Eyes",
        value: "pink",
      },
    ],
  },
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
