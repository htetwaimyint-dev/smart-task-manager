<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'

const route = useRoute()
const router = useRouter()
const taskStore = useTaskStore()

const taskId = Number(route.params.id)

const task = computed(() => {
  return taskStore.tasks.find(t => t.id === taskId)
})

function goBack() {
  router.push('/tasks')
}
</script>

<template>
  <div class="detail-wrapper">
    <div class="detail-card">
      <h2>Task Details</h2>
      
      <div v-if="task" class="detail-content">
        <div class="info-group">
          <label>Task ID</label>
          <p>#{{ task.id }}</p>
        </div>
        <div class="info-group">
          <label>Title</label>
          <p class="task-title-text">{{ task.title }}</p>
        </div>
        <div class="info-group">
          <label>Status</label>
          <p>
            <span :class="['status-badge', task.completed ? 'completed' : 'pending']">
              {{ task.completed ? 'Completed' : 'Pending' }}
            </span>
          </p>
        </div>
      </div>
      
      <div v-else class="not-found">
        <p>Task not found!</p>
      </div>

      <button @click="goBack" class="back-btn">← Back to Tasks</button>
    </div>
  </div>
</template>

<style scoped>
.detail-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}
.detail-card {
  width: 100%;
  max-width: 550px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 32px;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: var(--text-main);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 12px;
}
.detail-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}
.info-group label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 4px;
}
.info-group p {
  font-size: 1.05rem;
  color: var(--text-main);
}
.task-title-text {
  font-weight: 500;
  background: #f8fafc;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
}
.status-badge.completed {
  background: #d1fae5;
  color: #065f46;
}
.status-badge.pending {
  background: #fef3c7;
  color: #b45309;
}
.not-found {
  color: var(--danger);
  padding: 20px 0;
  text-align: center;
}
.back-btn {
  background-color: #f1f5f9;
  color: var(--text-main);
  padding: 10px 20px;
  font-weight: 600;
  border: 1px solid var(--border-color);
}
.back-btn:hover {
  background-color: #e2e8f0;
}
</style>