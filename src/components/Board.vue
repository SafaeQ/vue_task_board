<template>
  <div class="flex flex-row gap-5 relative board-container">
    <!-- Columns -->
    <div
      class="flex flex-col gap-4 column"
      id="todo-column"
      v-for="column in columns"
      :key="column.title"
    >
      <div class="flex flex-row sm:flex-row justify-between text-dimGray w-[316px] px-1">
        <span class="text-dimGray sm:mb-0">{{ column.title }}</span>
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
        :title="column.title"
        :tasks="column.tasks"
        :columnId="column.id"
      />
    </div>
  </div>
</template>

<script>
import Column from "./Column.vue";
import { mapState } from "vuex";

export default {
  components: {
    Column,
  },
  computed: {
    ...mapState({
      columns: (state) => state.columns,
    }),
  },
};
</script>
<style scoped>
.board-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.column {
  flex: 1 1 300px;
  min-width: 0;
}

@media screen and (max-width: 768px) {
  .flex-col {
    width: 100%;
  }
}
</style>
