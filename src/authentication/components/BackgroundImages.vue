<script setup lang="ts">

interface Props {
    FirstImage: string,
    SecondImage: string,
    ReversePosition: boolean
}

const props = defineProps<Props>();

</script>

<template>
    <div class="container fluid">
        <div class="row">
            <div class="col-lg-6">
                <div class="top-0 my-auto text-center col-none col-xl-6 col-lg-6 col-12 h-100 pe-0 position-absolute justify-content-center"
                    :class="props.ReversePosition ? 'end-0' : 'start-0'">
                    <div class="bg-cover oblique-image position-absolute fixed-top h-100 z-index-0" 
                    :style="{ backgroundImage: `url(${props.FirstImage})` }"></div>
                    <div class="bg-primary opacity-9 oblique-image position-absolute fixed-top h-100 z-index-0"></div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="top-0 my-auto text-center col-12 col-xl-6 col-lg-6 d-flex h-100 pe-0 position-absolute end-0"
                    :class="props.ReversePosition ? 'start-0' : 'end-0'">
                    <div class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0" 
                    :style="{ backgroundImage: `url(${props.SecondImage})` }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
