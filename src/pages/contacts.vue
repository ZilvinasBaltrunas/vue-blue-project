<template>
    <div v-if="!filledForm" class="form">
        KONTAKTAI
        <p>Vardas</p>
        <input v-model="form.name" type="text">
        <p>Zinute</p>
        <textarea v-model="form.message" type="text"/>
        <AppButton @click.native="getInfo">SIUSTI</AppButton>
    </div>
    <div v-else >
        <p>filled form :</p>
        <div>
            {{ form }}
        </div>
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
                this.filledForm = !this.filledForm
            }
        },
        data () {
            return {
                filledForm: false,
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
