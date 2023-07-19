import { Magic } from "magic-sdk";
import { useState } from "react";
import Web3 from "web3";
const ConnectButton = ({ loading }) => {
  const [data, setData] = useState();

  // const customNodeOptions = {
  //   rpcUrl: "https://polygon-rpc.com/",
  //   chainId: 137,
  // };
  // const magic = new Magic("pk_live_9809F2966F69D148", {
  //   network: customNodeOptions,
  // });
  // let Getaccount;
  const accounts = async () => {
    // loading(true);
    // const magicProvider = await magic.wallet.getProvider();
    // const web3 = new Web3(magicProvider);
    // const Getaccount = await magic.wallet.connectWithUI();
    // console.log(Getaccount);
    // setData(Getaccount[0]);
    // loading(false);
  };
  console.log(data);
  return (
    <button
      className="lg:gradient bg-grad2 px-6 py-5 rounded-xl "
      onClick={accounts}
    >
      {!data || undefined ? "Connect Wallet" : "Connected"}
    </button>
  );
};
export default ConnectButton;
