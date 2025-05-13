import React from 'react'
import categorias from '../assets/data/categoria'
import { Link } from 'react-router-dom'

const Categoria = () => {
    const categoriasExibidas = categorias.slice(0, 3)
    return (
        <div className='categorias'>
            <div>
                <h1>Categorias</h1>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {categoriasExibidas.map((categoria, index) => (
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


            <div style={{ marginTop: '20px' }}>
                <Link to="/categorias">
                    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Ver todas as categorias
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Categoria