<div className="inner_signup_panel">
              <form className="no" onSubmit={signup_submit_handle}>
                <input
                minLength="2"
                  className="login_email"
                  type="text"
                  placeholder="Name"
                  name="username"
                  id="username"
                  value={username}
                  required
                  onChange={(e) => setname(e.target.value)}
                />

                {validation_error ? (
                  <>
                  <br></br>
                  <span className="error">{validation_error}</span>
                  </>
                ) : null}

                <br />
                <br />

                <input
                  className="login_email"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email_Err ? (
                  <>
                  <br></br>
                  <span className="error">{email_Err}</span>
                  </>
                ) : null}

                <br />
                <br />

                <input
                minLength="8"
                  className="login_password"
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {pw_Err ? <span className="error">{pw_Err}</span> : null}
                <br />
                <br />
                <input
                  className="login_password"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  value={confirmpassword}
                  required
                  onChange={(e) => setconfirmpassword(e.target.value)}
                />
                {cpw_Err ? <span className="error">{cpw_Err}</span> : null}
                <br />
                <br />

                <button className="login_panel_button">Signup</button>
                <br />
                {/* <button
                type="button"
                className="existing_user"
                onClick={() => {
                  document
                    .querySelector(".inner_signup_panel")
                    .classList.remove("visible");
                  document
                    .querySelector(".inner_login_panel")
                    .classList.remove("hidden");
                  document
                    .querySelector(".signup_visible")
                    .classList.remove("visible");
                  document
                    .querySelector(".login_visible")
                    .classList.remove("hidden");
                }}
              >
                 Existing User? Log in
              </button> */}
              </form>


            </div>
