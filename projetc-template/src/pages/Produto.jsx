import React from 'react'
import produtos from '../assets/data/Produtos'
import { useParams } from 'react-router'

const Produto = () => {
    const { id } = useParams()

    const ProdutoSelect = produtos.find(a => String(a.id) === id);

    return (
        <>
            <div><p style={{ textAlign: 'center' }}>ID do Pooduto <br /> {ProdutoSelect.id}</p></div>
            <form action="" method="post" style={{textAlign: 'center'}}>
                <input type="text" value={ProdutoSelect.titulo} id="titulo" /><br />
                <input type="text" value={ProdutoSelect.sku} id='sku' /><br />
                <input type="text" value={ProdutoSelect.preco} id="preco" /><br />
                <input type="text" value={ProdutoSelect.marca} /> <br />
                <textarea value={ProdutoSelect.sobre} id="sobre" /><br /><br />
                <input type="submit" value="Salvar Alterções" />
            </form>
        </>
    )
}

export default Produto