import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import Lottie from "lottie-react";
import addAnimation from "../../assets/animations/add.json";


const AddService = () => {
  const { user } = useAuth();
  const axios = useAxios();

  //* Hande Add Service
  const handleAddService = async (e) => {
    e.preventDefault();

    // Data from Input
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = Number(form.price.value);
    const image = form.image.value;
    const area = form.area.value;
    const provider = {
      name: user?.displayName,
      photo: user?.photoURL,
      email: user?.email,
    };

    //* Validations
    // If all fields are empty
    if (
      name === "" &&
      area === "" &&
      description === "" &&
      price === "" &&
      image === ""
    ) {
      return toast.error("All fields are required!");
    }

    // If Name field is empty
    else if (name === "") {
      return toast.error("Please provide a name!");
    }

    // If Image field is empty
    else if (image === "") {
      return toast.error("Please provide an image URL!");
    }

    // If Image URL is not valid
    else if (
      !/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/.test(image)
    ) {
      return toast.error("Please provide a valid image URL!");
    }

    // If Price field is empty
    else if (price === "") {
      return toast.error("Please provide a price!");
    }

    // If Area field is empty
    else if (area === "") {
      return toast.error("Please provide an area!");
    }

    // If Description field is empty
    else if (description === "") {
      return toast.error("Please provide a description!");
    }

    const service = { name, area, description, price, image, provider };
    // console.log(service);
    // * Add the Service
    const toastId = toast.loading("Addig service...");
    try {
      const res = await axios.post("/add-new-service", service);
      if (res?.data?.insertedId) {
        toast.success("Service added successfully!", { id: toastId });
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error.message);
    }
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Add Service</title>
      </Helmet>
      <main className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-3 py-5">
        <div className="flex justify-center gap-10">
          <Card className="max-w-lg w-full mx-auto">
            <form onSubmit={handleAddService} className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Add Service
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="providername" value="Your Name" />
                </div>
                <TextInput
                  id="providername"
                  name="providername"
                  type="text"
                  defaultValue={user?.displayName}
                  disabled
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="provideremail" value="Your Email" />
                </div>
                <TextInput
                  id="provideremail"
                  name="provideremail"
                  type="email"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Service Name" />
                </div>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Service Name"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Service Photo URL" />
                </div>
                <TextInput
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Service Photo URL"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Price" />
                </div>
                <TextInput
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="area" value="Service Area" />
                </div>
                <TextInput
                  id="area"
                  name="area"
                  type="text"
                  placeholder="Service Area"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea
                  id="description"
                  placeholder="Write the description here..."
                  rows={4}
                />
              </div>
              <Button type="submit" color="purple" className="font-bold">
                <AiOutlineAppstoreAdd />
                &nbsp;<span>Add Service</span>
              </Button>
            </form>
          </Card>
          <div className="hidden md:flex w-full max-w-md">
              <Lottie
                animationData={addAnimation}
                loop={false}
                className="object-contain"
              />
              ;
            </div>
          </div>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default AddService;
