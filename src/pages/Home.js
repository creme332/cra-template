import { Link } from "react-router-dom";

function Home() {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="App">
      <header>
        <p>⚛ cra-template</p>
        <img height={100} width={100} src={leaf} alt="Image of a leaf" />
      </header>
    </div>
  );
}

export default Home;
