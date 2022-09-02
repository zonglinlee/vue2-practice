<template>
    <button class="button">Click Me</button>
</template>

<script>
export default {
    name: 'pressBtn',
}
</script>

<style scoped lang="scss">
.button {
    background: green;
    color: white;
    width: 160px;
    height: 80px;
    border-radius: 6px;
    font-size: 26px;
    cursor: pointer;
    border: none;
    text-align: center;
    /** key-feature */
    box-shadow: 0 9px #999;
    transition: 0.1s;
    &:hover {
        background-color: #3e8e41;
    }
    &:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
}
</style>
