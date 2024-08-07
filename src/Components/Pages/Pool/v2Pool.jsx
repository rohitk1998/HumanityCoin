import React, { useState } from 'react';
import { Button } from 'antd';
import './V2Pool.scss';
import { Link } from 'react-router-dom';
import { LiquidityForm } from "./LiquidityForm.jsx"
import { GetPair } from './GetPair.jsx';
import { CreatePair } from './createPair.jsx';


const formState = [0,1,2]

function V2Pool() {

  const [isFormActive, setIsFormActive] = useState(false);
  const [selectedForm,setSelectedForm] = useState(formState[0]);

  const items = [
    {
      label: <Link to={`/app/pool`}>v2 pools</Link>,
      key: '0',
    },
  ];

  

  return (
    <div className="liquidyDiv">
      <div className="liquidityCenter">
        <div className="liquidBanner">
          <h4>Liquidity provider rewards</h4>
          <p>
            Liquidity providers earn a 0.3% fee on all trades proportional to
            their share of the pool. Fees are added to the pool, accrue in real
            time and can be claimed by withdrawing your liquidity.
          </p>
          <Link to="">Read more about providing liquidity</Link>
        </div>
        <div className="createPairSec">
          <div className="left">
          </div>
          <div className="right">
          <Button className={selectedForm === 0 ? "createPairBtn active" : "createPairBtn"}
            
            onClick={() => {
              if (selectedForm === 1 || selectedForm === 2 ) {
                setSelectedForm(formState[0]);
              }
            }}
            >Create Pair</Button>
            <Button className={selectedForm === 1 ? "transBtn active" : "transBtn"}
            
            onClick={() => {
              console.log('selectedForm',selectedForm);
              if (selectedForm === 0 || selectedForm === 2  ) {
                setSelectedForm(formState[1]);
              }
            }}
            >Get Pair</Button>
          {/* <Button className="menuBtn">Import pool</Button> */}
            <Button
              className={selectedForm === 2 ? "menuBtn active" : "menuBtn"}
              onClick={() => {
                if (selectedForm === 1 || selectedForm === 0 ) {
                  setSelectedForm(formState[2]);
                }
              }}
            >
              Add V2 liquidity
            </Button>
          </div>
        </div>
        {selectedForm === 2  ? <LiquidityForm /> : selectedForm === 1 ? <GetPair/> : <CreatePair/>}
      </div>
    </div>
  );
}

export default V2Pool;
