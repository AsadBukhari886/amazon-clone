import React from 'react';
import '../CSS/Login.css';
import amazon_black_text from '../images/amazon_black_text.png'

function Login() {

    const signIn=()=>{
        alert("Slow down your speed this portion is under construction")
    }
    return (<>
        <div className="loginr">


            <header>

                <div class="d-flex flex-row justify-content-center">
                    <div class="row">
                        <div class="col-md">
                            <img class="img_1" src={amazon_black_text} alt="Amazon Logo" />
                        </div>
                    </div>
                </div>

            </header>

            <div class="d-flex flex-row justify-content-center">
                <div class="row">
                    <div class="col-md">
                        <form>
                            <div class="sign-in">Sign In</div>
                            <div class="form-group">
                                <label id="words_1" for="exampleInputEmail1">Email(phone for mobile accounts)</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted"></small>
                            </div>
                            <div class="form-group">
                                
                                <label id="words_2" for="exampleInputPassword1">Password  </label>
                                <label id="words_2" for="exampleInputPassword1" style={{marginLeft:"50%"}}>forgot password</label>
                               
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                <div class="form-group">
                                    <button type="button" class="btn btn-warning" id="sign-in" onClick={signIn}>Sign In</button><br />
                                    <div className="checkbx">
                                    <input type="checkbox" class="form-check-input checkbox" id="exampleCheck1" />
                                    <p class="keep-sign-in">Keep me signed in. <a href="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80">Details</a></p>
                                    </div>
                                    {/* <img id="amazon-img" src={amazon_black_text} alt="Amazon Image" /> */}
                                </div>
                            </div>
                            <div class="form-check">


                            </div>
                            <button type="button" class="btn btn-warning" id="grey-button" onClick={signIn}>Create your Amazon account</button>

                        </form>
                    </div>
                </div>
            </div>





            <div class="d-flex flex-row justify-content-center footer_1">
                <div class="row">
                    <div class="col">
                        <p class="conditions"><a>Conditions of Use &nbsp &nbsp &nbsp </a>   <a>Privacy Notice&nbsp &nbsp &nbsp </a>   <a>Help&nbsp &nbsp &nbsp </a></p>
                    </div>
                </div>

            </div>
        </div>

    </>)
}

export default Login;
