import { useDispatch } from "react-redux";
import { SearchFormStyled, InputStyled, ButtonDelete, ButtonAdd, TaskContainer, ButtonStyled } from "./AddNewTaskStyles";
import { clearTasks } from "../../store/appSlice";

const AddNewTask = ({ handleSubmit, inputTask, handleChange}) => {
    const dispatch = useDispatch();
    return (

        <>
            <TaskContainer>
                <SearchFormStyled onSubmit={handleSubmit}>
                    <InputStyled type="text" placeholder="Ingresa una tarea" value={inputTask} onChange={handleChange} />
                </SearchFormStyled>
                <ButtonStyled>
                    <ButtonAdd type="submit" onClick={handleSubmit}>Agregar</ButtonAdd>
                    <ButtonDelete onClick={() =>
                        dispatch(clearTasks())} >Borrar Todo</ButtonDelete>
                </ButtonStyled>
                
            </TaskContainer>
            
        </>

    );
};

export default AddNewTask;