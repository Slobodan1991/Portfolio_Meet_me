<template>
    <div class="p-4 flex h-screen">
        <div class="w-[40%] mt-10  pr-12 pl-8">
            <div class="modal-content">
                <div class="">
                    <Logo />
                </div>
                <div class="mt-8 flex flex-col gap-y-4">
                    <div>
                        <h2 class="font-mono text-[1.5rem] font-semibold mt-4">Login to visit my portfolio. Jump in!</h2>
                        <p class="text-sm font-poppins text-gray-600">Enter your credentials to access your account</p>
                    </div>
                    <div class="flex flex-col gap-y-1 mt-4">
                        <input v-model="email" type="email"
                            :class="error ? 'border-red-800 border-b-2 h-10 outline-none' : 'border-blue-800 border-b h-10 outline-none'"
                            placeholder="youremail@mail.com" required>
                        <label class="text-xs font-bold font-popins" for="email">Email</label>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <input v-model="password" type="password"
                            :class="error ? 'border-red-800 border-b-2 h-10 outline-none' : 'border-blue-800 border-b h-10 outline-none'"
                            placeholder="Your password" required>
                        <label class="text-xs font-bold font-popins" for="password">Password</label>
                    </div>
                    <div class="w-full mt-4" @click="login">
                        <Button name="Login"
                            color="w-full bg-blue-800 border-blue-800 border text-white hover:bg-blue-900" />
                    </div>
                    <p class="text-sm text-center mt-6 font-popins font-bold">Don't have an account? <span
                            @click="goToRegister" class="text-blue-800 hover:text-blue-900 cursor-pointer">Register
                            here</span>
                    </p>
                    <p v-if="error" class="text-center w-full text-red-700 font-poppins">
                        {{ error }}
                    </p>
                </div>
            </div>
        </div>
        <div class="w-[60%] image">
            <img class="w-fill h-full object-cover image" src="../assets/images/registar/registar.jpg" alt="registar">
        </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue';
import Logo from '../assets/logo/Logo.vue'
import axios from 'axios';

export default {
    name: 'LoginPage',
    components: {
        Button,
        Logo
    },
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (user) {
            this.$router.push({ name: 'welcome' })
        }
    },
    methods: {
        goToRegister() {
            this.$router.push({ name: 'register' })
        },
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.log(result);
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user", JSON.stringify(result.data[0]))
                this.$store.dispatch('modal/openModal', { overlay: 'SUCCESS_LOGIN' })
                // this.$router.push({ name: 'profile' })
            } else {
                this.error = 'Your password or email is not correct! Try again!'
            }
        }
    }
}
</script>
<style scoped>
.image {
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
</style>