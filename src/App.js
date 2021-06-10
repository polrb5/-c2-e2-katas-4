import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [puntoPantalla, setPuntoPantalla] = useState({top, left})
  const numero1 = () => setCounter(counter);

  const puntoAleatorio = () =>
   top: Math.floor(Math.random() * window.innerHeight),
    left: Math.floor(Math.random() * window.innerWidth),
  });

  return (
    <>
      <div className="contenedor">
        <button className="boton-lateral">
          <i className="icono">«</i>
        </button>
        <button onClick={puntoAleatorio} className="boton">{counter}</button>
        <button onClick={puntoAleatorio} className="boton">{counter + 1}</button>
        <button onClick={puntoAleatorio} className="boton">{counter + 3}</button>
        <button onClick={puntoAleatorio} className="boton">{counter + 4}</button>
        <button onClick={puntoAleatorio} className=" boton-lateral">
          <i className="icono">»</i>
        </button>
      </div>
    </>
  );
}

export default App;
