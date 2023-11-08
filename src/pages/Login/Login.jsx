import { Button, Card, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/animations/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { BiLogInCircle } from "react-icons/bi";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const { googleSignIn, signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //* Google Login
  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in...");
    try {
      await googleSignIn();
      toast.success("Login successful", { id: toastId });
      if (location?.state) {
        navigate(`${location.state}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
      console.error(error.message);
    }
  };

  //* Handle User Login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Data from User Input
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //* Validate Inputs
    if (email === "" && password === "") {
      return toast.error("All fields are required!");
    }
    // If email field is empty
    else if (email === "") {
      return toast.error("Please provide your email!");
    }
    // If email field is not valid
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return toast.error("Please provide an valid email!");
    }
    // If password field is empty
    else if (password === "") {
      return toast.error("Password is required!");
    }

    //* User Login
    // Loading
    const toastId = toast.loading("Logging in...");
    try {
      await signInUser(email, password);
      toast.success("Login successful", { id: toastId });
      if (location?.state) {
        navigate(`${location.state}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
      console.error(error.message);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Login</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center gap-10">
            <Card className="max-w-md w-full">
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                  />
                </div>
                <Button type="submit" color="purple" className="font-bold">
                  <BiLogInCircle />
                  &nbsp; <span>Login</span>
                </Button>
              </form>
              <div className="mt-3">
                <p>
                  &#187; Not registered?{" "}
                  <Link to="/register">
                    <span className="text-cyan-600">Register here.</span>
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-center mb-3">OR</h3>
                <Button
                  onClick={handleGoogleLogin}
                  outline
                  color="purple"
                  className="w-full"
                >
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
    </HelmetProvider>
  );
};

export default Login;
