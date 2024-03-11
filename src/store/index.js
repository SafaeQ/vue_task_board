import { createStore } from 'vuex';

export default createStore({
    state: {
        columns: [
            {
                id: 1,
                title: "To-Do",
                tasks: [
                    {
                        id: 654654,
                        title: "Add discount code to checkout page",
                        date: "2023-06-22",
                        type: "Feature Request",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                    {
                        id: 145687,
                        title: "Provide documentation on integrations",
                        date: "2023-07-53",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
            {
                id: 2,
                title: "In Progress",
                tasks: [
                    {
                        id: 646545,
                        title: "Design shopping cart dropdown",
                        date: "2023-01-25",
                        type: "Design",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
            {
                id: 3,
                title: "Review",
                tasks: [
                    {
                        id: 956746,
                        title: "Provide documentation on integrations",
                        date: "2023-06-18",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
            {
                id: 4,
                title: "Done",
                tasks: [
                    {
                        id: 456546,
                        title: "Add discount code to checkout page",
                        date: "2023-06-27",
                        type: "Feature Request",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
        ],
    },
    getters: {
        todoTasks: state => state.todoTasks,
        columns: state => state.columns,

    },
    mutations: {
        addTask(state, { columnId, newTask }) {
            const column = state.columns.find(column => column.id === columnId);
            if (column) {
                column.tasks.push(newTask);
            }
        },
    },
    actions: {
        addTaskAction({ commit }, { columnId, newTaskData }) {
            commit('addTask', { columnId, newTask: newTaskData });
        },
    }
});