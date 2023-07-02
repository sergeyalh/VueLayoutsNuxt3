<script setup>
    const loggedInUser = useUser();
</script>

<template>
  <header class="h-16 bg-blue-500 w-full">
    <div class="container mx-auto h-full flex items-center">
      <div class="flex-1">
        <NuxtLink to="/">
          <h1 class="text-3xl text-white font-bold"> User Managment</h1>
          <p class="text-white"> Welcome {{ loggedInUser || "Deat Guest" }}</p>
        </NuxtLink>
      </div>
      <div class="flex space-x-4 items-center">
        <NuxtLink v-if="!loggedInUser" to="/login" class="text-white">Login</NuxtLink>
        <NuxtLink v-if="!loggedInUser" to="/register" class="text-white">Register</NuxtLink>
        <NuxtLink v-if="loggedInUser" to="/users" class="text-white">Users Managment</NuxtLink>
        <button v-if="loggedInUser" @click="logout">Logout</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      const loggedInUser = useUser();
      alert("Bye Bye " + loggedInUser.value);
      loggedInUser.value = "";
      navigateTo('/')
    }
  }
}
</script>
