import React from 'react';
import logo from '../assets/img/Project-Template.png';
import CardUser from './CardUser';

const HeaderPc = () => {
  return (
    <>
      <header>
        <img className='logo-site' src={logo} alt="Logo Project-Template" />
        <div style={{ padding: "20px" }}>
          <CardUser name="Victor Fernando" imageUrl="https://i.pravatar.cc/150?img=5" />
        </div>
      </header>


    </>
  )
}

export default HeaderPc