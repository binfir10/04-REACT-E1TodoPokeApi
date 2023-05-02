import { SearchFormStyled, InputStyled, ButtonDelete, ButtonAdd } from "./AddNewTaskStyles";

const AddNewTask = ({ handleSubmit, inputTask, handleChange, handleClearTasks }) => {
    return (

        <>
            <div style={{display: "flex", gap: "15px"}}>
                <SearchFormStyled onSubmit={handleSubmit}>
                    <InputStyled type="text" placeholder="Ingresa una tarea" value={inputTask} onChange={handleChange} />
                </SearchFormStyled>
                <ButtonAdd type="submit" onClick={handleSubmit}>Agregar</ButtonAdd>
                <ButtonDelete onClick={handleClearTasks}>Borrar Todo</ButtonDelete>
            </div>
            
        </>

    );
};

export default AddNewTask;