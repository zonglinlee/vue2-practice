<template>
    <div>
        <div
            ref="div"
            class="border bg-teal-700 w-28 h-28 rounded-md relative text-white flex justify-center items-center text-lg"
        >
            flip
        </div>
    </div>
</template>

<script>
export default {
    name: 'Flip',
    mounted() {
        setTimeout(this.playTransition, 1500)
    },
    methods: {
        playTransition() {
            // debugger
            const el = this.$refs.div
            // Get the first position.
            const first = el.getBoundingClientRect()

            // Now set the element to the last position.
            el.classList.add('totes-at-the-end')

            // Read again. This forces a sync
            // layout, so be careful.
            const last = el.getBoundingClientRect()

            // You can do this for other computed
            // styles as well, if needed. Just be
            // sure to stick to compositor-only
            // props like transform and opacity
            // where possible.
            const invertTop = first.top - last.top
            const invertLeft = first.left - last.left

            // Invert.
            el.style.transform = `translateY(${invertTop}px) translateX(${invertLeft}px) rotate(1440deg)`

            // Wait for the next frame so we
            // know all the style changes have
            // taken hold.
            requestAnimationFrame(function () {
                // Switch on animations.
                el.classList.add('animate-on-transforms')
                el.style.transform = ''
            })

            // Capture the end with transitionend
            el.addEventListener('transitionend', this.tidyUpAnimations)
        },
        tidyUpAnimations() {
            console.log('clear')
        },
    },
}
</script>

<style>
.totes-at-the-end {
    left: 600px;
    top: 300px;
}
.animate-on-transforms {
    transition: 2s ease-in-out;
}
</style>
