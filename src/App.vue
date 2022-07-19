<template>
  <ConnectWallet />
</template>

<script>
import ConnectWallet from "./components/ConnectWallet.vue";
import connect from "./composables/index";
import { onMounted } from "vue";
export default {
  name: "App",
  components: {
    ConnectWallet,
  },
  setup: () => {
    onMounted(async () => {
      const { ethereum } = window;
      const { state } = connect();
      console.log(state.status);
      ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length < 1) {
          console.log("disconnected");
          state.status = false;
          state.address = "";
          localStorage.removeItem("userState");
        }
      });
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>