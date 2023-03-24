import style from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Déclarer un tableau vide
  const starList = [];
  // Nbr d'étoiles pleine
  const starFillCount = Math.floor(rating);
  // Nbr d'étoiles a moitié
  const hasStarHalf = rating - starFillCount >= 0.5;
  // Nbr d'étoiles vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"start-fill" + i} />);
  }
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"start-empty" + i} />);
  }
  return <div>{starList}</div>;
}
