<script setup>
import { ref } from 'vue'

const profile = ref({
  name: 'Htet Wai Myint',
  email: 'htetwai@example.com',
  bio: 'Vue 3 & Frontend Developer passionate about building web apps.'
})

const isEditing = ref(false)

function saveProfile() {
  isEditing.value = false
  alert('Profile updated successfully!')
}
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-card">
      <div class="profile-header-box">
        <div class="avatar-placeholder">👤</div>
        <h2>User Profile Dashboard</h2>
      </div>
      
      <div v-if="!isEditing" class="profile-info">
        <div class="info-row">
          <span class="label">Full Name</span>
          <span class="value">{{ profile.name }}</span>
        </div>
        <div class="info-row">
          <span class="label">Email Address</span>
          <span class="value">{{ profile.email }}</span>
        </div>
        <div class="info-row">
          <span class="label">Bio</span>
          <span class="value bio-text">{{ profile.bio }}</span>
        </div>
        
        <button @click="isEditing = true" class="edit-btn">Edit Profile</button>
      </div>

      <form v-else @submit.prevent="saveProfile" class="profile-form">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" v-model="profile.name" />
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" v-model="profile.email" />
        </div>
        <div class="form-group">
          <label>Bio</label>
          <textarea v-model="profile.bio" rows="3"></textarea>
        </div>
        
        <div class="form-actions">
          <button type="submit" class="save-btn">Save Changes</button>
          <button type="button" @click="isEditing = false" class="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.profile-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}
.profile-card {
  width: 100%;
  max-width: 600px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 36px;
}
.profile-header-box {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}
.avatar-placeholder {
  width: 50px;
  height: 50px;
  background: #eef2ff;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
}
.profile-header-box h2 {
  font-size: 1.5rem;
  color: var(--text-main);
}
.profile-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.info-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #f8fafc;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.info-row .label {
  font-size: 11px;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
  letter-spacing: 0.5px;
}
.info-row .value {
  font-size: 1rem;
  color: var(--text-main);
  font-weight: 500;
}
.bio-text {
  font-weight: normal !important;
  color: var(--text-muted) !important;
}
.edit-btn {
  margin-top: 12px;
  background-color: var(--primary);
  color: white;
  padding: 12px;
  font-weight: 600;
}
.edit-btn:hover {
  background-color: var(--primary-hover);
}
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
}
.form-group input, .form-group textarea {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  background: var(--card-bg);
  transition: var(--transition);
}
.form-group input:focus, .form-group textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}
.save-btn {
  flex: 1;
  background-color: var(--primary);
  color: white;
  padding: 12px;
  font-weight: 600;
}
.save-btn:hover {
  background-color: var(--primary-hover);
}
.cancel-btn {
  background-color: #f1f5f9;
  color: var(--text-main);
  padding: 12px 20px;
  font-weight: 600;
  border: 1px solid var(--border-color);
}
.cancel-btn:hover {
  background-color: #e2e8f0;
}
</style>