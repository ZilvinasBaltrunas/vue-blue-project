<template>
    <div class="nav">
        <router-link :to="{name: 'Home'}">
            NAMAI
        </router-link>
        <router-link :to="{name: 'About'}">
            APIE MANE
        </router-link>
        <router-link :to="{name: 'Contacts'}">
            KONTAKTAI
        </router-link>
    </div>
</template>

<style lang="scss">
.nav {
    margin-top: 1rem;
    a {
        margin-right: 1rem;
    }
    // .router-link-active {
    //     text-decoration: underline;
    //     color: #37E9B8;
    // }
}
</style>