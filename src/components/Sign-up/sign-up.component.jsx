import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/form-input.component";
import Button from "../Button/button.component";

import './sign.up.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const afterSubmit = () => {
        alert('successful')
    }
    const resetFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async event => {
        event.preventDefault()

        if (confirmPassword !== password) {
            alert('password don`t match')
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFields()
            afterSubmit()


        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.error('user creation encountered an error', error);
            }

        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='sign-up'>
            <div>
                <h2 className='title'>Don`t have an account</h2>
                <span className='sub-title'>Sign up with your email and password</span>
            </div>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display name'
                    type="text"
                    value={displayName}
                    name='displayName'
                    onChange={handleChange}

                />
                <FormInput
                    label='Email'
                    type="email"
                    value={email}
                    name='email'
                    onChange={handleChange}
                />
                <FormInput
                    label='Password'
                    type="password"
                    value={password}
                    name='password'
                    onChange={handleChange}
                />
                <FormInput
                    label='Confirm password'
                    type="password"
                    value={confirmPassword}
                    name='confirmPassword'
                    onChange={handleChange}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;