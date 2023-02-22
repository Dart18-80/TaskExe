<script setup lang="ts">

interface Props{
    variant?: string,
    color?: string,
    size?: string,
    fullWidth?: boolean,
    active?: boolean
}

const props = defineProps<Props>();

const getClasses = (variant: string, color: string, size: string, fullWidth: boolean, active: boolean) => {
    let colorValue: string, 
        sizeValue: string | null,
        fullWidthValue: string | null, 
        activeValue: string | null;

    if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
    } else if (variant === "outline") {
        colorValue = `btn-outline-${color}`;
    } else {
        colorValue = `btn-${color}`;
    }

    sizeValue = size ? `btn-${size}` : null;

    fullWidthValue = fullWidth ? `w-100` : null;

    activeValue = active ? `active` : null;

    return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
}

</script>

<template>
    <button
        class="btn mb-0"
        :class="getClasses(props.variant!, props.color!, props.size!, props.fullWidth, props.active)"
    >
    <slot />
  </button>
</template>
