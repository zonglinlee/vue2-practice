<template>
    <div>
        <div class="border-1-ccc cursor-pointer">click Event</div>
        <div>clickEventDetail.button: {{ clickEventDetail.button }}</div>
        <div>clickEventDetail.altKey: {{ clickEventDetail.altKey }}</div>
        <div>clickEventDetail.ctrlKey: {{ clickEventDetail.ctrlKey }}</div>
        <div>clickEventDetail.shiftKey: {{ clickEventDetail.shiftKey }}</div>
    </div>
</template>

<script>
export default {
    name: 'uiEvents',
    data() {
        return {
            clickEventDetail: {},
        }
    },
    mounted() {
        this.$el.addEventListener('click', this.click1)
    },
    methods: {
        click1(event) {
            console.log(event)
            const { button, altKey, ctrlKey, shiftKey } = event
            this.clickEventDetail = { button, altKey, ctrlKey, shiftKey }
        },
    },
}
</script>

<style scoped lang="scss"></style>
