import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import { AiOutlineUpload } from "react-icons/ai";
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateService = () => {
  const axios = useAxios();
  const { name, image, price, description, area } = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  //* Hande Update Service
  const handleUpdateService = async (e) => {
    e.preventDefault();

    // Data from Input
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = Number(form.price.value);
    const image = form.image.value;
    const area = form.area.value;

    // Servie object
    const service = { name, area, description, price, image };

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

    //* Now update the Service
    const toastId = toast.loading("Updateing service...");
    try {
      const res = await axios.put(`/update-service/${id}`, service);
      if (res?.data?.matchedCount > 0) {
        toast.success("Service updated successfully!", { id: toastId });
        navigate("/manageService");
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error.message);
    }
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Update Service</title>
      </Helmet>
      <main className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-3 py-10">
          <Card className="max-w-lg w-full mx-auto my-16">
            <form
              onSubmit={handleUpdateService}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Update Service
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Service Name" />
                </div>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Service Name"
                  defaultValue={name}
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
                  defaultValue={image}
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
                  defaultValue={price}
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
                  defaultValue={area}
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
                  defaultValue={description}
                />
              </div>
              <Button type="submit" color="purple" className="font-bold">
                <AiOutlineUpload />
                &nbsp;<span>Update Service</span>
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default UpdateService;
