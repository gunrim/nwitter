import { firebaseInstance, createEmailUser, loginEmailuser, socialLogin,  } from 'fbase';
import React, { useState } from 'react';


const Auth = () => {

    const [error, setError] = useState("")
    const [email, setEmail] = useState("gunrim@msn.com");
    const [password, setPassword] = useState("11111111");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (event:any) => {
        console.log(event.target.name);
        const {target:{name,value}} = event;

        if (name === "email" ) {
            setEmail(value)
        }else if (name === "password") {setPassword(value)}
    }
    const onSubmit = (event:any) => {
        event.preventDefault();
        let user:any = null;
        
        if (newAccount){
            user = createEmailUser(email, password);
        }else{
            user = loginEmailuser(email, password);
        }

        // if (user === null || user === undefined){
        //     setNewAccount(true);
        // }else{
        //     setNewAccount(false);
        // }
        // console.log(event.target.name);
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const socialLoginF = (event:any) => {
        event.preventDefault();

        let provider ;
        let user:any = null;

        const { target: { name:string}} = event;

        console.log(event);

        if (event.target.name === "google"){
            user = socialLogin("google")


        }
    }

return (
<div>
    <form onSubmit={onSubmit}>
        <input type="email" name="email" required placeholder='이메일' value={email} onChange={onChange} />
        <input type="password" name="password" required placeholder='비밀번호' value={password} onChange={onChange} />
        <input type="submit"   value={newAccount ? "신규 추가" : "로그인"}/><br></br>
        <span onClick={toggleAccount}>{newAccount ? "Login" : "Create Account"}</span>
    </form>
    <div>
    <button onClick={socialLoginF} name="google">구글 로그인</button>
    </div>



</div>
);
}

export default Auth;