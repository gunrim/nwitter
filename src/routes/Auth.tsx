import "@fortawesome/free-solid-svg-icons";

import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import {
  GithubAuthProvider, GoogleAuthProvider, OAuthCredential, signInWithPopup, User, UserCredential
} from "firebase/auth";
import React from "react";

import { faGithub, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
    const onSocialClick = async (event: any) => {
        const {
            target: { name },
        } = event;
        let provider: any;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "github") {
            provider = new GithubAuthProvider();
        }
        signInWithPopup(authService, provider)
            .then((result) => {
                const credential: OAuthCredential | null = provider.credentialFromResult(result);
                const token: string | undefined = credential!.accessToken;
                // The signed-in user info.
                const user: User = result.user;
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = provider.credentialFromError(error);
                // ...
            });
    };
    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faTwitter}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
            <AuthForm />
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                    Continue with Google <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button onClick={onSocialClick} name="github" className="authBtn">
                    Continue with Github <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
};
export default Auth;
