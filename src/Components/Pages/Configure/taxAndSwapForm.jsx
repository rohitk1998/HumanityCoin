export default function TaxAndSwapForm() {
  return (
    <div className="form-container">
      <div className="input-row">
        <label htmlFor="input1">Swap Trigger</label>
        <input type="text" id="input1" placeholder="unit256" />
      </div>
      <div className="input-row">
        <label htmlFor="input2">Purchase Tax</label>
        <input type="text" id="input2" placeholder="unit256"  />
      </div>
      <div className="input-row">
        <label htmlFor="input3">Sales Tax</label>
        <input type="text" id="input3"  placeholder="unit256" />
      </div>
      <div className="centered-button">
      <button>SIGN TRANSACTION</button>
      </div>
    </div>
  );
}
