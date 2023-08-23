import '../../styles/Buttons.css';

export function Buttons({ clase, title, onClick }) {
  return (
    <>
      <button className={clase} onClick={onClick}>{title}</button>
    </>
  );
}
