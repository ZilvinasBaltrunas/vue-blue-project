<template>
  <main>
    <AppHeader/>
      <AppBox>
        <!-- <router-view></router-view> -->
      </AppBox>
    <AppFooter/>
  </main>
</template>

<script>
import AppHeader from './components/header'
import AppBox from './components/main/Box'
import AppFooter from './components/footer'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppBox,
    AppFooter
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
