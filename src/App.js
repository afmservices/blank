import { useState } from 'react';
import logo from './_ 1.png';
import axios from 'axios';
import './App.css';

import image from './image';
import afm from './afmLogo.png'

function App() {
  
  const [iin, setIin] = useState('')

  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleSubmit = () => {
    axios
      .post('https://amlacademy.kz/api/trash/add',null, {params:{iin}})
      .then((res) => {
        console.log(res)
        setModal(true)
      })
  }

  return (
    <div className="App">
      {modal == false ? 
        <div className="container">
          <div className='logowithname'>
            <img src={afm} alt="" className="logo" />
            <a className='title'>АГЕНТСТВО <span className='second'>ПО ФИНАНСОВОМУ</span> МОНИТОРИНГУ <span className='span'>РЕСПУБЛИКИ КАЗАХСТАН</span></a>
          </div>
        <a className='text'>Бюро пропусков</a>
        <input className="input" placeholder='Введите ИИН' type='text' value={iin} onChange={(e) => setIin(e.target.value)}/>
        <a className='button' onClick={handleSubmit} style={{marginTop: '10%'}}>
          Войти
        </a>
        </div>
        : 
        <div className="container">
        <a className='title2'>Пропуск оформлен!</a>
        </div>
      }
    </div>
  );
}

export default App;
