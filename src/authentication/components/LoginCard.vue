<script setup lang="ts">
import SoftButton from '@/shared/components/SoftButton.vue';
import { useRouter } from 'vue-router';

interface Props {
    ReversePosition: boolean
}

const props = defineProps<Props>();
const router = useRouter();

</script>

<template>
    <div class="container fluid z-index-2">
        <div class="row">
            <div class="col-lg-6">
                <div class="top-0 my-auto text-center col-none col-xl-6 col-lg-6 col-12 h-100 pe-0 position-absolute justify-content-center"
                    :class="props.ReversePosition ? 'end-0' : 'start-0'">
                    <h1 class="display-1 text-bolder z-index-1 position-relative text-danger pt-5">Task.exe</h1>
                    <h2 class="d-none d-lg-block display-5 z-index-1 text-bolder position-relative text-white">Official Multitasking Site</h2>
                    <h2 class="d-5 d-lg-none z-index-1 text-bolder position-relative text-primary">Official Multitasking Site</h2>
                    <div class="container-fluid d-block">
                        <div class="row mt-3 mt-md-5 justify-content-center">
                            <div class="mx-auto col-12 col-md-8 col-lg-6">
                                <div class="card">
                                    <div class="pt-4 text-center card-header">
                                        <h5>Login</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="text-start">
                                            <div class="mb-1 mb-md-3 mt-n4 mt-md-n1">
                                                <label class="text-secondary">Email</label>
                                                <div class="input-group">
                                                    <span class="input-group-text text-body">
                                                        <i class="ni ni-email-83"></i>
                                                    </span>
                                                    <input type="email" class="form-control"
                                                            :placeholder="'Insert your email'" />
                                                </div>
                                            </div>
                                            <div class="mb-1 mb-md-3">
                                                <label class="text-secondary">Password</label>
                                                <div class="input-group">
                                                    <span class="input-group-text text-body">
                                                        <i class="fas fa-light fa-lock" aria-hidden="true"></i>
                                                    </span>
                                                    <input class="form-control" :placeholder="'Insert your Password'" />
                                                    <span class="input-group-text text-body">
                                                        <i class="fas fa-eye" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="text-center ps-5 pe-5 ps-lg-1 pe-lg-1 ps-xl-5 pe-xl-5">
                                                <SoftButton class="my-4 mb-2" color="primary" full-width>
                                                    <span class="spinner-border spinner-border-sm"
                                                            role="status" aria-hidden="true"></span>
                                                    Sing in
                                                </SoftButton>
                                            </div>
                                            <div class="text-center ps-5 pe-5 ps-lg-1 pe-lg-1 ps-xl-5 pe-xl-5">
                                                <SoftButton class="my-4 mb-2 " color="primary" full-width @click="router.replace('register')">
                                                    Sing up
                                                </SoftButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="top-0 my-auto text-center col-12 col-xl-6 col-lg-6 d-flex h-100 pe-0 position-absolute end-0">
                </div>
            </div>
        </div>
    </div>
</template>
