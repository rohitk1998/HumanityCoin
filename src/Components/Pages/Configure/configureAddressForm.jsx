import { useState } from 'react';
import { useConnectMetamask } from "../../../customHooks/useConnectMetamask";

export default function ConfigureAddressForm() {
  const [ contractInstance ] = useConnectMetamask();
  const [configureAddress, setConfigureAddress] = useState({
    swapTrigger: '',
    purchaseTax: '',
    salesTax: '',
  });

  const handleInputChange = (event) => {
    console.log('event', event.target.value);
    configureAddress[event.target.id] = event.target.value
    setConfigureAddress({...configureAddress})
  };

  const handleSubmit = async ()=> {
    console.log('DATA ON SUBMISSION',configureAddress , "contractInstance",contractInstance); 
         const tx = await contractInstance.configureAddresses("0x166C8C7Add5Fd70bbd1Eaf1E811f362CA726470A", "0x18ad99E72501baaEa6d6170ee02F451B158DCE68", "0xe3242844a25CB909db3f4eBb99Bd6BFBA2f61B94");
          const receipt = await tx.wait();
          console.log('configureAddresses transaction receipt:', receipt);
  }
  
  return (
    <div className="form-container">
      <div className="input-row">
        <label htmlFor="input1">Swap Trigger</label>
        <input
          type="text"
          id="swapTrigger"
          placeholder="address"
          value={configureAddress.swapTrigger}
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
      </div>
      <div className="input-row">
        <label htmlFor="input2">Purchase Tax</label>
        <input
          type="text"
          id="purchaseTax"
          placeholder="address"
          value={configureAddress.purchaseTax}
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
      </div>
      <div className="input-row">
        <label htmlFor="input3">Sales Tax</label>
        <input
          type="text"
          id="salesTax"
          placeholder="address"
          value={configureAddress.salesTax}
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
      </div>
      <div className="centered-button">
        <button onClick={handleSubmit}>SIGN TRANSACTION</button>
      </div>
    </div>
  );
}
