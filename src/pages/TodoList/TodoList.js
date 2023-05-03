import { useEffect, useState } from 'react'
import { MyAppContainer } from './TodoListStyles.js'
import TaskRender from '../../components/TaskRender/TaskRender.js'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, clearTasks, removeTask, setTasks } from "../../store/appSlice.js";
import AddNewTask from '../../components/AddNewTask/AddNewTask.js'

function TodoList() {
  const [inputTask, setInputTask] = useState("");
  const tasksList = useSelector(state => state.taskApp.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("tasks"))
    if (storedTask && storedTask.length > 0) {
      dispatch(setTasks(storedTask));
    }
  }, [dispatch]);
  
  function handleChange(e) {
    setInputTask(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (inputTask.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: inputTask
      }
      dispatch(addTask(newTask));
      setInputTask('');
    }
    else {
      alert("Debe ingresar una tarea")
    }
  };
  
  const handleRemoveTask = id => {
    dispatch(removeTask(id));
  };

  const handleClearTasks = () => {
    dispatch(clearTasks());
  };


  return (
    <>
      <MyAppContainer>
        <h1>TODO LIST</h1>
        <AddNewTask handleSubmit={handleSubmit} inputTask={inputTask} handleChange={handleChange} handleClearTasks={handleClearTasks} />
        {tasksList.length === 0 && <h2 style={{ color: "yellow" }}>No hay tareas</h2>}
        {tasksList && <TaskRender tasksList={tasksList} handleRemoveTask={handleRemoveTask} />}
      </MyAppContainer>
    </>
  )
}

export default TodoList;