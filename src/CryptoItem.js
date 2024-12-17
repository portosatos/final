import React, { useState } from "react";

function CryptoItem({ crypto }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.card}>
      <div style={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3 style={styles.name}>{crypto.name}</h3>
        <span style={styles.symbol}>{crypto.symbol}</span>
      </div>
      {isOpen && (
        <div style={styles.details}>
          <p>Price USD: ${crypto.price_usd}</p>
          <p>Price BTC: {crypto.price_btc}</p>
          <p>
            Market Cap: ${crypto.market_cap_usd}{" "}
            <span style={styles.tooltip}>
              (The market capitalization of a cryptocurrency is calculated by
              multiplying the number of coins in circulation by the current
              price.)
            </span>
          </p>
          <p>
            Change 24h:{" "}
            <span
              style={{
                color: crypto.percent_change_24h > 0 ? "green" : "red",
              }}
            >
              {crypto.percent_change_24h}%
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    margin: "10px 0",
    padding: "10px",
    cursor: "pointer",
    textAlign: "left",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    margin: 0,
  },
  symbol: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#555",
  },
  details: {
    marginTop: "10px",
  },
  tooltip: {
    fontSize: "12px",
    color: "#999",
  },
};
export default CryptoItem;