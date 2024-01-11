import { useState } from "react";
import { useParams } from "react-router-dom";
import pictureUser from "../../assets/luffy.png";
import { FaTrash } from "react-icons/fa";
import { Input } from "../../components/Input/Input";
import "./User.css";

function User() {
  const [task, setTask] = useState<string>("");
  const [taskDay, setTaskDay] = useState<string[]>([]);
  const [taskNight, setTaskNight] = useState<string[]>([]);
  const [selectedTask, setSelectedTask] = useState<string>("day");
  const [taskDoneDay, setTaskDoneDay] = useState<boolean[]>(
    new Array(10).fill(false)
  );
  const [taskDoneNight, setTaskDoneNight] = useState<boolean[]>(
    new Array(10).fill(false)
  );

  const { name } = useParams<{ name: string }>();

  const handleCheckboxChange = (index: number, period: string) => {
    if (period === "day") {
      const updatedTasksDone = [...taskDoneDay];
      updatedTasksDone[index] = !updatedTasksDone[index];
      setTaskDoneDay(updatedTasksDone);
    } else {
      const updatedTasksDone = [...taskDoneNight];
      updatedTasksDone[index] = !updatedTasksDone[index];
      setTaskDoneNight(updatedTasksDone);
    }
  };

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const MAX_TASK_LENGTH = 50;

  const handleAddTask = () => {
    const newTask = task.trim();

    if (newTask !== "") {
      if (newTask.length <= MAX_TASK_LENGTH) {
        let updatedTasks;

        if (selectedTask === "day") {
          if (!taskDay.includes(newTask) && taskDay.length < 9) {
            updatedTasks = [...taskDay, newTask];
            setTaskDay(updatedTasks);
            setTaskDoneDay((prevState) => [...prevState, false]);
          } else if (taskDay.includes(newTask)) {
            alert("Tarefa já adicionada.");
          } else {
            alert("Limite de tarefas para o dia atingido (máximo 9).");
          }
        } else {
          if (taskNight.length < 9) {
            updatedTasks = [...taskNight, newTask];
            setTaskNight(updatedTasks);
            setTaskDoneNight((prevState) => [...prevState, false]);
          } else if (taskNight.includes(newTask)) {
            alert("Tarefa já adicionada.");
          } else {
            alert("Limite de tarefas para a noite atingido (máximo 9).");
          }
        }

        setTask("");
      } else {
        alert(`Limite de caracteres excedido (máximo ${MAX_TASK_LENGTH}).`);
      }
    }
  };

  const handleRemoveTask = (index: number, period: string) => {
    if (period === "day") {
      const updatedTasksDay = [...taskDay];
      updatedTasksDay.splice(index, 1);
      setTaskDay(updatedTasksDay);

      const updatedDoneDay = [...taskDoneDay];
      updatedDoneDay.splice(index, 1);
      setTaskDoneDay(updatedDoneDay);
    } else {
      const updatedTasksNight = [...taskNight];
      updatedTasksNight.splice(index, 1);
      setTaskNight(updatedTasksNight);

      const updatedDoneNight = [...taskDoneNight];
      updatedDoneNight.splice(index, 1);
      setTaskDoneNight(updatedDoneNight);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleAddTask();
  };

  return (
    <section className="container-section-user">
      <div className="box-user">
        <div className="picture-user">
          <img src={pictureUser} alt="Foto do usuário" />
        </div>
        <div className="text-user">
          <span>{name}</span>
        </div>
        <div className="sub-text">
          <div className="sub-title">
            <span>Olá {name?.split(" ")[0]}</span>
          </div>
          <p>
            Seja bem-vindo ao seu novo espaço de organização pessoal! Agora que
            você está conectado ao nosso To-Do List, a magia da produtividade
            está literalmente em suas mãos. Aqui, você pode facilmente marcar
            suas tarefas diárias, criando um ambiente mais tranquilo e eficiente
            para o seu dia.
          </p>
        </div>
        <menu className="nav-bar">
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </menu>
      </div>
      <div className="container-task">
        <div className="title-task">
          <span>Lista de Tarefas</span>
        </div>
        <div className="container-input">
          <div className="input-task">
            <Input
              type="text"
              placeholder="Digite sua tarefa"
              onChange={handleTask}
              value={task}
              id="task"
              onSubmit={handleSubmit}
            />
          </div>
          <div className="box-task-buttons">
            <div onClick={handleAddTask} className="button-task">
              <span>Adicionar</span>
            </div>
            <div className="period-selector">
              <select
                id="period"
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.target.value)}
              >
                <option value="day">Dia</option>
                <option value="night">Noite</option>
              </select>
            </div>
          </div>

          <div className="box-day-night">
            <div>
              <span className="box-day">Dia</span>
            </div>
            <div>
              <span className="box-night">Noite</span>
            </div>
          </div>
          <div className="card-tasks">
            <div className="box-card">
              {taskDay.map((task, index) => (
                <div className="card" key={index}>
                  <ul>
                    <li>{task}</li>
                  </ul>
                  <div className="check-trash">
                    <input
                      type="checkbox"
                      checked={taskDoneDay[index]}
                      onChange={() => handleCheckboxChange(index, "day")}
                    />
                    <div className="svg">
                      <FaTrash onClick={() => handleRemoveTask(index, "day")} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="box-card">
              {taskNight.map((task, index) => (
                <div className="card" key={index}>
                  <span>{task}</span>
                  <div className="check-trash">
                    <input
                      type="checkbox"
                      checked={taskDoneNight[index]}
                      onChange={() => handleCheckboxChange(index, "night")}
                    />
                    <div className="svg">
                      <FaTrash
                        onClick={() => handleRemoveTask(index, "night")}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
