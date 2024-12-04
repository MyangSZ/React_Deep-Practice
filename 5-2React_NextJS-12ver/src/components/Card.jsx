import { Link } from "react-router-dom";

export default function Card({ animal }) {
  return (
    <li>
      <Link to={`/detail/${animal.id}`}>
        <img src={animal.img} />
        <div>{animal.name}</div>
      </Link>
    </li>
  )
}