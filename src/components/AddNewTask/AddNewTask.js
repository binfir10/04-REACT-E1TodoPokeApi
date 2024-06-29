import { useDispatch } from "react-redux";
import { clearTasks } from "../../store/appSlice";

const AddNewTask = ({ handleSubmit, inputTask, handleChange }) => {
    const dispatch = useDispatch();
    return (

        <>
            <div className="flex justify-between w-full gap-5 max-w-lg">
                <form onSubmit={handleSubmit} className="w-full flex as">
                    <input type="text" placeholder="Ingresa una tarea" value={inputTask} onChange={handleChange} className="w-full rounded-md px-2 focus:text-black placeholder:font-light font-normal text-black" />
                </form>
                <div className="flex gap-3">
                    <button className="bg-teal-800/50 hover:bg-teal-900 px-2 w-20 h-9 text-center py-1 rounded-xl" type="submit" onClick={handleSubmit}>Agregar</button>
                    <button className="bg-pink-900 hover:bg-pink-800 px-2 w-20 h-9 py-1 rounded-xl" onClick={() =>
                        dispatch(clearTasks())} >Vaciar</button>
                </div>

            </div>

        </>

    );
};

export default AddNewTask;