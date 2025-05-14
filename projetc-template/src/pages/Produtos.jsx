import React from 'react'
import produtos from '../assets/data/Produtos'
import { Link } from 'react-router'

const Produtos = () => {
    return (
        <div className='produtos-list'>
            <p>Produtos</p>
            <div className='produtos-table'>
                <table border='.1'>
                    <tr>
                        <th></th>
                        <th>Imagem</th>
                        <th>Titulo Produto</th>
                        <th>SKU</th>
                        <th>Preço</th>
                        <th>Marca</th>
                    </tr>
                    {produtos.map((produtos, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td><img src={produtos.imgProd[0]} alt={produtos.nomeCategoria} style={{ width: 'auto', height: '80px' }} /></td>
                            <td>{produtos.titulo}</td>
                            <td>{produtos.sku}</td>
                            <td>R$ {produtos.preco.toFixed(2).replace('.', ',')}</td>
                            <td>{produtos.marca}</td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}

export default Produtos