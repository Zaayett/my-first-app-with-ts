import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

    type Props = {
        sms?: string;
        email?: string;
        url?: string;
    }
    
    const HelloWorld9: React.FC<Props> = (props) => {
        const [sms, setSMS] = useState(props.sms);
        const [email, setEmail] = useState(props.email);
        const [url, setURL] = useState(props.url);
        const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.
    
        
        const changeSMSToGreet = (event: any) => {
            setSMS(event.target.value);
        }
    
        const changeEmailToGreet = (event: any) => {
            setEmail(event.target.value);
        }
    
        const changeURLToGreet = (event: any) => {
            setURL(event.target.value);
    }
    
        return (
            <div>
                <p>
                    <input type="text" placeholder="Enter SMS..." name="name_to_greet"
    onInput={changeSMSToGreet}/>
                </p>
                <p>
                    <input type="text" placeholder="Enter Email..." name="name_to_greet"
    onInput={changeEmailToGreet}/>
                </p>
                <p>
                    <input type="text" placeholder="Enter URL..." name="name_to_greet"
    onInput={changeURLToGreet}/>
                </p>
    
                {
                    <QRCode value={JSON.stringify({
                            sms: sms,
                            email: email,
                            url: url
                    })}size={256}/>
                }
            </div>
        )
    }
    
    export default HelloWorld9;//This makes the component visible

