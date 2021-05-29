import Head from 'next/head';

export default function sign_up() {
    return (
      <div>
      <Head>

      </Head>
    
            <div className="hero-img">
                <img src="#" alt="Shopping Trolleys" />
            </div>
            <h2>Sign In</h2>
            <div className="signin-form">
                <input type="email" name="Email" id="email" />
                <input type="password" name="Password" id="password" />
                <div className="flex">
                    <input type="checkbox" name="Remember Me" />
                    <a href="ForgotPaa.js">Forgot Passord</a>
                </div>
                <input type="button" value="Sign Up" />

                <p className="underscript">
                    Don't have an account? <a href="./SignIn.js">Sign Up</a>
                </p>
            </div>
        </div>
    );
}
