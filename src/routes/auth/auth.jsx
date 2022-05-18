import SignUp from "../../components/Sign-up/sign-up.component";
import SignIn from "../../components/Sign-in/sign-in.component";

import './auth.styles.scss'

const Auth = () => {

    return (
        <div className='auth-container'>
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default Auth;