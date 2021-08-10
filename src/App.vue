<template>
  <div>
    <div class="d-flex justify-content-center bd-highlight p-3 mb-2 bg-info">
      <div class="p-2 bd-highlight">
        <strong>
          <router-link class="nav-link link-light pr-3" to="/create-todo">
             Add Todo
          </router-link>
        </strong>
      </div>
      <div class="p-2 bd-highlight">
        <strong>
          <router-link class="nav-link link-light pr-3" to="/show-list">
             Show Todos
          </router-link>
        </strong>
      </div>
    </div>    

    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>
