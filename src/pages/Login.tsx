import LoginForm from '../components/LoginForm';
import '../styles/login/login.scss';

const Login = () => {
  return (
    <section className="login">
      <div className="login-div">
        <section className="login-images">
          <img src="/icons/logo.svg" alt="logo" className="logo" />
          <div>
            <img src="/images/login.png" alt="login image" />
          </div>
        </section>

        <section className="login-form">
          <img src="/images/logo.svg" alt="logo" className="logo" />

          <LoginForm />
        </section>
      </div>
    </section>
  );
};

export default Login;
