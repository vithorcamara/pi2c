import { FaPerson } from "react-icons/fa6";
import { useState } from "react";
import './index.css';

const defaultUser = {
  username: "usuario123",
  xp: 450,
  missions: 3,
  coins: 1204,
  name: "Maria Joana",
  email: "mariajoana@gmail.com",
  password: "senha123.",
};

export default function Perfil() {
  const [user, setUser] = useState(defaultUser);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Salvar perfil:", user);
  };

  const stats = [
    { label: "xp", value: user.xp, bgColor: '#363636' },
    { label: "missions", value: user.missions, bgColor: '#8ce5a2' },
    { label: "raizecoins", value: user.coins, bgColor: '#363636' },
  ];

  const fields = [
    { label: "Nome", name: "name", type: "text", value: user.name },
    { label: "E-mail", name: "email", type: "email", value: user.email },
    { label: "Senha", name: "password", type: "password", value: user.password },
  ];

  return (
    <>
        <form onSubmit={handleSubmit}>
        <section className="banner">
            <FaPerson/>
            <p className="username">{user.username}</p>
        </section>

        <section className="stats">
            {stats.map((item, index) => (
            <div key={index} className="box-info" style={{backgroundColor: item.bgColor}}>
                <p className="stats">{item.value}</p>
                <p className="desc">{item.label}</p>
            </div>
            ))}
        </section>

        <section className="user-infos">
            {fields.map(({ label, name, type, value }) => (
            <div key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                />
            </div>
            ))}
        </section>

        <section className="buttons">
            <button type="submit">Salvar</button>
            <button type="button">Sair</button>
        </section>
        </form>
        <nav>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </nav>
    </>
  );
}