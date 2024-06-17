import React, { useState, useEffect } from "react";
import bills from "../../bills.json";
import Bill from "./Bill";
import "./BillsPage.css";
import { DataItem } from "../../types";

const BillsPage: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response: DataItem[] = bills;
      setData(response);
    };
    fetchData();
  }, []);

  const handleClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="bills-wrapper">
      {/* {data.map((item, index) => (
        <Bill
          item={item}
          isVisible={visibleIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
      <button className="addBill">Add</button> */}
    </div>
  );
};

export default BillsPage;
