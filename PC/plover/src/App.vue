<template>
  <div id="app">
 
      <my-hearder></my-hearder>
      <router-view />
     <my-footer></my-footer>
  </div>
</template>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a{
  text-decoration: none;
}
html,body{

  box-sizing: border-box;
}





.clearfix {
  zoom: 1;
}

.clearfix:after {
  content: "";

  display: block;

  height: 0;

  line-height: 0;

  clear: both;

  visibility: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
