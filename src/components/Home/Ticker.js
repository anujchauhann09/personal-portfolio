import { TICKER_ITEMS } from "../../constants/hero";

function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {TICKER_ITEMS.map((item, i) => (
          <div className="ticker-item" key={i}>
            <span>✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
