<template>
    <div>
        <div style="margin-bottom: 20px">
            relative 或者 absolute 定位的元素默认的 top 值为 auto，如果不给定
            top/bottom/left/right 值，t should be positioned if it were a
            <strong>static</strong>
            element（好像没有脱离文档流一样）
        </div>
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dropDown',
}
</script>

<style scoped lang="scss">
.dropdown {
    position: relative;
    transition: 0.3s;
    width: fit-content;
    //overflow-x: hidden;
    &:hover .dropdown-content {
        display: block;
    }
    .dropbtn {
        cursor: pointer;
        border-radius: 4px;
        background: dodgerblue;
        border: none;
        height: 40px;
        color: white;
    }

    .dropdown-content {
        position: absolute;
        display: none;
        width: 100%;
        a {
            display: block;
            text-decoration: none;
            padding: 10px;
            background: #e4e4e4;
        }
        a:hover {
            background: orangered;
            color: white;
        }
    }
}
</style>
