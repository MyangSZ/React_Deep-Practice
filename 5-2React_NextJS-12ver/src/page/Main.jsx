import { data } from "../assets/data/data";
import Card from "../components/Card";

function Main() {
  return (
    <ul>
      {data.map((el) => (
        <Card key={el.id} animal={el} />
      ))}
    </ul>
  );
}

export default Main;
