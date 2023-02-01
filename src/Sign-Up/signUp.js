export function SignUp() {
  return (
    <div>
      <div style={{ width: "50vw" }}>
        <h1>Sign up</h1>
        <div>
          <div>
            <label htmlFor="name">Name*</label>
          </div>
          <input id="name" placeholder="Enter your name" />
        </div>

        <div>
          <div>
            {" "}
            <label htmlFor="email">Email*</label>
          </div>
          <input id="email" placeholder="Enter your email" />
        </div>

        <div>
          <div>
            <label htmlFor="password">Password*</label>
          </div>
          <input
            type={"password"}
            id="password"
            placeholder="Create a password"
          />
          <p>Must be at least 8 characters.</p>
        </div>

        <button>Create account</button>
      </div>
    </div>
  );
}
