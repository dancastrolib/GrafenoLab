export default function Card({ title, text, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card__image" />}
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
}