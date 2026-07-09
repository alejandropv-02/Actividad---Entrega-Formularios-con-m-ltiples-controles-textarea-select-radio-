import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('');
  const [dia, setDia] = useState('Lunes');
  const [estudios, setEstudios] = useState('primario');

  function cambioTexto(e) {
    setTexto(e.target.value);
  }

  function cambioDia(e) {
    setDia(e.target.value);
  }

  function cambioEstudios(e) {
    setEstudios(e.target.value);
  }

  return (
    <div>
      <h2>Práctica Semana 10</h2>
      
      <h3>Control textarea</h3>
      <p>
        <textarea value={texto} onChange={cambioTexto} cols="100" rows="5" placeholder="Ingrese texto aquí..."></textarea>
      </p>
      <p>Cantidad de caracteres ingresados: {texto.length}</p>

      <h3>Control select</h3>
      <p>
        <select value={dia} onChange={cambioDia}>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
      </p>
      <p>Día seleccionado: {dia}</p>

      <h3>Controles radio</h3>
      <p>
        <input type="radio" value="primario" checked={estudios === 'primario'} onChange={cambioEstudios} />Primario
      </p>
      <p>
        <input type="radio" value="secundario" checked={estudios === 'secundario'} onChange={cambioEstudios} />Secundario
      </p>
      <p>
        <input type="radio" value="universitario" checked={estudios === 'universitario'} onChange={cambioEstudios} />Universitario
      </p>
      <p>Estudio seleccionado: {estudios}</p>
    </div>
  );
}

export default App;