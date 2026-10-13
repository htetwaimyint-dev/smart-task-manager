<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  task: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle', 'toggle-priority'])
</script>

<template>
  <div class="task-card" :class="{ 'is-important': task.priority === 'important' }">
    <div class="task-info">
      <button @click="$emit('toggle-priority', task.id)" class="priority-star-btn" :title="task.priority === 'important' ? 'Important Task' : 'Mark as Important'">
        {{ task.priority === 'important' ? '⭐' : '☆' }}
      </button>
      <RouterLink :to="`/tasks/${task.id}`" class="task-title" :class="{ completed: task.completed }">
        {{ task.title }}
      </RouterLink>
    </div>
    
    <button @click="$emit('toggle', task.id)" :class="['status-btn', task.completed ? 'completed' : 'pending']">
      {{ task.completed ? 'Completed' : 'Pending' }}
    </button>
  </div>
</template>

<style scoped>
.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background-color: var(--card-bg);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: var(--transition);
}
.task-card.is-important {
  border-left: 4px solid #f59e0b;
  background-color: #fffbeb;
}
.task-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.priority-star-btn {
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
}
.task-title {
  text-decoration: none;
  color: var(--text-main);
  font-weight: 500;
}
.task-title.completed {
  color: var(--text-muted);
  text-decoration: line-through;
}
.status-btn {
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 6px;
  font-weight: 600;
}
.status-btn.completed {
  background-color: #d1fae5;
  color: #065f46;
}
.status-btn.pending {
  background-color: #f1f5f9;
  color: #475569;
}
</style>