<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<template>
    <main class="mt-0 main-content main-content-bg">
        <section>
            <div class="page-header min-vh-100">
                <RouterView />
            </div>
        </section>
    </main>
</template>
