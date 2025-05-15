import React from 'react'
import produtos from '../assets/data/Produtos'
import { Link } from 'react-router'

const Produtos = () => {
    return (
        <div className='container'>
            <div className="parent">
                {produtos.map((produtos, index) => (
                    <div className='produtos-container' key={index}>
                        <div className="div6"><input type="checkbox" value={produtos.userRefID} id={produtos.id} /></div>
                        <div className="div1"><img src={produtos.imgProd[0]} alt="" style={{height: '80px', width: '80px', objectFit: 'contain'}} /></div>
                        <div className="div2">{produtos.titulo}</div>
                        <div className="div3">{produtos.sku}</div>
                        <div className="div4">R$ {produtos.preco.toFixed(2).replace('.',',')}</div>
                        <div className="div5">{produtos.marca}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Produtos