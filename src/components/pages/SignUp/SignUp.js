import React from 'react';
import Section from '../../Section';
import { signUpObj } from './Data';

function SignUp() {
    return (
        <>
            <Section {...signUpObj} />
        </>
    );
}

export default SignUp;