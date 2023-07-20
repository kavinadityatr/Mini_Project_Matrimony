import React from "react";
import '../assets/membership.css';

const Membership =()=> {
      return (
        <div>
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{__html: "\n  a{\n    color: #EA532f;\n  }\n  .box-outer {\n    padding-top: 20px;\n    margin: 0px;\n    width: 100vw;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n\n    -webkit-flex-flow: row wrap;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .box-inner {\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n\n    -webkit-flex-flow: row wrap;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  .column {\n    box-shadow: 3px 3px 12px black;\n    margin: 10px;\n    padding: 20px;\n    margin-top: 10px;\n    max-width: 25vw;\n    min-width: 200px;\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n\n  .title {\n    font-family: 'Nunito Sans', sans-serif;\n    width: 100%;\n    text-align: center;\n  }\n\n  li {\n    font-family: 'Nunito Sans', sans-serif;\n    padding-bottom: 15px;\n  }\n\n  li:before {\n    position: absolute;\n    margin-left: -1.3em;\n    content: \"\\2713\\0020\";\n    color: #C91E7C;\n  }\n\n  .price-bubble {\n    width: 200px;\n    height: 150px;\n    margin: auto;\n    border-radius: 50%;\n    color: white;\n    padding-top: 50px;\n    box-shadow: 2px 2px 10px black;\n  }\n  \n  .gradient-background{\n    /*http://colorzilla.com/gradient-editor/#48b4c4+0,1593d2+100 */\n    background: #48b4c4;\n    background: -moz-linear-gradient(-45deg, #48b4c4 0%, #1593d2 100%);\n    background: -webkit-linear-gradient(-45deg, #48b4c4 0%, #1593d2 100%);\n    background: linear-gradient(135deg, #48b4c4 0%, #1593d2 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#48b4c4', endColorstr='#1593d2', GradientType=1);\n    color: white;\n  }\n  \n  sup {\n    font-size: 24px;\n    font-weight: normal;\n  }\n  \n  p{\n    font-family: 'Nunito Sans', sans-serif;\n  }\n" }} />
          <div className="box-outer">
            <div>
              <h1 className="title">Membership Plans:</h1>
              </div>
            <div className="box-inner">
              <div id="column" className="column">
                <h2 className="title">Silver</h2>
                <div style={{width: '100%', height: '4px', background: '#C91E7C'}}>
                </div>
                <ul style={{listStyle: 'none'}}>
                  <li>4 Months</li>
                  <li>Just ₹7999</li>
                  <li>Chat</li>
                  <li>20 Contact Numbers</li>
                  <li>10 Horoscope</li>
                  
                  
                 
                </ul>
              </div>
              <div id="column" className="column">
                <h2 className="title">Gold</h2>
                <div style={{width: '100%', height: '4px', background: '#C91E7C'}}>
                </div>
                <ul style={{listStyle: 'none'}}>
                  <li>8 Months</li>
                  <li>₹14999 Only</li>
                  <li>Call</li>
                  <li>40 Contact Numbers</li>
                  <li>50 Horoscope</li>
                 
                </ul>
              </div>
              <div id="column" className="column">
                <h2 className="title">Platinum</h2>
                <div style={{width: '100%', height: '4px', background: '#C91E7C'}}>
                </div>
                <ul style={{listStyle: 'none'}}>
                  <li>12 Months</li>
                  <li>₹29999 Only</li>
                  <li>Video Call</li>
                  <li>60 Contact Numbers</li>
                  <li>Unlimited Horoscope</li>

                 
                </ul>
              </div>
            </div>
            {/* <div style={{padding: '20px', marginTop: '10px', backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
              <div className="price-bubble gradient-background">
                <h1 className="title" style={{lineHeight: '1px', fontSize: '48px'}}><sup></sup>
                </h1><h1>
                </h1><h5 className="title" style={{fontWeight: 'normal', letterSpacing: '1px'}}>- No Membership Contract<br />- Cancel Anytime</h5>
              </div>
              <p className="title">*Some descriptive information here.*</p>
            </div> */}
          </div>
        </div>
      );
    }
 export default Membership;