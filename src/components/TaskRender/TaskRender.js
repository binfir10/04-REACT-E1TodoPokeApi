import React from "react"
import { ButtonStyled, TaskContainerStyled, WrapperTask } from "./TaskRenderStyles.js"
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../store/appSlice.js";

const TaskRender = () => {
    const tasksList = useSelector(state => state.taskApp.tasks);
    const dispatch = useDispatch();

    return (
        <>
            <TaskContainerStyled>
                {tasksList.map((tarea) => (
                    <WrapperTask key={tarea.id} tasks={tarea.title}>
                        <span>{tarea.fecha } Hs.</span>
                        <span>{tarea.title}</span>
                        <ButtonStyled onClick={() =>
                            dispatch(removeTask(tarea.id))}>Borrar Tarea</ButtonStyled>
                    </WrapperTask>
                ))}
            </TaskContainerStyled>
        </>
    )
}

export default TaskRender

