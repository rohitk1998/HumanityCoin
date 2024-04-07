import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './addLiquidity.scss';

function AddLiquidity() {
  const navigate = useNavigate();
  // const [poolVersion,setPoolVersion] = useState('v3');
  const items = [
    {
      label: <Link to={`/app/pool/v2`}>v2 pools</Link>,
      key: '0',
    },
  ];
  return (
    <div className="addLiquidity">
      <div className="poolCenter">
        <div className="poolCol">
          <div className="position">
            <div className="left">
              <button onClick={()=> {
                navigate('/app/pool')
              }}>back</button>
            </div>
            <div className="center">
              <h4>Add Liquidity</h4>
            </div>
            <div className="right">
              <p>settings</p>
            </div>
          </div>
          <hr />
          <div className='connectBtnContainer'>
          <button className="connectBtn">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLiquidity;
