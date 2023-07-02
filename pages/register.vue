<template>
    <div class="register">
      <h1>Register Page</h1>
      <form @submit.prevent="register" class="form ">
        <input v-model="username" type="text" placeholder="Username" required class="form-control"/>
        <input v-model="password" type="password" placeholder="Password" required class="form-control"/>
        <button type="submit">Register</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  const loggedInUser = useUser();
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      register() {
        //TODO: send the Register request to the server
        //Check for uniques
        if (this.username === 'admin' && this.password === 'password') {
          loggedInUser.value = this.username;
          alert('Register successful!');
          navigateTo('/')
        } else {
          this.error = 'Invalid username or password';
        }
      }
    }
  }
  </script>
