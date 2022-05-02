<script>
  export default {
    name:'App',
  };

</script>

<template>
  <div class="wrapper">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.wrapper {
  text-align: center;
}

h1{
  font-weight: bold;
  color: hsl(153, 48%, 49%);
}
</style>
