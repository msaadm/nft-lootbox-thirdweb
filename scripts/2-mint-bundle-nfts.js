import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = "0xa8988f2DFa91B46A80A89B46B534DE67D4418751";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT Batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Mercedes Benz",
        description: "A Bright Yellow Mercedes Benz",
        image: readFileSync("./assets/mercedes.jpg"),
        properties: {
          rarity: "a bit rate",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Chevrolet Camaro",
        description: "A Dark Blue Chevrolet Camaro",
        image: readFileSync("./assets/chevrolet.jpg"),
        properties: {
          rarity: "a bit rate",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Lamborghini Huracan",
        description: "A Bright Orange Lamborghini Huracan",
        image: readFileSync("./assets/lamborghini.jpg"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
    {
      metadata: {
        name: "Ferrari F8 Spider",
        description: "A Bright Red Ferrari F8 Spider",
        image: readFileSync("./assets/ferrari.jpg"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
