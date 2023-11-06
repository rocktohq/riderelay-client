import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <Footer container className="mt-16">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Link to="/" className="flex flex-col justify-center">
              <img
                src="/favicon.png"
                className="h-12 md:h-16 w-full"
                alt="RideRelay"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Ride<span className="text-purple-600">Relay</span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Team</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Link>Github</Link>
                <Link>Facebook</Link>
                <Link>Discord</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link>Privacy Policy</Link>
                <Link>Terms &amp; Conditions</Link>
                <Link>Disclaimer</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="RideRelay" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon icon={BsFacebook} />
            <Footer.Icon icon={BsInstagram} />
            <Footer.Icon icon={BsTwitter} />
            <Footer.Icon icon={BsGithub} />
            <Footer.Icon icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Foot;
