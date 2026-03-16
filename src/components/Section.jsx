export default function Section({ id, title, children }) {
  return (
    <section id={id} className="content-section">
      <div className="content-section__container">
        <h2>{title}</h2>
        <div className="content-section__text">{children}</div>
      </div>
    </section>
  );
}