export default function ConfigureAddressForm() {
    return (
      <div className="form-container">
        <div className="input-row">
          <label htmlFor="input1">Swap Trigger</label>
          <input type="text" id="input1" placeholder="address" />
        </div>
        <div className="input-row">
          <label htmlFor="input2">Purchase Tax</label>
          <input type="text" id="input2" placeholder="address"  />
        </div>
        <div className="input-row">
          <label htmlFor="input3">Sales Tax</label>
          <input type="text" id="input3"  placeholder="address" />
        </div>
        <div className="centered-button">
        <button>SIGN TRANSACTION</button>
        </div>
      </div>
    );
  }
  