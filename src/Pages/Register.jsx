import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const [shortPass, setShortPass] = useState(false);
  const { signInupWithEmail, googleSign } = useContext(AuthContext);
  const notifyError = res => toast.error(res);

  // handle form submit
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // check password length
    if (password.length < 7) {
      setShortPass(true);
      return;
    }
    //SignUp
    signInupWithEmail(email, password)
      .then(() => {
        toast.success('User created successfully');
      })
      .catch(error => {
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
        notifyError(error.message);
      });
  };

  return (
    <section className="max-w-md mb-9 md:mb-5 mx-auto md:mt-24 mt-[130px] px-4">
      <h1 className=" mb-4 text-[20px]">Register Account</h1>
      <form onSubmit={handleRegister} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput name="email" id="email2" type="email" placeholder="name@mail.com" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label color={shortPass && 'failure'} htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            name="password"
            onChange={() => setShortPass(false)}
            color={shortPass && 'failure'}
            placeholder="Atleast 8 character"
            helperText={
              shortPass && (
                <>
                  <span className="font-medium">Password too short !</span>
                </>
              )
            }
            id="password2"
            type="password"
            required
            shadow
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox required id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link href="#" className="text-secondary hover:underline dark:text-cyan-500">
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button className="bg-secondary" type="submit">
          Register new account
        </Button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center mt-3 justify-center gap-2 py-2 border border-secondary rounded-lg w-full"
      >
        Continue With
        <FcGoogle />
      </button>
      <p className="mt-5 text-[13px]">
        If you already have an account with us, please login at the{' '}
        <Link to="/login" className="text-primary hover:underline">
          login page.
        </Link>
      </p>
    </section>
  );
};

export default Register;
