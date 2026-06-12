import style from "./Card.module.css";
const Card = () => {
  return (
    <section id={style.CardContainer}>
      <div className={style.userImage}>👤</div>
      <h1 className={style.userName}>John Doe</h1>
      <p className={style.desig}>Frontend Developer</p>
      <p className={style.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
        perspiciatis dolorem ut molestiae velit voluptates itaque delectus
        ratione minus, maxime reprehenderit ex in tempora aperiam nobis non,
        ipsam,
      </p>
      <button className={style.btn}>Hire me</button>
    </section>
  );
};
export default Card;
