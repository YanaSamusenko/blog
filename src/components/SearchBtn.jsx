import icon from '../assets/search.svg';

export function SearchBtn() {
  return (
    <div
      className="searchBtn"
      style={{width: '50px', height: '50px'}}
    >
      <a href="#">
        <img src={icon} alt="search-icon" />
      </a>
    </div>
  );
}
