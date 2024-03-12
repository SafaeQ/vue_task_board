<template>
  <div
    v-if="!showEditForm"
    ref="dragRef"
    :id="'task-' + task.id"
    :data-id="task.id"
    :data-col="activeCol"
    class="yes-drop w-[292px] hover:bg-royalBlue bg-white h-auto flex flex-col justify-between border-r rounded-lg p-4 mb-3 shadow-md"
    :style="getPosition"
    @mouseenter="showDotsIcon = true"
    @mouseleave="showDotsIcon = false"
    @click="toggleEditForm"
  >
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
          :fill="task.status == 'Done' ? '#1CE8DC' : '#656565'"
        />
        <path
          d="M16.8683 0.441383C16.141 -0.01091 15.1839 0.210868 14.731 0.938208L8.5611 10.8529L6.49424 7.90536C6.0027 7.20401 5.03402 7.03422 4.33267 7.52583C3.63147 8.01807 3.46105 8.98536 3.95321 9.68733L7.36751 14.5566C7.65864 14.9711 8.13315 15.2172 8.63808 15.2172C8.652 15.2172 8.66661 15.2172 8.68056 15.2166C9.20118 15.202 9.6802 14.9276 9.95521 14.4855L17.3655 2.57858C17.8188 1.85043 17.5957 0.89397 16.8683 0.441383Z"
          :fill="task.status == 'Done' ? '#1CE8DC' : '#656565'"
        />
      </svg>

      <div class="flex flex-col gap-1 w-full">
        <div class="flex flex-row justify-between w-full">
          <span class="text-dimGray text-base font-semibold">{{
            task.title
          }}</span>
          <!-- Dots Icon -->
          <div class="dots-icon" @click="toggleDropdown" v-show="showDotsIcon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8
              12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                fill="#656565"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                fill="#656565"
              />
              <path
                d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
                fill="#656565"
              />
            </svg>

            <!-- Dropdown menu -->
            <div class="dropdown-menu shadow-md" v-show="showDropdown">
              <!-- Dropdown menu items -->
              <button
                @click="editTaskToggle"
                class="flex flex-row gap-1 items-center"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.518 3.68042L6.8187 9.37969C6.25115 9.94723 4.56644 10.2101 4.19007 9.83372C3.8137 9.45735 4.07059 7.77265 4.63813 7.20511L10.3434 1.49985C10.4841 1.34635 10.6544 1.22296 10.8442 1.13711C11.0338 1.05126 11.239 1.00473 11.4472 1.00034C11.6553 0.995962 11.8623 1.0338 12.0554 1.11159C12.2486 1.18938 12.424 1.30552 12.571 1.45296C12.718 1.6004 12.8337 1.7761 12.9109 1.96946C12.9882 2.16282 13.0255 2.36982 13.0205 2.57799C13.0156 2.78616 12.9684 2.99118 12.8821 3.18065C12.7957 3.37012 12.6719 3.54014 12.518 3.68042Z"
                    stroke="#656565"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.3767 2.24664H3.38964C2.75587 2.24664 2.14809 2.4984 1.69994 2.94655C1.2518 3.3947 1 4.00251 1 4.63629V10.6104C1 11.2442 1.2518 11.852 1.69994 12.3001C2.14809 12.7483 2.75587 13 3.38964 13H9.96117C11.2814 13 11.7534 11.9247 11.7534 10.6104V7.62334"
                    stroke="#656565"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-dimGray"> Edit</span>
              </button>
              <button
                @click="deleteTask(task.id)"
                class="flex flex-row gap-1 items-center"
              >
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3335 6.77777V11.1111"
                    stroke="#B54421"
                    stroke-width="1.44444"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.22217 6.77777V11.1111"
                    stroke="#B54421"
                    stroke-width="1.44444"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 3.88892H12.5556"
                    stroke="#B54421"
                    stroke-width="1.44444"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.44434 3.88892H6.77767H11.111V11.8334C11.111 13.03 10.141 14 8.94434 14H4.611C3.41439 14 2.44434 13.03 2.44434 11.8334V3.88892Z"
                    stroke="#B54421"
                    stroke-width="1.44444"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.61133 2.44444C4.61133 1.6467 5.25803 1 6.05577 1H7.50022C8.29798 1 8.94466 1.6467 8.94466 2.44444V3.88889H4.61133V2.44444Z"
                    stroke="#B54421"
                    stroke-width="1.44444"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-dimGray">Delete</span>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-1 items-center">
          <span class="text-dimGray font-medium text-sm">Description</span>
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
        <span class="text-dimGray font-normal text-xs">{{
          truncateDescription(task.description)
        }}</span>
        <div class="flex flex-row gap-2 w-full py-2">
          <!-- Dropdown button -->
          <div
            class="relative z-10 cursor-pointer"
            @click="togglePriorityDropdown"
          >
            <span
              :class="{
                'dark:bg-greenLight': task.priority === 'Low',
                'dark:bg-orange': task.priority === 'Medium',
                'dark:bg-purple': task.priority === 'High',
              }"
              class="text-dimGray text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:text-blue-300"
            >
              {{ task.priority || "Select Priority" }}
            </span>
            <!-- Dropdown menu -->
            <div
              class="absolute top-full left-0 bg-white border border-gray-300 rounded-lg shadow-md py-1 z-50"
              v-if="showPriorityDropdown"
            >
              <div
                class="px-2 py-1 text-dimGray"
                @click="selectPriority('Low')"
              >
                <span
                  class="bg-greenLight text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >Low</span
                >
              </div>
              <div
                class="px-2 py-1 text-dimGray"
                @click="selectPriority('Medium')"
              >
                <span
                  class="bg-orange text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >Medium</span
                >
              </div>
              <div
                class="px-2 py-1 text-dimGray"
                @click="selectPriority('High')"
              >
                <span
                  class="bg-purple text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >High</span
                >
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  </div>

  <!-- update Task Form - initially hidden -->
  <div v-else>
    <div
      class="w-[304px] bg-white h-auto flex flex-col justify-between border-r rounded-lg p-4 mb-3"
    >
      <form @submit.prevent="updateTask">
        <!-- Form fields for editing task -->
        <input
          v-model="editedTask.title"
          type="text"
          placeholder="Title"
          class="w-full bg-white text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
          required
        />
        <textarea
          v-model="editedTask.description"
          placeholder="Description"
          class="w-full mt-2 bg-white text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
          required
        ></textarea>
        <div class="flex flex-row gap-2 w-full py-2">
          <!-- Task Status -->
          <input
            v-model="editedTask.status"
            type="text"
            placeholder="Status"
            class="w-full bg-white text-dimGray border-r rounded-lg border border-slightlyGray p-2 font-medium text-sm"
            required
          />
        </div>
        <!-- Submit button -->
        <div class="flex gap-2">
          <button
            type="submit"
            class="flex-1 bg-blue-500 text-dimGray py-2 px-4 rounded"
          >
            Update Task
          </button>
          <!-- Cancel Edit button -->
          <button
            type="button"
            class="flex-1 bg-gray-300 text-dimGray py-2 px-4 rounded"
            @click="cancelEditTask"
          >
            Cancel Edit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import interact from "interactjs";
import { ref } from "vue";
import { mapActions } from "vuex";

const dragRef = ref(null);

export default {
  props: {
    task: Object,
    activeCol: Number,
  },
  data() {
    return {
      item: {
        x: 0,
        y: 0,
      },
      showDotsIcon: false,
      showDropdown: false,
      showEditForm: false,
      showPriorityDropdown: false,
      editedTask: {
        id: null,
        title: "",
        description: "",
        status: "",
        priority: "Medium",
      },
    };
  },

  mounted() {
    this.initDrag();
  },
  methods: {
    ...mapActions(["deleteTaskActions", "editTaskActions"]),

    deleteTask(taskId) {
      this.deleteTaskActions({ taskId });
    },
    editTaskToggle() {
      this.showEditForm = !this.showEditForm;
      if (this.showEditForm) {
        this.editedTask = { ...this.task }; // Copy task data to editedTask
      }
    },

    updateTask() {
      this.editTaskActions({
        taskId: this.task.id,
        updatedTask: this.editedTask,
      });
      this.showEditForm = false;
    },

    // cancel editing and hide the edit form
    cancelEditTask() {
      this.showEditForm = false;
    },
    initDrag() {
      interact(`#task-${this.task.id}`).draggable({
        inertia: true,
        listeners: {
          move: (e) => {
            this.item.x += e.dx;
            this.item.y += e.dy;
            e.target.style.zIndex = 3;
          },
          end: () => (this.item = { x: 0, y: 0 }),
        },
      });
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    truncateDescription(description) {
      const maxLength = 50;
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.slice(0, maxLength) + "...";
      }
    },
    togglePriorityDropdown() {
      this.showPriorityDropdown = !this.showPriorityDropdown;
    },
    selectPriority(priority) {
      this.task.priority = priority;
      this.editedTask.priority = priority;

      this.editTaskActions({
        taskId: this.task.id,
        updatedTask: this.task,
      });
      this.showPriorityDropdown = false;
    },
    updateTaskPriority(priority) {
      this.editedTask.priority = priority;
    },
  },
  computed: {
    getPosition() {
      return `transform: translate(${this.item.x}px, ${this.item.y}px);`;
    },
  },
};
</script>
<style scoped>
.task {
  cursor: grab;
}
.dots-icon {
  cursor: pointer;
}

.yes-drop:hover .dots-icon {
  display: block;
}

.dropdown-menu {
  position: absolute;
  top: 39px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  display: none;
  color: black;
  width: 50%;
}

.dots-icon .dropdown-menu {
  display: block;
}

.dropdown-menu button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  width: 100%;
  text-align: left;
}

.dropdown-menu button:hover {
  background-color: #f0f0f0;
}
</style>
