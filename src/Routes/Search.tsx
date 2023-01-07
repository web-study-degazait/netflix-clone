import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  console.log(location);
  const keyword = new URLSearchParams(location.search).get("keyword"); //핵심 kane입력하면 kane출력
  console.log(keyword);

  return null;
}
export default Search;
