<template>
    <div class="header">
        <div class="container">
            <HeaderNavigation class="header__navi"/>
            <div class="header__name">
                <h1>Vardas Pavarde</h1>
                <h4>Portfolio</h4>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNavigation from './HeaderNavigation'

    export default {
        name: 'index',
        components: {
            HeaderNavigation
        },
        // data () {
        //     return {
        //         navi: [
        //             {
        //                 target: '/',
        //                 routeName: 'Home'
        //             },
        //             {
        //                 target: '/about',
        //                 routeName: 'About'
        //             },
        //             {
        //                 target: '/contacts',
        //                 routeName: 'Contacts'
        //             }
        //         ]
        //     }
        // }
    }
</script>

<style lang="scss">

.header {
  background: #4169E1;
  height: 40vh;
  color: #fff;
  .container {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .header__navi {
      position: absolute;
      top: 0;
      right: 0;
    }
    .header__name {
      text-align: center;
      text-transform: uppercase;
      h1 {
        margin-bottom: 1rem;
      }
    }  
  }
}

</style>
