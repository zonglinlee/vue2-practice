<template>
    <div>
        <button class="button" style="vertical-align: middle">
            <span>Hover </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Btn1',
}
</script>

<style scoped lang="scss">
.button {
    background: orangered;
    color: white;
    width: 160px;
    height: 80px;
    border-radius: 6px;
    font-size: 26px;
    cursor: pointer;
    border: none;
    text-align: center;
    span {
        display: inline-block;
        position: relative;
        transition: 0.3s;
    }
    &:hover span {
        padding-right: 25px;
    }
    span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -16px;
        transition: 0.3s;
    }
    &:hover span:after {
        opacity: 1;
        right: 0;
    }
}
</style>
