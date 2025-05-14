import React from 'react'
import produtos from '../assets/data/Produtos'
import { Link } from 'react-router'



const Produtos = () => {
    return (
        <div className='produtos'>
            <Link to='/Produtos'>
            <p className='produtos-titulo'>Produtos</p>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em', gap: '20px', flexWrap: 'wrap' }}>
                {produtos.map((produtos, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <img src={produtos.imgProd[0]} alt={produtos.nomeCategoria} style={{ width: 'auto', height: '180px' }} />
                        <h3>{produtos.titulo}</h3>
                        <p>R$ {produtos.preco.toFixed(2).replace('.', ',')}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Produtos