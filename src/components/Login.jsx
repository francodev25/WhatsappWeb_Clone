import React from 'react'
import { Button } from '@material-ui/core'
import '.././assets/styles/components/Login.css'
import {auth,provider} from '../firebase'


const Login = () => {
	const signIn = () => {
        auth.signInWithPopup(provider)
        .then(
            (result) => {
                console.log(result)

            })
        .catch((error)=>{
            alert(error.message)
        })
	}

	return (
		<div className='login'>
			<div className='login__container'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Whatsapp_logo_svg.png/600px-Whatsapp_logo_svg.png'
					alt=''
				/>
				<div className='login__text'>
					<h1>Sign in to Whatsapp Clone</h1>
				</div>
				<Button onClick={signIn}>
                    Sign In with Google
                </Button>
			</div>
		</div>
	)
}

export default Login
