import React, {useState} from "react";
import QRCode from "qrcode.react";
import "./QrcodeInput.css"; // Import the CSS file

function QrcodeInput() {
  const [value, setValue] = useState("");
  const [view, setView] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setView(false);
  };

  const viewQRcode = () => {
    setView(true);
  };

  return (
    <div className="container">
      <h1 className="title">QR Code Generator</h1>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter text to generate QR code"
        className="input"
      />
      <button onClick={viewQRcode} className="button" disabled={view === true || value === ''}>
        Generate QR Code
      </button>
        <br />
      {view && value && <QRCode value={value} className="qrcode" />}
    </div>
  );
}

export default QrcodeInput;
