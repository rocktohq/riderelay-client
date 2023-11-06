import { Accordion } from "flowbite-react";
import { BiQuestionMark } from "react-icons/bi";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="mx-auto text-center">
        <BiQuestionMark className="text-7xl text-red-600 mx-auto" />
        <p className="">Have any quesion in mind?</p>
      </div>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>What is RideRelay?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              RideRelay is a carpooling and ridesharing application.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <Link
                to="/register"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                register&nbsp;
              </Link>
              and start taking or giving ride.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Is there any privacy security ensurence?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Users privacy and security is our responsibility.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the differences between RideRelay and others?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core setups of our company. We
              choose to provide the best service and support to the community.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, user can choose which company to copeup with.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
