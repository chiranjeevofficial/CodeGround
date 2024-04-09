import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [chiranjeevs, setChiranjeev] = useState([]);

  useEffect(() => {
    axios
      .get("/api/chiranjeevi")
      .then((response) => {
        setChiranjeev(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Namaste! Backend</h1>
      <h2>Chiranjeevi: {chiranjeevs.length}</h2>

      {chiranjeevs.map((chiranjeev, index) => (
        <div key={chiranjeev.id}>
          <p>{chiranjeev.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
