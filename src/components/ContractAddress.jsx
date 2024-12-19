import React, { useState } from 'react';
import './ContractAddress.css';

const ContractAddress = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "CA: FndHuYrhHp3rbGGPQCfjCjkniuAc3wp1HgLXwa5upump ";

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