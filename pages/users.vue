<script setup>
    const availableUsers = useUsersList();
    const loggedInUser = useUser();
</script>

<template> 
    <p> Dear {{ loggedInUser }}, Here you will see a list of users you are allowed to see</p>
    <ul class="border-double border-4 border-indigo-2 max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li class="" v-for="user in availableUsers" :key="user">
            {{ user }}
        </li>
    </ul>
</template>