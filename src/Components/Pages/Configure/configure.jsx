import React, { useState } from 'react';
import './configure.scss';
import TaxAndSwapForm from './taxAndSwapForm';
import ConfigureAddressForm from './configureAddressForm';
import HMNTokenAddress from './HMNTokenAddress';
import AddTokenToMigrateReseve from './addTokenToMigrateReseve';

const CONFIGURE_MENU = [
  {
    action: 'ConfigureTaxAndSwap',
    label: 'Configure Tax And Swap',
  },
  {
    action: 'ConfigureAddresses',
    label: 'Configure Addresses',
  },
  {
    action: 'SetHMNTokenAddresses',
    label: 'Set HMN Token Address',
  },
  {
    action: 'feeDistributor',
    label: 'Fee Distribution',
  },
  {
    action: 'addTokenToReserve',
    label: 'Add Tokens',
  },
];
export default function Configure() {
  const [selectedForm, setSelectedForm] = useState(CONFIGURE_MENU[0].label);

  return (
    <div className="configure">
      <div className="configureCenter">
        <h2 className="configureheading">Configure Token And Address</h2>
        <div className="youpay">
          <div className="payItems">
            {CONFIGURE_MENU?.map((item) => {
              return (
                <div className="menuBtn">
                  <button
                    className="btn"
                    onClick={() => {
                      setSelectedForm(item.label);
                    }}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="configureForm">
            {selectedForm === CONFIGURE_MENU[0].label ? (
              <TaxAndSwapForm />
            ) : selectedForm === CONFIGURE_MENU[1].label ? (
              <ConfigureAddressForm isSelected={selectedForm} />
            ) : 
            selectedForm === CONFIGURE_MENU[2].label ?
            (
              <HMNTokenAddress />
            )
          :
              <AddTokenToMigrateReseve/>
          }
          </div>
        </div>
      </div>
    </div>
  );
}
