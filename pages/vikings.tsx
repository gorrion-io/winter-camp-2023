import vikingsYAML from "../vikings.yaml";
import vikingsJSON from "../vikings.json";
import { handleVikingList } from "../lib/vikings";
import { Viking } from "../types/viking";
import VikingCard from "../components/VikingCard";
import style from "../styles/Vikings.module.css";
const VikingsList = () => {
  const vikingList: Array<Viking> = handleVikingList(vikingsJSON, vikingsYAML);
  return (
    <div className={style.list}>
      {vikingList.map((viking) => {
        return <VikingCard key={vikingList.indexOf(viking)} viking={viking} />;
      })}
    </div>
  );
};
export default VikingsList;
