<template>
  <div class="form-wrapper">
    <h2>REGISTER</h2>
    <form @submit.prevent="register" action="">
      <div class="errors" v-if="errors">
        <p v-for="(error, field) in errors" :key="field">
          {{ error[0] }}
        </p>
      </div>
      <input type="text" v-model="form.username" placeholder="your username"> <br>
      <input type="password" v-model="form.password" placeholder="your password"> <br>
      <input type="password" v-model="form.password_repeat" placeholder="repeat password"> <br>
      <button>Register</button>
      <router-link to="login" class="link">Click to login</router-link>
    </form>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: "Registration",
  data() {
    return {
      form: {
        username: '',
        password: '',
        password_repeat: ''
      },
      errors: null
    }
  },
  methods: {
    register(){
      router.push('/login')
    }
  }
};
</script>

<style scoped>

</style>