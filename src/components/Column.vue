<template>
  <div class="flex flex-row gap-6">
    <div class="flex flex-col gap-4">
      <div class="w-80 bg-slightlyGrayBg p-2 border-r rounded-lg">
        <BoardTask />
        <button
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

export default {
  components: {
    BoardTask,
  },
  setup() {
    return {};
  },
};
</script>
