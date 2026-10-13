import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import axios from 'axios'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([])
  const loading = ref(false)
  const errorMessage = ref('')
  
  const searchQuery = ref('')
  const currentFilter = ref('all') // 'all' | 'pending' | 'completed' | 'important'

  async function fetchTasks() {
    loading.value = true
    try {
      const savedTasks = localStorage.getItem('vue_tasks')
      if (savedTasks) {
        tasks.value = JSON.parse(savedTasks)
      } else {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
       
        tasks.value = res.data.map(t => ({ ...t, priority: 'normal' }))
        saveToLocalStorage()
      }
    } catch (err) {
      errorMessage.value = 'Failed to load tasks.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  function saveToLocalStorage() {
    localStorage.setItem('vue_tasks', JSON.stringify(tasks.value))
  }

  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem('vue_tasks', JSON.stringify(newTasks))
    },
    { deep: true }
  )

  const completedCount = computed(() => tasks.value.filter(t => t.completed).length)
  
  const filteredTasks = computed(() => {
    return tasks.value.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      
      if (currentFilter.value === 'pending') {
        return matchesSearch && !task.completed
      } else if (currentFilter.value === 'completed') {
        return matchesSearch && task.completed
      } else if (currentFilter.value === 'important') {
        return matchesSearch && task.priority === 'important'
      }
      return matchesSearch
    })
  })

  
  function addTask(title, priority = 'normal') {
    if (!title.trim()) return
    tasks.value.unshift({
      id: Date.now(),
      title,
      completed: false,
      priority
    })
  }

  function toggleTask(id) {
    const task = tasks.value.find(t => t.id === id)
    if (task) {
      task.completed = !task.completed
    }
  }

  
  function togglePriority(id) {
    const task = tasks.value.find(t => t.id === id)
    if (task) {
      task.priority = task.priority === 'important' ? 'normal' : 'important'
    }
  }

  return {
    tasks,
    loading,
    errorMessage,
    searchQuery,
    currentFilter,
    completedCount,
    filteredTasks,
    fetchTasks,
    addTask,
    toggleTask,
    togglePriority
  }
})