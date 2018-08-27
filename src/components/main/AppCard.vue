<template>
    <div class="card">
        <div class="card-box">
            <img class="card-box-img" :src="projects.link">
        </div>
        <p class="name">{{projects.title}}</p>
    </div>
</template>

<script>
    import projects from '../../pages/home'
    export default {
        data () {
            return {
                projects
            }
        }
    }
</script>

<style lang="scss" scoped>
.card {
    width: 25%;
    height: 250px;
    background: #4169E1;
    .card-box{
        width: 100%;
        max-height: 80%;
        display: flex;
        justify-content: center;
        .card-box-img {
            width: 90%;
            margin-top: 10px;
        }
    }
    .name {
        color: #fff;
        margin-top: 10px;
        margin-left: 10px;
    }
}
</style>
