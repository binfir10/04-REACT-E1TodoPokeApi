import React from "react"
import { ButtonStyled, TaskContainerStyled, WrapperTask } from "./TaskRenderStyles.js"

const TaskRender = ({ handleRemoveTask, tasksList}) => {
    return (
        <>
            <TaskContainerStyled>
                {tasksList.map((tarea) => (
                    <WrapperTask key={tarea.id} tasks={tarea.title}>
                        <h2>{tarea.title}</h2>
                        <ButtonStyled onClick={() => handleRemoveTask(tarea.id)}>Borrar Tarea</ButtonStyled>
                    </WrapperTask>
                ))}
            </TaskContainerStyled>
        </>
    )
}

export default TaskRender

