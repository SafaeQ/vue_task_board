<template>
  <div class="flex flex-row justify-between py-6">
    <div class="flex gap-3">
      <button
        class="w-32 flex flex-row items-center gap-1 bg-slightlyGray hover:bg-royalBlue font-semibold py-2 px-4 border border-gray92 rounded-lg"
      >
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
        <span class="text-dimGray">Add Task</span>
      </button>
      <div class="" @click="toggleFilterDropdown">
        <button
          class="w-32 relative bg-slightlyGray hover:bg-royalBlue text-dimGray font-semibold py-2 px-4 border border-gray92 rounded-lg"
        >
          Filter
        </button>
        <div
          class="absolute w-auto px-2 py-2 h-24 flex flex-row  items-center gap-1 z-20 bg-white border border-gray300 rounded-lg mt-1 shadow-md"
          v-show="showFilterDropdown"
        >
          <!-- Filter options -->
          <button
            class="block w-full text-dimGray h-8 border border-r border-gray300 rounded-md px-4 hover:bg-slightlyGrayBg"
            @click="setFilter('Low')"
          >
            Low
          </button>
          <button
            class="block w-full text-dimGray h-8 border-r border border-gray300 rounded-md px-4 hover:bg-slightlyGrayBg"
            @click="setFilter('Medium')"
          >
            Medium
          </button>
          <button
            class="block w-full text-dimGray h-8 border-r border border-gray300 rounded-md px-4 hover:bg-slightlyGrayBg"
            @click="setFilter('Hight')"
          >
            Hight
          </button>
          <!-- Add more options as needed -->
        </div>
      </div>
    </div>
    <div class="flex">
      <button
        class="w-32 flex flex-row items-center justify-center gap-2 bg-slightlyGray hover:bg-royalBlue font-semibold py-2 px-4 border border-gray92 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          class="text-dimGray"
          viewBox="0 0 448 512"
        >
          <path
            d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
          />
        </svg>
        <span class="text-dimGray">Share</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilterDropdown: false,
      selectedFilter: null,
    };
  },
  methods: {
    toggleFilterDropdown() {
      this.showFilterDropdown = !this.showFilterDropdown;
    },
    setFilter(option) {
      this.selectedFilter = option;
      console.log("Selected filter:", option);
    },
  },
};
</script>
