import React from 'react';
import profile from '../../static/images/profile.png';
import Sorting from './Sorting';

const Aside = () => {
  return (
    <aside>
      <section id="info">
        <img src={profile} alt="profile" />
        <h3>Witaj ponownie!</h3>
        <div>Username</div>
      </section>
      <section id="menu">
        <h3>Sortuj według:</h3>
        <Sorting />
      </section>
    </aside>
  );
};

export default Aside;
