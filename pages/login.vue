<template>
    <div class="login">
      <h1>Login Page</h1>
      <form @submit.prevent="login" class="form">
        <input class="form-control" v-model="username" type="text" placeholder="Username" required />
        <input class="form-control" v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
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
      login() {
        //TODO: send the Login request to the server
        //Check user
        if (this.username === 'admin' && this.password === 'password') {
          loggedInUser.value = this.username;
          alert('Login successful!');
          navigateTo('/')
        } else {
          this.error = 'Invalid username or password';
        }
      }
    }
  }
  </script>
