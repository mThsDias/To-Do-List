import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import { useModal } from "../../functions";
import { Modal } from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg-green.png";
import "./Home.css";

function Home() {
  const [name, setName] = useState<string>("");

  const { isOpen, modalMessage, closeModal, openModal } = useModal();

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleInputClick = () => {
    if (name === "") {
      openModal("Por favor, digite seu nome!");
    } else {
      navigate(`/user/${name}`);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleInputClick();
  };

  return (
    <section className="container-section">
      <div className="container">
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
            onSubmit={handleSubmit}
          />
          <span onClick={handleInputClick}>Entrar</span>
        </div>
      </div>
      {isOpen && <Modal onClose={closeModal}>{modalMessage}</Modal>}
    </section>
  );
}

export default Home;
