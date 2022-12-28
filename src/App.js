import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  const [input, setInput] = useState('')

  function handleSearch() {
    alert(input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={e => setInput(e.target.value)}
        ></input>
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="FFF"></FiSearch>
        </button>
      </div>
      <main className="main">
        <h2>Cep: 0000000</h2>
        <span>Rua teste</span>
        <span>Complemento: seila</span>
        <span>Vila rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  )
}

export default App
