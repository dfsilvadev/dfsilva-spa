import "./styles.scss";

export default function BurgerButton() {
  return (
    <div className="burger-button" role="button" aria-label="Abrir menu">
      <input
        className="burger-button__checkbox"
        type="checkbox"
        aria-hidden
        tabIndex={-1}
      />
      <div className="burger-button__lines">
        <span className="burger-button__line" />
        <span className="burger-button__line" />
      </div>
    </div>
  );
}
