import React from 'react'
import produtos from '../assets/data/Produtos'
import { useParams } from 'react-router'

const Produto = () => {
    const { id } = useParams()

    const ProdutoSelect = produtos.find(a => String(a.id) === id);

    return (
        <>
            <div>{ProdutoSelect.titulo}</div>
            <form action="" method="post"></form>
            <input type="text" value={ProdutoSelect.titulo} id="" />
        </>
    )
}

export default Produto