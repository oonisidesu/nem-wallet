<template>
  <div id="app">
    <header>
      <span>{{ title }}</span>
    </header>
    <main>
      <Wallet/>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Wallet from './components/Wallet.vue'  // Walletをimportする.
 
// コンポーネントの設定
@Component({
  name: 'app',
  // Walletをcomponentとして定義する.
  components: {
    Wallet
  }
})

// クラス
export default class App extends Vue {
  
  // 変数 privateは書いても書かなくても良い
  private title = 'My NEM wallet'
  mounted () {}
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #e3f2ba;
  color: #1a2aa5;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
