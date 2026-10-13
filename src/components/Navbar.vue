<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="nav-brand">
      <span class="brand-icon">⚡</span>
      <span class="brand-title">SmartTask</span>
    </div>
    <nav class="nav-links">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/tasks" class="nav-item">Tasks</RouterLink>
      <RouterLink to="/profile" class="nav-item">Profile</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}
.nav-links {
  display: flex;
  gap: 8px;
}
.nav-item {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: var(--transition);
}
.nav-item:hover {
  color: var(--primary);
  background: #f1f5f9;
}
.nav-item.router-link-exact-active {
  color: var(--primary);
  background: #eef2ff;
}
</style>