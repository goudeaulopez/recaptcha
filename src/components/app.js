import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

class App extends React.Component{
    render(){
        return(
            <div>
                <GoogleReCaptchaProvider>
                App component
                </GoogleReCaptchaProvider>
            </div>
        )
    }
}
export default App