<template>
  <div id="app">
    <header>
      <span>{{ title }}</span>
      
      <div class="a"><v-btn absolute>倉本寿彦</v-btn></div>
      <div class="b"><v-btn active-class>倉本寿彦</v-btn></div>
      <div class="c"><v-btn append>倉本寿彦</v-btn></div>
      <div class="c"><v-btn block>倉本寿彦</v-btn></div>
      <v-btn fab dark large color="blue">
        <v-icon dark>android</v-icon>
      </v-btn>

      <v-flex xs12 sm3>
        <v-btn flat icon color="pink">
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-flex>

      <v-btn outline color="indigo">Outline Button</v-btn>

      <div>
        <v-btn color="red" dark large>Large Button</v-btn>
      </div>

      <v-flex xs12 sm3>
        <v-btn flat icon color="indigo">
          <v-icon>star</v-icon>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm3>
        <v-btn flat icon color="indigo">
          <v-icon>star</v-icon>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm3>
        <v-btn flat icon color="indigo">
          <v-icon>star</v-icon>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm3>
        <v-btn flat icon color="indigo">
          <v-icon>star</v-icon>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm3>
        <v-btn flat icon color="indigo">
          <v-icon>star</v-icon>
        </v-btn>
      </v-flex>
      
      
    </header>
    <main>
      <Wallet/>
    </main>

    <v-card
      class="pa-3"
      flat
      height="300px"
      img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
    >
      <v-toolbar
        dense
        floating
      >
        <v-text-field
          hide-details
          prepend-icon="search"
          single-line
        ></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>


   <v-container fluid grid-list-md>
    <v-layout row wrap> 
      <v-flex xs6>
        <v-textarea
          box
          name="input-7-4"
          label="なんか書いてみてね"
          value="書いても保存できないよ"
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
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
  padding: 0px 16px 0 24px;
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
  float: left;
}

.a{
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding: 10px 16px 0 24px;
  float: left;
}

.b{
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding: 4px 0px 50px 80px;
  float: left;
}

.c{
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding: 4px 0px 0px 0px;
  float: left;
}


</style>
