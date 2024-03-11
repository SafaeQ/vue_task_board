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
          <div
            class="w-[304px] bg-white h-auto flex flex-col justify-between border-r rounded-lg p-4 mb-3"
          >
            <form @submit.prevent="addTask">
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
                    class="w-full bg-white text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
                    required
                  />
                  <div class="flex flex-row gap-1 items-center">
                    <span class="text-dimGray font-medium text-sm"
                      >Description</span
                    >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.63161 3.03023L4.85532 6.8065C4.47927 7.18255 3.363 7.35672 3.11362 7.10734C2.86424 6.85796 3.03445 5.7417 3.4105 5.36565L7.19076 1.58541C7.28398 1.4837 7.39684 1.40194 7.52256 1.34506C7.64823 1.28818 7.78416 1.25734 7.92211 1.25444C8.06002 1.25154 8.19714 1.27661 8.32512 1.32815C8.45309 1.37969 8.56931 1.45664 8.66673 1.55434C8.76414 1.65203 8.84078 1.76844 8.89196 1.89656C8.94314 2.02468 8.96788 2.16184 8.96459 2.29977C8.96131 2.4377 8.93008 2.57355 8.87288 2.69909C8.81564 2.82463 8.73358 2.93728 8.63161 3.03023Z"
                        stroke="#656565"
                        stroke-width="0.795107"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.56254 2.0802H2.58335C2.16342 2.0802 1.76071 2.24701 1.46378 2.54395C1.16684 2.84089 1 3.24362 1 3.66355V7.62193C1 8.04188 1.16684 8.4446 1.46378 8.74152C1.76071 9.03848 2.16342 9.20529 2.58335 9.20529H6.93757C7.81237 9.20529 8.12509 8.49278 8.12509 7.62193V5.64274"
                        stroke="#656565"
                        stroke-width="0.795107"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <textarea
                    v-model="newTask.description"
                    placeholder="Description"
                    class="w-full mt-2 bg-white text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
                    required
                  ></textarea>
                  <div class="flex flex-row gap-2 w-full py-2">
                    <!-- Task Status -->
                    <input
                      v-model="newTask.status"
                      type="text"
                      placeholder="Status"
                      class="w-full bg-white text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
                      required
                    />
                  </div>
                  <div class="flex flex-row gap-2 w-full">
                    <svg
                      width="22"
                      height="21"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="13.6603"
                        cy="13.6603"
                        r="13.1603"
                        stroke="#656565"
                        stroke-dasharray="5 5"
                      />
                      <path
                        d="M14 13C15.1046 13 16 12.1046 16 11C16 9.89543 15.1046 9 14 9C12.8954 9 12 9.89543 12 11C12 12.1046 12.8954 13 14 13Z"
                        stroke="#656565"
                        stroke-width="0.75"
                      />
                      <path
                        d="M17.9987 17C18 16.9179 18 16.8345 18 16.75C18 15.5073 16.2092 14.5 14 14.5C11.7909 14.5 10 15.5073 10 16.75C10 17.9927 10 19 14 19C15.1155 19 15.9199 18.9217 16.5 18.7817"
                        stroke="#656565"
                        stroke-width="0.75"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      @click="toggleDatePicker"
                      width="22"
                      height="21"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.3631 22H4.82313C3.48492 22 2.8158 22 2.30467 21.7457C1.85506 21.522 1.48952 21.165 1.26044 20.726C1 20.2269 1 19.5734 1 18.2667V7.06667C1 5.75988 1 5.10648 1.26044 4.60736C1.48952 4.1683 1.85506 3.81135 2.30467 3.58765C2.8158 3.33333 3.48492 3.33333 4.82313 3.33333H18.682C20.0202 3.33333 20.6894 3.33333 21.2005 3.58765C21.65 3.81135 22.0156 4.1683 22.2447 4.60736C22.5051 5.10648 22.5051 5.75988 22.5051 7.06667V9.16667M5.77891 1V3.33333M17.7262 1V3.33333M1 8H22.5051M13.5447 12.6668L5.77891 12.6667M9.3631 17.3334L5.77891 17.3333M14.142 22L16.5613 21.5275C16.7722 21.4863 16.8777 21.4657 16.976 21.428C17.0634 21.3946 17.1464 21.3512 17.2232 21.2988C17.31 21.2398 17.3859 21.1656 17.5382 21.017L22.5051 16.1667C23.165 15.5223 23.165 14.4777 22.5051 13.8333C21.8453 13.189 20.7755 13.189 20.1157 13.8333L15.1487 18.6836C14.9965 18.8323 14.9205 18.9065 14.86 18.9912C14.8064 19.0662 14.762 19.1473 14.7278 19.2325C14.6892 19.3286 14.6681 19.4316 14.6259 19.6375L14.142 22Z"
                        stroke="#656565"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <input
                      v-model="newTask.date"
                      v-show="showDatePicker"
                      type="date"
                      class="date-picker-input"
                      placeholder="Select date"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="w-full mt-2 bg-blue-500 hidden text-white py-2 px-4 rounded"
              >
                Add Task
              </button>
            </form>
          </div>
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
    ...mapActions(["addTaskAction"]),
    toggleAddTaskForm() {
      this.showAddTaskForm = !this.showAddTaskForm;
    },
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
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

    deleteTask(taskId) {
      this.$emit("delete-task", taskId);
    },
    updateTask(updatedTask) {},
  },
};
</script>
