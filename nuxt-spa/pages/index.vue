<template>
  <div>
    <nav>
      <nova name="Example" :data="{ title: 'Ara Framework' }" />
    </nav>
    <div class="container">
      <div>
this is home page
      </div>
    </div>
  </div>
</template>

<script>
import Nova from "nova-vue-bridge";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
    Nova
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
