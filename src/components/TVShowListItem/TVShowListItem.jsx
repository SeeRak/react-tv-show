import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import style from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div
      onClick={() => {
        onClick(tvShow);
      }}
      className={style.container}
    >
      <img
        alt={tvShow.name}
        className={style.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={style.title}>{tvShow.name}</div>
    </div>
  );
}
