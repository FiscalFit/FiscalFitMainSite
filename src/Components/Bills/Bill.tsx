import "./Bill.css";
import BillsActions from "./BillActions";
import BillInfo from "./BillInfo";
import { DataItem } from "../../types";

interface ClickableDivProps {
  item: DataItem;
  isVisible: boolean;
  onClick: () => void;
}

const Bill: React.FC<ClickableDivProps> = ({ item, isVisible, onClick }) => (
  <div className="billDesk" onClick={onClick}>
    <BillInfo
      name={item.name}
      balance={item.balance}
      currency={item.currency}
    />
    {isVisible && <BillsActions />}
  </div>
);

export default Bill;
