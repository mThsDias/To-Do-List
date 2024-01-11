import { useState } from "react";
import { useParams } from "react-router-dom";
import pictureUser from "../../assets/luffy.png";
import { BsTrash } from "react-icons/bs";
import { Input } from "../../components/Input/Input";
import "./User.css";

function User() {
  const [task, setTask] = useState<string>("");
  const [taskDay, setTaskDay] = useState<string[]>([]);
  const [taskNight, setTaskNight] = useState<string[]>([]);
  const [selectedTask, setSelectedTask] = useState<string>("day");

  const { name } = useParams<{ name: string }>();

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = task.trim();

    if (newTask !== "") {
      if (selectedTask === "day") {
        setTaskDay([...taskDay, newTask]);
      } else {
        setTaskNight([...taskNight, newTask]);
      }
      setTask("");
    }
  };

  const handleRemoveTask = (index: number, period: string) => {
    if (period === "day") {
      const updatedTasksDay = [...taskDay];
      updatedTasksDay.splice(index, 1);
      setTaskDay(updatedTasksDay);
    } else {
      const updatedTasksNight = [...taskNight];
      updatedTasksNight.splice(index, 1);
      setTaskNight(updatedTasksNight);
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
          <div className="teste">
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
          <div className="tasks">
            <div className="teste-1">
              <span>Dia</span>
              <span>Noite</span>
            </div>
            <div className="teste-2">
              <div className="task-day">
                {taskDay.map((task, index) => (
                  <div className="card-task" key={index}>
                    <span className="teste">{task}</span>
                    <BsTrash onClick={() => handleRemoveTask(index, "day")} />
                  </div>
                ))}
              </div>
              <div className="task-night">
                {taskNight.map((task, index) => (
                  <div className="card-task" key={index}>
                    <span className="teste">{task}</span>
                    <BsTrash onClick={() => handleRemoveTask(index, "night")} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
