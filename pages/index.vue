<script setup>
    const loggedInUser = useUser();
</script>

<template>
  <div>
    <h1 class="text-xl font-semibold">
      Welcome to the User Managment application
    </h1>
    <p v-if="!loggedInUser"> Please Register/Login </p>
    <p v-else> Hello Dear  {{ loggedInUser }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
