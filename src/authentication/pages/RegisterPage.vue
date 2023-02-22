<script setup lang="ts">
import BackgroundImages from '@/authentication/components/BackgroundImages.vue';
import RegisterCard from '../components/RegisterCard.vue';

const imageFontBlue: string = 'https://reports-api-multimedia.s3.amazonaws.com/ImagesReports/BlueFont.jpg';
const imageComputerFont: string = 'https://reports-api-multimedia.s3.amazonaws.com/ImagesReports/ComputerFont.jpg';

const ReversePosition: boolean = false;
</script>

<template>
    <RegisterCard :ReversePosition="ReversePosition"/>
    <BackgroundImages :FirstImage="imageFontBlue" :SecondImage="imageComputerFont" :ReversePosition="ReversePosition"/>
</template>
