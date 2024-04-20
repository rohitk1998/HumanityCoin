import React from 'react'
import {Input} from "antd"
import "./InputCardpayment.scss";
import {Btcimg,Checkinputhov } from "../../Assets/Images/SvgImgs.jsx";

function InputCardpayment(props) {
    const {
        label,  
        imgecustm,Simplex,imgcardvisa,imgebank,banktransfer,onClick
      } = props;
  return (
    <>
    <div className='inputpayment'>
      <div className='inputpayment__cardpayment'>
          
          <div className='inputpayment__card' onClick={onClick}>
              <div className='left_imgetext'>
                  <img src={imgecustm} alt=''/>
                  <p>{Simplex}</p>
              </div>
              <div className='right_imgetext'>
                  <img src={imgcardvisa} alt=''/>
                  <img src={imgebank} alt=''/>
                  <p>{banktransfer}</p>
              </div>
              <span><Checkinputhov/></span>
          </div>

      </div>
    </div>
    </>
  )
}

export default InputCardpayment;