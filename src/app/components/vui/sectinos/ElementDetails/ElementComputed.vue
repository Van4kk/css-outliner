<template>
    <div class="css-outliner-element-details-computed">
        <span>{{ title }}</span>
        <span v-for="direction in directions"
              :key="direction"
              :class="[direction, isVertical(direction) ? 'horizontal-center' : 'vertical-center']"
              :style="{ [direction]: '5px' }"
        >
      {{ computedStyles[`${title}-${direction}`] }}
    </span>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        computedStyles: {
            type: Object,
            default: () => ({}),
        },
    },
    setup() {
        return {
            directions: ['top', 'right', 'bottom', 'left'],
            isVertical: (direction) => direction === 'top' || direction === 'bottom',
        };
    },
};
</script>