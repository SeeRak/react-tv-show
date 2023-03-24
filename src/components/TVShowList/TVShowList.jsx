import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import style from "./style.module.css";

export function TVShowList({ onClickItem, tvShowList }) {
  return (
    <>
      <div className={style.title}> Les séries liées </div>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={style.tv_show_list_item}>
              <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </>
  );
}
