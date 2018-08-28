<template>
    <div class="main">
        <div class="projects"><p>Projektai</p></div>
        <div class="cards">
            <AppCard v-for="project in projects" :project="project"/>
            
        </div>
    </div>
</template>

<script>
import AppCard from '../components/main/AppCard'

export default {
  name: 'home',
  components: {
    AppCard
  },
  data () {
    return {
        projects: [
            {
                id: 1,
                link: 'https://ak9.picdn.net/shutterstock/videos/1337989/thumb/1.jpg',
                title: '1 projektas'
            },
            {
                id: 2,
                link: 'https://countrysidenetwork.com/wp-content/uploads/iStock_000084887435_Small-e1482880740405.jpg',
                title: '2 projektas'
            },
            {
                id: 3,
                link: 'https://wallpaperbrowse.com/media/images/5ae58f5036997cfd4636917403c3c951.jpg',
                title: '3 projektas'
            }
        ]
    }
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
