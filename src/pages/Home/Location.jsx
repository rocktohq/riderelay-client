import { Button, TextInput, Textarea } from "flowbite-react";
import { BiPaperPlane } from "react-icons/bi";
import Map from "./Map";

const Location = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div>
        <div className="mb-5">
          <h3 className="text-2xl font-bold">Our Office</h3>
          <address>
            <p>RideRelay Corp,</p>
            <p>Jamalpur-2000,</p>
            <p>Dhaka, Bangladesh</p>
            <p>Phone: +880 171 123 456</p>
            <p>Email: riderelay@riderelay.co</p>
          </address>
        </div>
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <div className="mt-5">
          <div className="mb-3">
            <TextInput type="text" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <TextInput type="email" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <Textarea rows="4" placeholder="Write your message..." />
          </div>
          <Button color="purple" className="rounded w-full font-bold">
            <BiPaperPlane />
            <span className="ml-1">Send Message</span>
          </Button>
        </div>
      </div>
      <div className="">
        <Map />
      </div>
    </div>
  );
};

export default Location;
