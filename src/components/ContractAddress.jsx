import React, { useState } from 'react';
import './ContractAddress.css';

const ContractAddress = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contract-container" onClick={copyToClipboard}>
      <div className="contract-address">
        {contractAddress}
        <span className="copy-icon">{copied ? "✓" : "📋"}</span>
      </div>
    </div>
  );
};

export default ContractAddress; 