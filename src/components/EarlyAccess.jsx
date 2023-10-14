import Heading from "./Heading";

const EarlyAccess = () => {
  return (
    <div className="mt-10 md:mt-16">
      <Heading
        title="Get early access"
        subtitle="Be the first to know when we launch!"
      />
      <div className="flex flex-col gap-4 mt-10 max-w-[755px] px-4 md:px-8 mx-auto">
        <input
          type="text"
          placeholder="Enter your full name"
          className="p-4 rounded-2xl outline-[0px]"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-4 rounded-2xl outline-[0px]"
        />
        <button className="p-4 rounded-lg bg-primary text-white">
          Join waitlist now
        </button>
      </div>
    </div>
  );
};

export default EarlyAccess;
