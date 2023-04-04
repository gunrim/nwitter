import React from 'react';

const Auth = () => <div>
    <form>
        <input type="text" name="email" required placeholder='이메일' />
        <input type="password" name="password" required placeholder='비밀번호' />
        <input type="submit" value="승인" /><br></br>
        <button>이메일 로그인</button>
        <button>구글 로그인</button>
    </form>



</div>

export default Auth;