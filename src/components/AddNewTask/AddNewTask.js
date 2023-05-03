import { SearchFormStyled, InputStyled, ButtonDelete, ButtonAdd, TaskContainer, ButtonStyled } from "./AddNewTaskStyles";

const AddNewTask = ({ handleSubmit, inputTask, handleChange, handleClearTasks }) => {
    return (

        <>
            <TaskContainer>
                <SearchFormStyled onSubmit={handleSubmit}>
                    <InputStyled type="text" placeholder="Ingresa una tarea" value={inputTask} onChange={handleChange} />
                </SearchFormStyled>
                <ButtonStyled>
                    <ButtonAdd type="submit" onClick={handleSubmit}>Agregar</ButtonAdd>
                    <ButtonDelete onClick={handleClearTasks}>Borrar Todo</ButtonDelete>
                </ButtonStyled>
                
            </TaskContainer>
            
        </>

    );
};

export default AddNewTask;