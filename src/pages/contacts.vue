<template>
    <div class="form">
        KONTAKTAI
        <p>Vardas</p>
        <input v-model="form.name" type="text">
        <p>Zinute</p>
        <textarea v-model="form.message" type="text"/>
        <AppButton @click.native="getInfo">SIUSTI</AppButton>
        <p>{{form}}</p>
    </div>
</template>

<script>
import AppButton from '../components/AppButton'
    export default {
        name: 'contacts',
        components: {
            AppButton
        },
        methods: {
            getInfo () {
                console.log(this.form)
            }
        },
        data () {
            return {
                form: {}
            }
        }
    }
</script>

<style lang="scss">
    .form {
        margin-bottom: 1rem;
    }
</style>
