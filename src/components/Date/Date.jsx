import { useState } from "react";

const Date = () => {

    const [selectedDate, setSelectedDate] = useState('');

    const [mesSelecionado, setMesSelecionado] = useState('');

    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
  
    const handleChange = (event) => {
      setMesSelecionado(event.target.value);
    };

    return (<>  
<select value={mesSelecionado} onChange={handleChange}>
      <option value="" disabled hidden>Mês</option>
      {meses.map((mes, index) => (
        <option key={index} value={mes}>
          {mes}
        </option>
      ))}
    </select>
            </>)
}

export default Date;