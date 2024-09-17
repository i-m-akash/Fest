import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold uppercase">Order Successful</h1>
      <p className="text-lg mt-4">Reference No. {referenceNum}</p>
    </div>
  );
};

export default PaymentSuccess;
