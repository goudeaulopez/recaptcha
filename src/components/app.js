import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

class App extends React.Component{
    render(){
        return(
            <div>
                <GoogleReCaptchaProvider reCaptchaKey="6Lc8sfwZAAAAANA6K56DbT7FI8xcav18UoDZamcK">
                App component
                </GoogleReCaptchaProvider>
            </div>
        )
    }
}
export default App