import React, { useState } from 'react';
import './configure.scss';
import TaxAndSwapForm from './taxAndSwapForm';
import ConfigureAddressForm from './configureAddressForm';
import HMNTokenAddress from './HMNTokenAddress';
import AddTokenToMigrateReseve from './addTokenToMigrateReseve';

const CONFIGURE_MENU = [
  {
    action: 'ConfigureTaxAndSwap',
    label: 'Tax And Swap',
    id: 0,
  },
  {
    action: 'ConfigureAddresses',
    label: 'Configure Address',
    id: 1,
  },
  {
    action: 'SetHMNTokenAddresses',
    label: 'HMN Token Address',
    id: 2,
  },
  {
    action: 'addTokenToReserve',
    label: 'Add Token',
    id: 3,
  },
];

export default function Configure() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="Configure">
      <div className="liquidityCenter">
        <div className="liquidBanner">
          <h4>Configure Settings</h4>
          <p>
            Here the assets you have and the volumn.The swap tax, purchase tax,
            sales tax.
          </p>
        </div>
        <div className="createPairSec">
            {CONFIGURE_MENU?.map((item) => {
              return (
                <button
                  className="btn"
                  onClick={() => {
                    setSelectedTab(item.id);
                  }}
                >
                  {item.label}
                </button>
              );
            })}
        </div>
        <div className="configureForm">
          {selectedTab === CONFIGURE_MENU[0].id ? (
            <TaxAndSwapForm />
          ) : selectedTab === CONFIGURE_MENU[1].id ? (
            <ConfigureAddressForm isSelected={selectedTab} />
          ) : selectedTab === CONFIGURE_MENU[2].id ? (
            <HMNTokenAddress />
          ) : (
            <AddTokenToMigrateReseve />
          )}
        </div>
      </div>
    </div>
  );
}
