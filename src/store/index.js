import { createStore } from 'vuex';

export default createStore({
    state: {
        tasks: [],
    },
    getters: {
        todoTasks: (state) => {
            return state.tasks
        },
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, updatedTask) {
            const index = state.tasks.findIndex(task => task.id === updatedTask.id);
            if (index !== -1) {
                state.tasks.splice(index, 1, updatedTask);
            }
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
    },
    actions: {
        addTaskAction({ commit }, newTaskData) {
            commit("addTask", newTaskData);
        },
    }
});