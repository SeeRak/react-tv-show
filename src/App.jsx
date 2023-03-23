import "./global.css";
import style from "./style.module.css";

export function App() {
  return (
    <div className={style.main_container}>
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_details}>Details</div>
      <div className={style.recommendations}>Recommendations</div>
    </div>
  );
}
