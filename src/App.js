import React, {useState} from 'react';
import Cleave from 'cleave.js/react';

import 'animate.css';
import './App.css';

const imageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
  "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
  "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
  "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png"
]

function App() {
  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardType, setCardType] = useState('')
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YYYY');
  const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
  const [flip, setFlip] = useState(null);
  
  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue);
    // console.log(e.target.value);
  }

  const handleType = (type) => {
    setCardType(type);
    console.log(type);

    if(type == "visa") {
      setCardTypeUrl(imageUrls[0]);
      console.log("Visa")
    } else if(type === "mastercard") {
      setCardTypeUrl(imageUrls[1]);
      console.log("Mastercard")
    } else if(type === "discover") {
      setCardTypeUrl(imageUrls[2]);
      console.log("Discover")
    } else if(type === "amex") {
      setCardTypeUrl(imageUrls[3]);
      console.log("Amex")
    } else if(type === "diners") {
      console.log("Diners")
      setCardTypeUrl(imageUrls[4])
    } else if(type === "jcb") {
      console.log("JCB");
      setCardTypeUrl(imageUrls[5]);
    }
  }
  
  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  }

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  }

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  }

  // cleave.js logic 

  return (
       <div className="container">
        <form id="form">
            <div id="card">
                <div className="header">
                    <div className="sticker"></div>
                    <div>
                      <img className="logo" src={cardTypeUrl} alt="Card logo"/>
                    </div>
                </div>
                <div className="body">
                    <h2 id="creditCardNumber">{creditCardNum}</h2>
                </div>
                <div className="footer">
                    <div>
                        <h5>Card Holder</h5>
                        <h3>{cardHolder}</h3>
                    </div>
                    <div>
                        <h5>Expires</h5>
                        <h3>{expireMonth} / {expireYear}</h3>
                    </div>
                </div>
            </div>

            <div className="input-container mt">
                <h4>Enter card number</h4>
                <Cleave
                  delimiter="-"
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged: handleType
                  }}
                  onChange={handleNum}
                  placeholder="Please enter your credit card number"
                />
            </div>

            <div className="input-container">
                <h4>Card Holder</h4>
                <input onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required/>
            </div>

            <div className="input-grp">
                <div className="input-container">
                    <h4>Expiration Year</h4>
                    <select value={expireYear} onChange={handleExpYear}>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                </div>
                <div className="input-container">
                <h4>Month</h4>
                <select value={expireMonth} onChange={handleExpMonth}>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                </div>
                <div className="input-container">
                    <h4>CVV</h4>
                    <input type="text" placeholder="CVV" required/>
                </div>
            </div>

            <button>
              {
                `Submit ${cardType} payment`
              }
              </button>
        </form>
    </div>
  );
}

export default App;
