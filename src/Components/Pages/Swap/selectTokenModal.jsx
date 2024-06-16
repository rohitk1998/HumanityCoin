// src/components/Modal.tsx
import React, { FC } from 'react';
import './Modal.scss';
import useFetchTokenList from '../../../customHooks/useFetchtokenList';
import CloseIcon from "../../Assets/Svg/cross.svg"


const SelectTokenModal = ({ show, onClose }) => {

    const [list] = useFetchTokenList();


    console.log('LIST IN SEARCH MODAL',list);


  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='model-header'>
            <h6>Select a token </h6>
            <img src={CloseIcon} onClick={onClose} width={30} height={30} />
        </div>
        <hr/>
        <div className='tokenListHeader'>
        <h6>Token Name</h6>
        <div>↓</div>
        </div>
        <div className='tokenListContainer'>
        {
            list && list.map((token,idx)=> {
                return(
                    <div className='token-card'>
                        <img src={token.logoURI} width={25} height={25} />
                        <p key={idx}>{token.symbol}</p>
                    </div>
                )
            })
        }
        </div>
      </div>
    </div>
  );
};

export default SelectTokenModal;
