import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="max-w-md mx-auto mt-20 px-4">
      <h1 className=" mb-4 text-[20px]">Register Account</h1>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput id="email2" type="email" placeholder="name@mail.com" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
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
    </section>
  );
};

export default Register;
