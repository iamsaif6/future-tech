import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const [shortPass, setShortPass] = useState(false);
  const { googleSign, logtinWithEmail } = useContext(AuthContext);
  const notifyError = res => toast.error(res);

  // handle form submit
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logtinWithEmail(email, password)
      .then(() => {
        toast.success('Login successful');
      })
      .catch(error => {
        setShortPass(true);
        notifyError(error.message);
      });
  };

  // Login with google
  const handleGoogleLogin = () => {
    googleSign()
      .then(() => {
        toast.success('Google sign in successful');
      })
      .catch(error => {
        setShortPass(true);
        notifyError(error.message);
      });
  };

  return (
    <section className="max-w-md mx-auto mt-24 px-4">
      <h1 className=" mb-4 text-[20px]">Account Login</h1>
      <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label color={shortPass && 'failure'} htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            helperText={
              shortPass && (
                <>
                  <span className="font-medium">{`Wrong Credential`}</span>
                </>
              )
            }
            name="email"
            color={shortPass && 'failure'}
            id="email2"
            type="email"
            placeholder="name@mail.com"
            required
            shadow
            onChange={() => setShortPass(false)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label color={shortPass && 'failure'} htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            onChange={() => setShortPass(false)}
            name="password"
            color={shortPass && 'failure'}
            helperText={
              shortPass && (
                <>
                  <span className="font-medium">{`Wrong Credential`}</span>
                </>
              )
            }
            id="password2"
            type="password"
            placeholder="Enter password"
            required
            shadow
          />
        </div>

        <Button className="bg-secondary" type="submit">
          Login
        </Button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center mt-3 justify-center gap-2 py-2 border border-secondary rounded-lg w-full"
      >
        Continue With
        <FcGoogle />
      </button>
      <p className="mt-5 text-center text-[13px]">If you dont have an account with us !</p>
      <Link to="/register">
        <button className="flex items-center mt-3 justify-center gap-2 py-2 border border-secondary rounded-lg w-full">
          Create Account
        </button>
      </Link>
    </section>
  );
};

export default Login;
