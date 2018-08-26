<template>
    <div class="main">
        <div class="projects"><p>Projektai</p></div>
        <div class="cards">
            <AppCard/>
            <AppCard/>
            <AppCard/>
        </div>
    </div>
</template>

<script>
import AppCard from '../components/main/AppCard'

export default {
  name: 'home',
  components: {
    AppCard
  }
}
</script>

<style lang="scss" scoped>
    .projects {
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        p {
            margin-left: 2rem;
        }
    }
    .cards {
        display: flex;
        justify-content: space-around;
    }
</style>
