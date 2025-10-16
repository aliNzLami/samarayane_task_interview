import LoginBtn from "./LoginBtn"

function Login() {
    return (
      <section className="min-h-[100vh] authContainer flex flex-col justify-center items-center">
        <h1 className="welcomeAuth showSmoothly">
          خوش آمدید
        </h1>

        <LoginBtn />
      </section>
    )
}

export default Login