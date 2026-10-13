<script setup>
import { ref, onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import TaskCard from '@/components/TaskCard.vue'

const taskStore = useTaskStore()
const newTaskTitle = ref('')
const isImportant = ref(false)

onMounted(() => {
  taskStore.fetchTasks()
})

function handleAdd() {
  if (!newTaskTitle.value.trim()) {
    taskStore.errorMessage = 'Task title cannot be empty!'
    return
  }
  taskStore.errorMessage = ''
  // အရေးကြီး/မကြီး အခြေအနေပါ ပို့ပေးမည်
  taskStore.addTask(newTaskTitle.value, isImportant.value ? 'important' : 'normal')
  newTaskTitle.value = ''
  isImportant.value = false
}
</script>

<template>
  <section class="tasks-container">
    <div class="dashboard-header">
      <h1>Task Dashboard</h1>
      <div class="stats-badge">
        Completed: <strong>{{ taskStore.completedCount }} / {{ taskStore.tasks.length }}</strong>
      </div>
    </div>

    <!-- Add Task Form with Important Checkbox -->
    <form @submit.prevent="handleAdd" class="task-form-wrapper">
      <div class="task-form">
        <input type="text" v-model="newTaskTitle" placeholder="✨ What needs to be done?" />
        <button type="submit" class="add-btn">Add Task</button>
      </div>
      <label class="checkbox-label">
        <input type="checkbox" v-model="isImportant" /> Mark as Important ⭐
      </label>
    </form>
    
    <p v-if="taskStore.errorMessage" class="error">{{ taskStore.errorMessage }}</p>

    <!-- Controls & Filters (Added Important Filter) -->
    <div class="controls-bar">
      <input type="text" v-model="taskStore.searchQuery" placeholder="🔍 Search tasks..." class="search-input" />
      
      <div class="filter-buttons">
        <button @click="taskStore.currentFilter = 'all'" :class="{ active: taskStore.currentFilter === 'all' }">All</button>
        <button @click="taskStore.currentFilter = 'pending'" :class="{ active: taskStore.currentFilter === 'pending' }">Pending</button>
        <button @click="taskStore.currentFilter = 'completed'" :class="{ active: taskStore.currentFilter === 'completed' }">Completed</button>
        <button @click="taskStore.currentFilter = 'important'" :class="{ active: taskStore.currentFilter === 'important' }">⭐ Important</button>
      </div>
    </div>

    <!-- Task List -->
    <div class="task-list-wrapper">
      <p v-if="taskStore.loading" class="loading-state">Loading tasks...</p>

      <div v-else>
        <TaskCard 
          v-for="task in taskStore.filteredTasks" 
          :key="task.id" 
          :task="task" 
          @toggle="taskStore.toggleTask"
          @toggle-priority="taskStore.togglePriority"
        />
        <div v-if="taskStore.filteredTasks.length === 0" class="empty-state">
          <p>No matching tasks found.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tasks-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.dashboard-header h1 {
  font-size: 1.8rem;
  color: var(--text-main);
}
.stats-badge {
  background: #eef2ff;
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
}
.task-form-wrapper {
  margin-bottom: 16px;
}
.task-form {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}
.task-form input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  background: var(--card-bg);
}
.checkbox-label {
  font-size: 13px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.add-btn {
  background-color: var(--primary);
  color: white;
  padding: 0 24px;
  font-weight: 600;
  border-radius: 8px;
}
.error {
  color: var(--danger);
  font-size: 13px;
  margin-bottom: 12px;
}
.controls-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.search-input {
  flex: 1;
  padding: 10px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  outline: none;
  background: var(--card-bg);
}
.filter-buttons {
  display: flex;
  gap: 6px;
  background: #e2e8f0;
  padding: 4px;
  border-radius: 8px;
  flex-wrap: wrap;
}
.filter-buttons button {
  background: transparent;
  padding: 6px 12px;
  font-size: 12px;
  color: var(--text-muted);
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.filter-buttons button.active {
  background: var(--card-bg);
  color: var(--primary);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.loading-state, .empty-state {
  text-align: center;
  padding: 40px;
  color: var(--text-muted);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
}
</style>