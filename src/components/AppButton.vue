<template>
    <div>
        <button class="button">
            <slot></slot>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    .button {
        background: #4169E1;
        color: #fff;
        border-radius: 5px;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
    }
</style>