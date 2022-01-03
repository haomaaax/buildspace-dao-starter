import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x808B40101bff6eA6A1F4B017a96fABD324F5d3E9",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Nerd King Ape",
        description: "This NFT will give you access to WinToFullDAO!",
        image: readFileSync("scripts/assets/ape.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()