<template>
  <div class="flex flex-row gap-6">
    <div class="flex flex-col gap-4">
      <div
        class="w-[310px] bg-slightlyGrayBg p-2 border-r rounded-lg dropzone min-h-auto relative overflow-hidden"
        :id="'column-' + columnId"
        @drop="onDrop"
        @dragover.prevent
      >
        <div v-for="task in tasks" :key="task.id">
          <BoardTask
            :task="task"
            :activeCol="columnId"
            @delete-task="deleteTask(task.id)"
            @update-task="updateTask"
          />
        </div>

        <!-- New Task Form - initially hidden -->
        <div v-if="showAddTaskForm">
          <div
            class="w-[304px] bg-white h-auto flex flex-col justify-between border-r rounded-lg p-4 mb-3"
          >
            <form @submit.prevent="addTask(columnId)">
              <div class="flex flex-row gap-3 w-full">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2837 8.27267C15.4183 8.79813 15.497 9.34606 15.497 9.91282C15.497 13.5777 12.516 16.5586 8.85132 16.5586C5.18668 16.5586 2.205 13.5778 2.205 9.91282C2.205 6.24807 5.18668 3.26642 8.85132 3.26642C9.78535 3.26642 10.6735 3.46239 11.4808 3.81152L12.4688 2.22336C11.3693 1.70388 10.146 1.40442 8.85132 1.40442C4.15977 1.40442 0.342773 5.22142 0.342773 9.91282C0.342773 14.6039 4.15977 18.4208 8.85132 18.4208C13.5422 18.4208 17.3591 14.6039 17.3591 9.91282C17.3591 8.60895 17.0555 7.37741 16.5294 6.27179L15.2837 8.27267Z"
                    fill="#656565"
                  />
                  <path
                    d="M16.8683 0.441383C16.141 -0.01091 15.1839 0.210868 14.731 0.938208L8.5611 10.8529L6.49424 7.90536C6.0027 7.20401 5.03402 7.03422 4.33267 7.52583C3.63147 8.01807 3.46105 8.98536 3.95321 9.68733L7.36751 14.5566C7.65864 14.9711 8.13315 15.2172 8.63808 15.2172C8.652 15.2172 8.66661 15.2172 8.68056 15.2166C9.20118 15.202 9.6802 14.9276 9.95521 14.4855L17.3655 2.57858C17.8188 1.85043 17.5957 0.89397 16.8683 0.441383Z"
                    fill="#656565"
                  />
                </svg>

                <div class="flex flex-col gap-1 w-full">
                  <input
                    v-model="newTask.title"
                    type="text"
                    placeholder="Title"
                    class="w-full bg-slightlyGrayBg text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
                    required
                  />
                  <textarea
                    v-model="newTask.description"
                    placeholder="Description"
                    class="w-full mt-2 bg-slightlyGrayBg text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
                    required
                  ></textarea>
                  <div class="flex flex-row gap-2 w-full py-2">
                    <!-- Task Status -->
                    <select
                      v-model="newTask.status"
                      class="w-full bg-slightlyGrayBg text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
                      required
                    >
                      <option value="" disabled>Select Status</option>
                      <option value="To-Do">To Do</option>
                      <option value="In-Progress">In Progress</option>
                      <option value="Review">Review</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                  <div class="flex flex-row gap-2 w-full">
                    <input
                      v-model="newTask.date"
                      type="date"
                      class="date-picker-input w-full bg-slightlyGrayBg text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
                      placeholder="Select date"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="w-5 mt-2 bg-blue-500 text-white py-2 px-4 rounded"
              >
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6L6 11L16 1"
                    stroke="#656565"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="w-5 mt-2 bg-blue-500 text-black py-2 px-4 rounded"
                @click="cancelShowTask"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="19"
                  height="19"
                  class="text-dimGray inline-block"
                >
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Button to show/hide the form -->
        <button
          @click="toggleAddTaskForm"
          v-show="!showAddTaskForm"
          class="w-full hover:bg-royalBlue mt-2 flex gap-1 flex-row items-center justify-center py-2 px-4 border border-gray92 rounded-lg"
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
import interact from "interactjs";
import { STATUS } from "../store/types";

export default {
  components: {
    BoardTask,
  },
  props: {
    title: String,
    tasks: Array,
    columnId: Number,
  },
  computed: {
    ...mapState({
      columns: (state) => state.columns,
    }),
  },
  data() {
    return {
      showAddTaskForm: false,
      showDatePicker: false,
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
    ...mapActions(["addTaskAction", "dropActions", "editTaskActions"]),
    toggleAddTaskForm() {
      this.showAddTaskForm = !this.showAddTaskForm;
    },
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
    },
    addTask(columnId) {
      const id = Math.floor(Math.random() * 1000);
      const newTaskData = { id, ...this.newTask };
      this.addTaskAction({ columnId, newTaskData });
      this.toggleAddTaskForm();
      this.resetForm();
    },

    resetForm() {
      // Reset form fields
      this.newTask.title = "";
      this.newTask.date = "";
      this.newTask.description = "";
      this.newTask.status = "";
    },
    onDrop(event) {
      let updatedTask = {
        ...this.tasks.find(
          (task) => task.id == event.dragEvent.target.dataset.id
        ),
      };
      if (this.columnId == 4) {
        updatedTask.status = STATUS.Done;
      } else if (this.columnId == 3) {
        updatedTask.status = STATUS.Review;
      } else if (this.columnId == 2) {
        updatedTask.status = STATUS.InProgress;
      } else if (this.columnId == 1) {
        updatedTask.status = STATUS.ToDo;
      }
      this.editTaskActions({
        task: event.dragEvent.target.dataset.id,
        updatedTask,
      });

      this.dropActions({
        task: event.dragEvent.target.dataset.id,
        from: event.dragEvent.target.dataset.col,
        to: this.columnId,
      });
    },
    initDropzones() {
      interact(`#column-${this.columnId}`).dropzone({
        accept: `.yes-drop`,
        ondrop: this.onDrop,
      });
    },
    cancelShowTask() {
      this.showAddTaskForm = false;
    },
  },
  mounted() {
    this.initDropzones();
  },
};
</script>
