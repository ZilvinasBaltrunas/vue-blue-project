<template>
    <div class="main">
        <div class="projects"><p>Projektai</p></div>
        <div class="cards">
            <AppCard :link="link" :title="title" v-for="project in projects"/>
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
  },
  props: {
    projects: Array
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
                link: 'https://wallpaperbrowse.com/images/page/3#images/3848765-wallpaper-images-download.jpg',
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
