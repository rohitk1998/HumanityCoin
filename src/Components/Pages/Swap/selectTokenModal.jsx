// src/components/Modal.tsx
import React, { FC } from 'react';
import './currencyList.scss';
import useFetchTokenList from '../../../customHooks/useFetchtokenList';
import CloseIcon from '../../Assets/Svg/cross.svg';
import CurrencyCard from './currencyCard';

const SelectTokenModal = ({ show, onClose }) => {
  const [list] = useFetchTokenList();

  console.log('LIST IN SEARCH MODAL', list);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h6>Select a token </h6>
          <div onClick={onClose}>
          <img src={CloseIcon} width={30} height={30} alt='closeIcon'/>
          </div>
        </div>
        <hr />
        <div className="tokenListHeader">
          <h6>Token Name</h6>
          <div>↓</div>
        </div>
        <div className="tokenListContainer">
          {list &&
            list.map((currency, idx) => <CurrencyCard currency={currency} idx={idx}  />)}
        </div>
      </div>
    </div>
  );
};

export default SelectTokenModal;
