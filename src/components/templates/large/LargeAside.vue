<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>
<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-home-outline" /> Home
      </router-link>
    </div>
    <div class="divider" />
    <div class="menu">
      <router-link to="/categoria">
        <i class="mdi mdi-tag" /> Categoria
      </router-link>
      <router-link to="/acessorio">
        <i class="mdi mdi-weight" /> Acessório
      </router-link>
      <router-link to="/marca">
        <i class="mdi mdi-car" /> Marca
      </router-link>
      <router-link to="/cor">
        <i class="mdi mdi-palette" /> Cor
      </router-link>
      <router-link to="/login">
        <i class="icon mdi mdi-account" /> Login
      </router-link>
    </div>
  </div>
  <logo-title />
</template>
<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  align-self: center;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #eeeeee;
}

.menu {
  padding: 3rem;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #e5e0d8;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}
</style>