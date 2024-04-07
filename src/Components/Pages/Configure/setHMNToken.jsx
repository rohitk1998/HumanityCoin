export default function SetHMNTokenForm() {
    return (
      <div className="form-container">
        <div className="input-row">
          <label htmlFor="input1">Old HMN Token Address</label>
          <input type="text" id="input1" placeholder="address" />
        </div>
        <div className="input-row">
          <label htmlFor="input2">New HMN Token Address</label>
          <input type="text" id="input2" placeholder="address"  />
        </div>
        <div className="centered-button">
        <button>SIGN TRANSACTION</button>
        </div>
      </div>
    );
  }
  