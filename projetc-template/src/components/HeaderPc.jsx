import React from 'react';
import logo from '../assets/img/Project-Template.png';
import CardUser from './CardUser';
import { Link } from "react-router";


let user = { nome: 'Victor Fernando', img: 'https://i.pravatar.cc/150?img=5', type: 'Usuário' };

const HeaderPc = () => {
  return (
    <>
      <header>
        <Link to='/' >
          <img className='logo-site' src={logo} alt="Logo Project-Template" />
        </Link>
        <div style={{ padding: "20px" }}>
          <CardUser name={user.nome} imageUrl={user.img} type={user.type} />
        </div>
      </header>


    </>
  )
}

export default HeaderPc