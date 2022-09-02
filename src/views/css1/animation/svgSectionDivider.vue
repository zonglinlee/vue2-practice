<template>
    <div>
        <section class="py-5 section-bubble1">
            <div class="container">
                <h1>Section1</h1>
                <p>A test paragraph.</p>
            </div>
        </section>
        <section class="py-5 section-bubble2">
            <div class="container">
                <h1>Section2</h1>
                <p>A test paragraph.</p>
            </div>
        </section>
        <section class="py-5 section-bubble3">
            <div class="container">
                <h1>Section3</h1>
                <p>A test paragraph.</p>
            </div>
        </section>
        <section class="py-5 section-bubble4">
            <div class="container">
                <h1>Section4</h1>
                <p>A test paragraph.</p>
            </div>
        </section>
        <section class="py-5 section-bubble5">
            <div class="container">
                <h1>The footer</h1>
                <p>A test paragraph.</p>
                <br /><br /><br /><br />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'svgSectionDivider',
}
</script>

<style scoped lang="scss">
$spacer-height: 16vw;
$section1-bg-color: #ffffff;
$section2-bg-color: #ffd2b0;
$section3-bg-color: #384364;
$section4-bg-color: #cccccc;
$section5-bg-color: #333333;

@mixin bubbles($bubbles-type, $color) {
    @if $bubbles-type == a {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#{url-friendly-colour($color)}' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
    } @else if $bubbles-type == b {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='#{url-friendly-colour($color)}'/></svg>");
    }
}

@mixin section-bubble-with-colors($bubble-type, $currentcolor, $nextcolor) {
    @extend .section-bubble;
    background-color: $currentcolor;

    &:after {
        background-color: $nextcolor;

        @include bubbles($bubble-type, $currentcolor);
    }
}

@function url-friendly-colour($colour) {
    @return '%23' + str-slice('#{$colour}', 2, -1);
}

.section-bubble {
    margin-bottom: $spacer-height;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;

        width: 100%;
        height: $spacer-height;
        background: url('') green; // needs to be next sections background
        background-size: 100%;

        transform: translate(0, 100%);
    }
}

.section-bubble1 {
    @include section-bubble-with-colors(
        a,
        $section1-bg-color,
        $section2-bg-color
    );
}

.section-bubble2 {
    @include section-bubble-with-colors(
        b,
        $section2-bg-color,
        $section3-bg-color
    );
}

.section-bubble3 {
    @include section-bubble-with-colors(
        a,
        $section3-bg-color,
        $section4-bg-color
    );

    h1 {
        color: white;
    }
    p {
        color: white;
        opacity: 0.8;
    }
}

.section-bubble4 {
    @include section-bubble-with-colors(
        b,
        $section4-bg-color,
        $section5-bg-color
    );
}

.section-bubble5 {
    background: $section5-bg-color;
    color: white;

    text-align: center;
}

.section-bubble_type-a {
    @extend .section-bubble;

    &:after {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
    }
}

.section-bubble_type-b {
    @extend .section-bubble;

    &:after {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='red'/></svg>");
    }
}
</style>
