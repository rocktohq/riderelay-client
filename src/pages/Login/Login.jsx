import { Button, Card, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/animations/login.json";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center gap-10">
          <Card className="max-w-md w-full">
            <form className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                User Login
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <Button type="submit" color="purple" className="font-bold">
                Login
              </Button>
            </form>
            <div className="mt-3">
              <p>
                &#187; Not registered?{" "}
                <Link to="/register">
                  <span className="text-green-500">Register here.</span>
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-center mb-3">OR</h3>
              <Button outline color="purple" className="w-full">
                <BsGoogle />{" "}
                <span className="ml-1 font-bold">Login with Google</span>
              </Button>
            </div>
          </Card>
          <div className="hidden md:flex w-full max-w-md">
            <Lottie
              animationData={loginAnimation}
              loop={false}
              className="object-contain"
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
