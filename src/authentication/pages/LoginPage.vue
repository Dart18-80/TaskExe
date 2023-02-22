<script setup lang="ts">
import BackgroundImages from '@/authentication/components/BackgroundImages.vue';
import LoginCard from '../components/LoginCard.vue';

const imageFontBlue: string = 'https://reports-api-multimedia.s3.amazonaws.com/ImagesReports/BlueFont.jpg';
const imageBoardFont: string = 'https://reports-api-multimedia.s3.amazonaws.com/ImagesReports/BoardFont.png';

const ReversePosition: boolean = false;

</script>

<template>
    <!--Logica del card-->
    <LoginCard :ReversePosition="ReversePosition" />
    <!--Logica Imagenes de fondo-->
    <BackgroundImages :FirstImage="imageFontBlue" :SecondImage="imageBoardFont" :ReversePosition="ReversePosition"/>
    
</template>
