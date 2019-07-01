import style from "./style.css";

const ActivityCard = props => {
  console.log(props);
  const { title, description, comments, position } = props;
  return (
    <div className={style.cardContainer}>
      <div className={style.cardGrid}>
        <div className={style.cardHeader}>
          <h1>{title}</h1>
          <h3>{position}</h3>
        </div>
        <div className={style.cardSeperator} />
        <div className={style.cardBody}>
          <p>{description}</p>
        </div>
        <div className={style.cardSeperator} />
        <div className={style.cardFooter}>
          <button>{comments || "0"} Comments</button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
