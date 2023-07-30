import styles from './Tarjeta.module.css';

function Tarjeta(props) {
  return (
    <div className={styles.contenedor}>
      <img src={props.img}/>
      <p className={styles.texto}>{props.children}</p>
    </div>
  );
}

export default Tarjeta;