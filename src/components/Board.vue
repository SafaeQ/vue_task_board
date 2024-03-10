<template>
  <div class="flex flex-row gap-6">
    <!-- todo -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between text-dimGray w-80 px-1">
        <span class="text-dimGray">To-Do</span>
        <div class="flex flex-row gap-2 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              class="text-dimGray"
              viewBox="0 0 448 512"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 448 512"
            >
              <path
                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
              />
            </svg>
          </span>
        </div>
      </div>
      <Column
        title="To-Do"
        :tasks="todoTasks"
        @add-task="addTaskToToDo"
        @delete-task="deleteTaskFromToDo"
      />
    </div>
    <!-- in Progress -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between text-dimGray w-80 px-1">
        <span class="text-dimGray">In Progress</span>
        <div class="flex flex-row gap-2 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              class="text-dimGray"
              viewBox="0 0 448 512"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 448 512"
            >
              <path
                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
              />
            </svg>
          </span>
        </div>
      </div>
      <Column
        title="In-Progress"
        :tasks="inprogressTasks"
        @add-task="addTaskToInProgress"
        @delete-task="deleteTaskFromInProgress"
      />
    </div>
  </div>
</template>

<script>
import Column from "./Column.vue";

export default {
  components: {
    Column,
  },
  data() {
    return {
      todoTasks: [], // Define your tasks here
      inprogressTasks: [], // Define your tasks here
    };
  },
  methods: {
    addTaskToToDo(newTask) {
      this.todoTasks.push(newTask);
    },
    addTaskToInProgress(newTask) {
      this.inprogressTasks.push(newTask);
    },
    deleteTaskFromToDo(taskId) {
      this.todoTasks = this.todoTasks.filter((task) => task.id !== taskId);
    },
    deleteTaskFromInProgress(taskId) {
      this.inProgressTasks = this.inProgressTasks.filter(
        (task) => task.id !== taskId
      );
    },
  },
};
</script>
