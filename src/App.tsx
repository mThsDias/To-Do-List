import { Input } from "./components/Input/Input";
import bg from "./assets/bg-green.png";
import "./app.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <main className="container-main">
      <section className="box-section">
        <div>
          <img src={bg} alt="background-image" />
        </div>
        <div>
          <h1>TO DO LIST</h1>
          <p>
            Bem-vindo ao nosso incrível aplicativo de lista de tarefas! Estamos
            animados em tê-lo a bordo para ajudá-lo a organizar seu dia de
            maneira eficiente e sem estresse. Antes de começarmos, gostaríamos
            de conhecê-lo melhor.
          </p>
          <Input
            type="text"
            name="Nome"
            placeholder="Digite seu nome"
            id="nome"
            onChange={handleInputChange}
            value={name}
          />
          <span>Entrar</span>
        </div>
      </section>
    </main>
  );
}

export default App;
