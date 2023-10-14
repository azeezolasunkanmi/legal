import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="my-16">
      <h2 className="text-center text-secondary font-poppins text-[15px] px-4 md:text-[18px] lg:text-[24px]">
        Some of the top clients we’ve worked with..
      </h2>
      <div className="px-4 mt-4 w-full flex items-center justify-center flex-wrap border-2">
        {clients.map(client => (
          <div
            key={client.id}
            className="w-[20%] m-4 md:w-[10%] md:mx-5 lg:w-[10%] lg:mx-7 xl:w-[6%] xl:mx-10"
          >
            <img src={client.logo} className="w-full h-full grayscale" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
