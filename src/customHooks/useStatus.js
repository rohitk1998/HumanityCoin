import React, { createContext, useState, useContext } from 'react';

export const TRANSACTION_STATUS = {
    IN_PROGRESS : 'Transaction in progress . . .',
    PENDING : 'Pending . . .',
    SENDING : 'Sending . . .',
    WAITING_FOR_APPROVAL : 'Waiting for Approval . . .',
    APPROVED : 'Approved !!',
    COMPLETED : 'Completed !!',
    INITIATED:'Initiating Transaction . . .',
    CANCELLED:'Transaction Cancelled !!',
    NONE:'NONE',
    FAILED:'Transaction Failed !!',
    INITIATED_APPROVAL_PROCESS: 'Initiating Approval . . .'
  }

const statusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [transactionStatus, setTransactionStatus] = useState(TRANSACTION_STATUS.NONE);

  const updateTransactionStatus = (status) => {
    setTransactionStatus(status);
  };

  return (
    <statusContext.Provider value={{
      transactionStatus,
      updateTransactionStatus
    }}>
      {children}
    </statusContext.Provider>
  );
};

export const useStatus = () => {
  return useContext(statusContext);
};