import React from 'react'
import categorias from '../assets/data/categoria'

const Home = () => {
  return (
    <div>
      <h1>Categorias</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {categorias.map((categoria, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h2>{categoria.nomeCategoria}</h2>
            <img
              src={categoria.url}
              alt={categoria.nomeCategoria}
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
