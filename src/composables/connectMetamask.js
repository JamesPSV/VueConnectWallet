import { ethers } from "ethers";
import connect from "./index";


const connectMetamask = async () => {
  console.log("mnetamask");
  const { state } = connect();
  if (state.address == "") {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      console.log("signer", signer);
        state.status = true;
        state.address = accounts[0];
      console.log("state", state.status);
    } catch (error) {
      console.log(error);
    }
  }
};

export default connectMetamask;