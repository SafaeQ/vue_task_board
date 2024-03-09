<template>
  <div class="flex flex-row justify-between p-8">
    <div class="flex gap-3">
      <button
        class="w-32 bg-slightlyGray hover:bg-royalBlue font-semibold py-2 px-4 border border-gray92 rounded-lg"
      >
        <span class="text-dimGray">Add Task</span>
      </button>
      <button
        class="w-32 bg-slightlyGray hover:bg-royalBlue text-dimGray font-semibold py-2 px-4 border border-gray92 rounded-lg"
      >
        Filter
      </button>
    </div>
    <div>
      <button
        class="w-32 bg-slightlyGray hover:bg-royalBlue font-semibold py-2 px-4 border border-gray92 rounded-lg"
      >
        <span class="text-dimGray"> Share</span>
      </button>
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
