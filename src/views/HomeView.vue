<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="hero-container">
    <div class="hero-card">
      <span class="badge">Vue 3 + Pinia OJT Project</span>
      <h1>Smart Task Manager & Profile Dashboard</h1>
      <p>Streamline your daily workflow, track your task completions, and manage your personalized profile seamlessly.</p>
      
      <div class="hero-actions">
        <RouterLink to="/tasks" class="btn btn-primary">Explore Tasks →</RouterLink>
        <RouterLink to="/profile" class="btn btn-outline">View Profile</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  padding: 20px;
}
.hero-card {
  text-align: center;
  max-width: 650px;
  background: var(--card-bg);
  padding: 48px 36px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
}
.badge {
  display: inline-block;
  background: #eef2ff;
  color: var(--primary);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}
h1 {
  font-size: 2.2rem;
  color: var(--text-main);
  margin-bottom: 16px;
  line-height: 1.2;
}
p {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 32px;
}
.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}
.btn-primary {
  background-color: var(--primary);
  color: white;
}
.btn-primary:hover {
  background-color: var(--primary-hover);
}
.btn-outline {
  background-color: #f1f5f9;
  color: var(--text-main);
  border: 1px solid var(--border-color);
}
.btn-outline:hover {
  background-color: #e2e8f0;
}
</style>