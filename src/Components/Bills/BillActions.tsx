function BillsActions() {
  return (
    <div className="actions">
      <div className="utils">
        <button className="operations">Операції</button>
        <button className="config">Налаштування</button>
        <button className="archiv">Архівувати</button>
      </div>
      <div className="moneyOps">
        <button className="replenish">Поповнити</button>
        <button className="transfer">Переказати</button>
        <button className="writeOff">Списати</button>
      </div>
    </div>
  );
}

export default BillsActions;
