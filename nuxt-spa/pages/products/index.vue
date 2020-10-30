<template>
  <div>
    <nav>
      <nova name="Example" :data="{ title: 'Ara Framework' }" />
    </nav>
    <div class="container">
      <div>
      <nova name="ProductCatalog" :data="{ title: 'Ara Framework' }" />
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
