import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/leleoaraxa.png" />
        <strong>Leonardo M Borges</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}