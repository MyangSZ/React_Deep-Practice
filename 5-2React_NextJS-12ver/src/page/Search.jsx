import { useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";
import Card from "../components/Card";

function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("animal");
  const reg = getRegExp(param);

  const filteredData = data.filter((el) => el.name.match(reg));

  return (
    <ul>
      {filteredData.map((el) => (
        <Card key={el.id} animal={el} />
      ))}
    </ul>
  );
}

export default Search;
