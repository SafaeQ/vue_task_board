<template>
  <div class="flex flex-row gap-6 relative">
    <!-- Columns -->
    <div
      class="flex flex-col gap-4"
      id="todo-column"
      v-for="column in columns"
      :key="column.title"
    >
      <div class="flex flex-row justify-between text-dimGray w-80 px-1">
        <span class="text-dimGray">{{ column.title }}</span>
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
  // data() {
  //   return {
  //     columns: [
  //       {
  //         id: 1,
  //         title: "To-Do",
  //         tasks: [
  //           {
  //             id: 654654,
  //             title: "Add discount code to checkout page",
  //             date: "2023-06-22",
  //             type: "Feature Request",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //           },
  //           {
  //             id: 145687,
  //             title: "Provide documentation on integrations",
  //             date: "2023-07-53",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         title: "In Progress",
  //         tasks: [
  //           {
  //             id: 646545,
  //             title: "Design shopping cart dropdown",
  //             date: "2023-01-25",
  //             type: "Design",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //           },
  //         ],
  //       },
  //       {
  //         id: 3,
  //         title: "Review",
  //         tasks: [
  //           {
  //             id: 956746,
  //             title: "Provide documentation on integrations",
  //             date: "2023-06-18",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //           },
  //         ],
  //       },
  //       {
  //         id: 4,
  //         title: "Done",
  //         tasks: [
  //           {
  //             id: 456546,
  //             title: "Add discount code to checkout page",
  //             date: "2023-06-27",
  //             type: "Feature Request",
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //           },
  //         ],
  //       },
  //     ],
  //   };
  // },
};
</script>
