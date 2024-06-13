function currencyLiteral(currency: string) {
  let literal = "";
  switch (currency) {
    case "UAH":
      literal = "\u20B4";
      break;
    case "USD":
      literal = "\u0024";
  }
  return literal;
}

function BillInfo(props: any) {
  return (
    <div className="billInfo">
      <div className="name">{props.name}</div>
      <div className="balanceInfo">
        <div className="balance">{props.balance}</div>
        <div className="currency">{currencyLiteral(props.currency)}</div>
      </div>
    </div>
  );
}

export default BillInfo;
