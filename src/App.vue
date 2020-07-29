<template>
  <div>
    <router-link to="/">页面一</router-link>|
    <router-link to="/xxx">页面二</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>
