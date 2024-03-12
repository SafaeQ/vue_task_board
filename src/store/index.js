import { createStore } from 'vuex';
import { STATUS } from './types';

export default createStore({
    state: {
        columns: [
            {
                id: 1,
                title: "To-Do",
                status: "To-Do",
                tasks: [
                    {
                        id: 654654,
                        title: "Add discount code to checkout page",
                        date: "2023-06-22",
                        type: "Feature Request",
                        status: "To-Do",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                    {
                        id: 145687,
                        title: "Provide documentation on integrations",
                        date: "2023-07-53",
                        status: "To-Do",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
            {
                id: 2,
                title: "In Progress",
                status: "In-Progress",
                tasks: [
                    {
                        id: 646545,
                        title: "Design shopping cart dropdown",
                        date: "2023-01-25",
                        type: "Design",
                        status: "In-Progress",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
            {
                id: 3,
                title: "Review",
                status: "Review",
                tasks: [
                    {
                        id: 956746,
                        title: "Provide documentation on integrations",
                        date: "2023-06-18",
                        status: "Review",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
            {
                id: 4,
                title: "Done",
                status: "Done",
                tasks: [
                    {
                        id: 456546,
                        title: "Add discount code to checkout page",
                        date: "2023-06-27",
                        type: "Feature Request",
                        status: "Done",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                    },
                ],
            },
        ],
    },
    getters: {
        columns: state => state.columns,

    },
    mutations: {
        addTask(state, { columnId, newTask }) {
            const column = state.columns.find(column => column.id === columnId);
            if (!column) return;

            const statusColumnMap = {
                [STATUS.ToDo]: 'To-Do',
                [STATUS.InProgress]: 'In-Progress',
                [STATUS.Review]: 'Review',
                [STATUS.Done]: 'Done'
            };

            const targetColumn = state.columns.find(col => col.status === newTask.status);
            const columnName = statusColumnMap[newTask.status];

            if (targetColumn) {
                targetColumn.tasks.push(newTask);
            } else if (columnName) {
                state[columnName].tasks.push(newTask);
            } else {
                column.tasks.push(newTask);
            }
        },
        dropTask(state, { task, from, to }) {
            let newCol = {}
            let targetTask = {}

            state.columns = state.columns.map(column => {
                if (column.id == from) {
                    column.tasks = column.tasks.filter(t => {
                        if (t.id == task) {
                            targetTask = t
                            return false
                        }
                        return true
                    })
                }
                return column
            });
            if (targetTask) {
                state.columns = state.columns.map(column => {
                    if (column.id == to) {
                        column.tasks.push(targetTask)
                    }
                    return column
                });
            }
        },
        deleteTask(state, { taskId }) {
            state.columns.forEach(column => {
                column.tasks = column.tasks.filter(task => task.id !== taskId);
            });
        },
        editTask(state, { taskId, updatedTask }) {
            state.columns.forEach(column => {
                column.tasks = column.tasks.map(task => {
                    if (task.id === taskId) {
                        // update the task with the new data
                        return { ...task, ...updatedTask };
                    }
                    return task;
                });
            });
        }
    },
    actions: {
        addTaskAction({ commit }, { columnId, newTaskData }) {
            commit('addTask', { columnId, newTask: newTaskData });
        },
        dropActions({ commit }, { task, from, to }) {
            commit('dropTask', { task, from, to })
        },
        deleteTaskActions({ commit }, { taskId }) {
            commit('deleteTask', { taskId })
        },
        editTaskActions({ commit }, { taskId, updatedTask }) {
            commit('editTask', { taskId, updatedTask })
        }
    }
});