<template>
    <div class="container">
        <section class="first__section">
            <h3 class="name">Apie Mane</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et temporibus nam veritatis ad ex expedita vel modi eum necessitatibus. 
                Quisquam repudiandae, quasi beatae officia unde! 
                Architecto animi aliquid quod facilis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et temporibus nam veritatis ad ex expedita vel modi eum necessitatibus. 
                Quisquam repudiandae, quasi beatae officia unde! 
                Architecto animi aliquid quod facilis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et temporibus nam veritatis ad ex expedita vel modi eum necessitatibus. 
                Quisquam repudiandae, quasi beatae officia unde! 
                Architecto animi aliquid quod facilis.
            </p>
        </section>
        <section class="second__section">
            <div class="nav">
                <router-link :to="{name: 'Education'}">
                    ISSILAVINIMAS
                </router-link>
                <router-link :to="{name: 'Career'}">
                    KARJERA
                </router-link>
                <router-link :to="{name: 'Knowledge'}">
                    ZINIOS
                </router-link>
            </div>
            <div class="grey__box">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 3rem;
        .first__section {
            .name {
                margin-bottom: 2rem;
            }
        }
        .second__section {
            .nav {
                margin-bottom: 1rem;
            }
            .grey__box {
                background: #f2f2f2;
                padding-top: 2rem;
                padding-bottom: 2rem;
                padding-left: 2rem;
            }
        }
    }
</style>
