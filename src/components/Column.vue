<template>
  <div class="flex flex-row gap-6">
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
      <div class="w-80 bg-slightlyGrayBg p-2 border-r rounded-lg">
        column
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
      <div class="w-80 bg-slightlyGrayBg p-2 border-r rounded-lg">
        column
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
export default {
  setup() {
    return {};
  },
};
</script>
