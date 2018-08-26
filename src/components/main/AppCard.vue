<template>
    <div class="card">
        <div class="card-box">
            <img class="card-box-img" src="https://ak9.picdn.net/shutterstock/videos/1337989/thumb/1.jpg">
        </div>
        <p class="name">Projektas</p>
    </div>
</template>

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
