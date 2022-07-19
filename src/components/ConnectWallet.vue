<template>
  <div class="hello">
    <h3>Welcome To Our Dapp</h3>
    <ul>
      <li>
        <a target="_blank" rel="noopener" @click="connectMetamaskWallet"
          >Connect Wallet</a
        >
      </li>
    </ul>
    <h2 v-if="state.status">Our Address: {{ state.address }}</h2>
    <h2 v-else>Not connected</h2>
  </div>
</template>

<script>
import connect from '../composables/index';

export default {
  name: 'ConnectWallet',
  setup: () => {
    const { connectMetamask, state } = connect();
    console.log(state)
    const connectMetamaskWallet = async () => {
      await connectMetamask();
    };

    return {
      connectMetamaskWallet,
      state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
