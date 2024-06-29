import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNewTask from '../../components/AddNewTask/AddNewTask.js';
import TaskRender from '../../components/TaskRender/TaskRender.js';
import { addTask, setTasks } from "../../store/appSlice.js";


function Home() {
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
      const now = new Date();
      const timeString = `${now.toLocaleDateString()}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      const newTask = {
        id: Date.now(),
        title: inputTask,
        fecha: timeString
      }
      dispatch(addTask(newTask));
      setInputTask('');
    }
    else {
      alert("Debe ingresar una tarea")
    }
  };
  return (
    <>
      <section className='flex flex-col items-center gap-4 justify-center mt-7'>
        <h1 className='text-5xl font-bold mb-2  bg-gradient-to-tr from-emerald-900 to-sky-500 bg-clip-text text-transparent'>React List App</h1>
        <AddNewTask handleSubmit={handleSubmit} inputTask={inputTask} handleChange={handleChange} />
        {tasksList.length === 0 && <h2 style={{ color: "#444" }}>No hay tareas</h2>}
        {tasksList && <TaskRender/>}
      </section>
    </>
  )
}

export default Home;