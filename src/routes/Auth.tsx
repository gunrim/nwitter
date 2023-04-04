import { fbase, createEmailUser,  } from 'fbase';
import React, { useState } from 'react';


const Auth = () => {

    const [email, setEmail] = useState("gunrim@msn.com");
    const [password, setPassword] = useState("1111");
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
        let user:any = createEmailUser(email, password);
        if (user === null || user === undefined){
            setNewAccount(true);
        }else{
            setNewAccount(false);
        }
        console.log(event.target.name);
    }

return (
<div>
    <form onSubmit={onSubmit}>
        <input type="email" name="email" required placeholder='이메일' value={email} onChange={onChange} />
        <input type="password" name="password" required placeholder='비밀번호' value={password} onChange={onChange} />
        <input type="submit"   value={newAccount ? "신규 추가" : "로그인"}/><br></br>
        
    </form>
    <div>
    <button>이메일 로그인</button>
    <button>구글 로그인</button>
    </div>



</div>
);
}

export default Auth;