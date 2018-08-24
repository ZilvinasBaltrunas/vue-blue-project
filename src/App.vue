<template>
  <main>
    <AppHeader/>
    <AppBox>
      <!-- <router-view></router-view> -->
    </AppBox>
  </main>
</template>

<script>
import AppHeader from './components/header'
import AppBox from './components/Box'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppBox
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Open Sans', sans-serif;
  background: #f2f2f2;
}

</style>
