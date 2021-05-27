import "./login.css";
import { useState, useEffect } from "react";
import {withRouter} from "react-router-dom";

function Login() {
    var temp_data=JSON.parse(localStorage["UserInfo"]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setname] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const [data_Arr, setter] = useState(temp_data);
     
    const submithandle = (e) => {
        var flag=false;
        e.preventDefault();
        const value = {
            email: email,
            password: password
        };
        for(let i=0;i<temp_data.length;i++){
            let temp=temp_data[i];
            if(value.email===temp.email && value.password===temp.password){
                flag=true;
                localStorage.setItem("CurrentUser",temp.name);
                break;
            }
        }

        if(flag){
            alert("Login Successful")
            // this.props.history.push("/");
        }
        else{
            alert("Invalid User")
        }
        setEmail("");
        setPassword("");
    }

    const signup_submit_handle = (e) => {
        e.preventDefault();
        const data = {
            name: username,
            email: email,
            password: password,
        }
        console.log(data);
        setter([...data_Arr, data]);
        
        setname("");
        setEmail("");
        setPassword("");
        setconfirmpassword("");
    };

    useEffect(()=>{
        setter(JSON.parse(localStorage["UserInfo"]));
    },[]);
    useEffect(()=>{
        localStorage.setItem("UserInfo",JSON.stringify(data_Arr));
    },[data_Arr]);

    

        return (
        <div className="login">
            <div className="login_main">
                <div className="login_signup">
                    <span className="cross" onClick={() => {
                        document.querySelector('.login').classList.remove('visible');
                    }}>x</span>
                    <div className="login_inner">
                        <div className="login_visible">
                            <span className="login_span">Login</span>
                            <span className="recommendation_tag">Get access to your Orders, Wishlist and Recommendations</span>
                        </div>
                        <div className="signup_visible">
                            <span className="login_span">Looks like you're new here!</span>

                            <span className="signup_tag">Signup with your email to get started</span>

                        </div>
                        <div className="graphic"></div>
                    </div>
                    <div className="login_console" >
                        <div className="inner_login_panel">

                            <form className="no" onSubmit={submithandle}>
                                <input className="login_email" type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Email" />
                                <br />
                                <br />

                                <input className="login_password" placeholder="Enter Password" type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <br />
                                <br />
                                <span className="tnc">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</span>
                                <br />
                                <br />
                                <button className="login_panel_button">Login</button>
                            </form>


                            <button type="button" className="signup"
                                onClick={() => {
                                    document.querySelector('.inner_signup_panel').classList.add('visible');
                                    document.querySelector('.inner_login_panel').classList.add('hidden');
                                    document.querySelector('.signup_visible').classList.add('visible');
                                    document.querySelector('.login_visible').classList.add('hidden');

                                }}
                            >New to Flipkart? Create an account</button>
                        </div>
                        <div className="inner_signup_panel">
                            <form className="no" onSubmit={signup_submit_handle}>
                                <input className="login_email" type="text" placeholder="Name"
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setname(e.target.value)} />
                                <br />
                                <br />

                                <input className="login_email" type="email" placeholder="Enter Email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />

                                <br />
                                <br />

                                <input className="login_password" placeholder="Enter Password" type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <br />
                                <br />
                                <input className="login_password" placeholder="Confirm Password" type="password"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    value={confirmpassword}
                                    onChange={(e) => setconfirmpassword(e.target.value)} />
                                <br />
                                <br />

                                <button className="login_panel_button">Signup</button>
                                <br />
                            </form>


                            <button className="existing_user" onClick={() => {
                                document.querySelector('.inner_signup_panel').classList.remove('visible');
                                document.querySelector('.inner_login_panel').classList.remove('hidden');
                                document.querySelector('.signup_visible').classList.remove('visible');
                                document.querySelector('.login_visible').classList.remove('hidden');
                            }}
                            >Existing User? Log in</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>



    )

}

export default withRouter(Login);
