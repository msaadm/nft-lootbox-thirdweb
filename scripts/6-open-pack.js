import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0xfd0fE383B4d5805fEC7f9d5AB1fc103F5F8bD19E";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
