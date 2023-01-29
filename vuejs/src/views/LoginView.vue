<template>
  <div class="form-wrapper">
    <h2>LOGIN</h2>
    <form @submit.prevent="login" action="">
      <div v-if="errors" class="errors">
        <p v-for="(errors, field) in errors" :key="field">
          {{ error[0] }}
        </p>
      </div>
      <input type="text" v-model="form.username" placeholder="your username"><br>
      <input type="password" v-model="form.password" placeholder="your password"><br>
      <button>Login</button>
      <router-link to="/register" class="link">register here</router-link>
    </form>

  </div>
</template>

<script>
import router from '@/router';

export default {
  name: "Login.vue",
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      errors: null
    }
  },
  methods: {
    login() {
      console.log('login:',this.form);
      router.push('/home')
    }
  }
};
</script>

<style scoped>

</style>