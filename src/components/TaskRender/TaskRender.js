import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../store/appSlice.js";

const TaskRender = () => {
    const tasksList = useSelector(state => state.taskApp.tasks);
    const dispatch = useDispatch();

    return (
        <>
            <ul className="flex justify-start w-full max-w-xl items-center flex-col gap-1">
                {tasksList.map((tarea) => (
                    <li className="bg-neutral-900 w-full items-center text-white shadow-2xl shadow-teal-950 flex p-2 rounded-lg border border-neutral-700" key={tarea.id} tasks={tarea.title}>
                    <div className="flex flex-col w-full gap-4 pt-1 pb-2">
                        <span className="text-sm underline underline-offset-4 text-neutral-400 decoration-neutral-600">{tarea.fecha }</span>

                        <span className="text-2xl capitalize">{tarea.title}</span>
                    </div>
                        <button className="bg-pink-900 hover:bg-pink-800 px-2 w-20 h-9 py-1 rounded-xl" onClick={() =>
                            dispatch(removeTask(tarea.id))}>Borrar </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskRender

