import { Button, Card, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/animations/register.json";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { HiUserAdd } from "react-icons/hi";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {
  const { signUpUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    //* Data from User Input
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    //* Validate Inputs
    // If all fields are empty
    if (name === "" && photo === "" && email === "" && password === "") {
      return toast.error("All fields are required!");
    }
    // If name field is empty
    else if (name === "") {
      return toast.error("Please provide your name!");
    }
    // If photo field is empty
    else if (photo === "") {
      return toast.error("Please provide your photo URL!");
    }
    // If photo url is not valid
    else if (
      !/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/.test(photo)
    ) {
      return toast.error("Please provide a valid photo URL!");
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
    // If password length is less than 6
    else if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }
    // If password does not have atleast one uppercase letter
    else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have an uppercase letter!");
    }
    // If password does not have atleast one special character
    else if (!/[!@#$%^&*]/.test(password)) {
      return toast.error("Password must have a special character!");
    }

    //* Register User
    // Loading
    const toastId = toast.loading("Registering user...");
    try {
      await signUpUser(email, password);
      await updateUserProfile(name, photo);
      toast.success("Registration completed", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
      console.log(error.message);
    }
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Register</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center gap-10">
            <Card className="max-w-md w-full">
              <form
                onSubmit={handleRegistration}
                className="flex flex-col gap-4"
              >
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  User Registration
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Full Name" />
                  </div>
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="photo" value="Photo URL" />
                  </div>
                  <TextInput
                    id="photo"
                    name="photo"
                    type="text"
                    placeholder="Photo URL"
                  />
                </div>
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
                  <HiUserAdd />
                  &nbsp;<span>Register</span>
                </Button>
              </form>
              <div className="mt-3">
                <p>
                  &#187; Already registered?{" "}
                  <Link to="/login">
                    <span className="text-cyan-600">Login here.</span>
                  </Link>
                </p>
              </div>
            </Card>
            <div className="hidden md:flex w-full max-w-md">
              <Lottie
                animationData={registerAnimation}
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

export default Register;
