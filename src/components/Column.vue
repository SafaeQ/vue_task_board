<template>
  <div class="flex flex-row gap-6">
    <div class="flex flex-col gap-4">
      <div class="w-80 bg-slightlyGrayBg p-2 border-r rounded-lg">
        <div v-for="task in tasks" :key="task.id">
          <BoardTask
            :task="task"
            @delete-task="deleteTask(task.id)"
            @update-task="updateTask"
          />
        </div>

        <!-- New Task Form - initially hidden -->
        <div v-if="showAddTaskForm">
          <form @submit.prevent="addTask">
            <input
              v-model="newTask.title"
              type="text"
              placeholder="Title"
              class="w-full"
              required
            />
            <input
              v-model="newTask.date"
              type="date"
              placeholder="Date"
              class="w-full mt-2"
              required
            />
            <textarea
              v-model="newTask.description"
              placeholder="Description"
              class="w-full mt-2"
              required
            ></textarea>
            <input
              v-model="newTask.status"
              type="text"
              placeholder="Status"
              class="w-full mt-2"
              required
            />
            <button
              type="submit"
              class="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Task
            </button>
          </form>
        </div>

        <!-- Button to show/hide the form -->
        <button
          @click="toggleAddTaskForm"
          v-show="!showAddTaskForm"
          class="w-full mt-2 flex gap-1 flex-row items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            class="text-dimGray"
            viewBox="0 0 448 512"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          <span class="text-dimGray">Add Task</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BoardTask from "./BoardTask.vue";
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  components: {
    BoardTask,
  },
  props: {
    title: String,
    columnTasks: Array,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  data() {
    return {
      showAddTaskForm: false,
      newTask: {
        title: "",
        date: "",
        description: "",
        status: "",
      },
    };
  },
  methods: {
    ...mapMutations(["updateTask", "deleteTask"]),
    ...mapActions(["addTaskAction"]),
    toggleAddTaskForm() {
      this.showAddTaskForm = !this.showAddTaskForm;
    },
    addTask() {
      const id = Math.floor(Math.random() * 1000);
      const newTaskData = { id, ...this.newTask }; // Create a copy to avoid reference issues
      console.log(newTaskData);
      this.addTaskAction(newTaskData);
      this.toggleAddTaskForm(); // Hide the form after adding the task
      this.resetForm();
    },
    resetForm() {
      // Reset form fields
      this.newTask.title = "";
      this.newTask.date = "";
      this.newTask.description = "";
      this.newTask.status = "";
    },

    deleteTask(taskId) {},
    updateTask(updatedTask) {},
  },
};
</script>
