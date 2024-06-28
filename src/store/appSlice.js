import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'taskApp',
    initialState: {
        tasks: [],
        inputTask: ""
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: action.payload.id,
                title: action.payload.title,
                fecha: action.payload.fecha
            };
            state.tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        setInputTask: (state, action) => {
            state.inputTask = action.payload; // Actualiza inputTask en el estado
        },

        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(tarea => tarea.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        setTasks: (state, action) => {
            state.tasks = action.payload;
        },

        clearTasks: (state) => {
            state.tasks = [];
            localStorage.removeItem('tasks');
        },
    }
});

export const { addTask, removeTask, setTasks, clearTasks, setHasTasks} = appSlice.actions;

export default appSlice.reducer;