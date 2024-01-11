import { useState } from "react";
import { useParams } from "react-router-dom";
import pictureUser from "../../assets/luffy.png";
import { Input } from "../../components/Input/Input";
import "./User.css";

function User() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const { name } = useParams<{ name: string }>();

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    const task = document.getElementById("task") as HTMLInputElement;
    setTasks([...tasks, task.value]);
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
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 2</a>
            </li>
            <li>
              <a href="">Link 3</a>
            </li>
            <li>
              <a href="">Link 4</a>
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
          <div onClick={handleAddTask} className="button-task">
            <span>Adicionar</span>
          </div>
          <div className="tasks">
            <div className="task-dia">
              <span>Dia</span>
              {tasks.map((task) => (
                <p>{task}</p>
              ))}
            </div>
            <div className="task-noite">
              <span>Noite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
