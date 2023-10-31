import Image from "next/image";

function FormalLetterv2() {
  return (
    <div className="flex h-[1056px] w-[816px] bg-white flex-col px-12 py-12 text-black gap-2 shadow-gray-700 shadow-md rounded-md">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">John Smith</h1>
              <p className="text-lg font-semibold">Software Engineer</p>
              <p className="text-[1.1rem] ">+123-456-7890</p>
              <p className="text-[1.1rem] ">johnsmith@scriptive.com</p>
              <p className="text-[1.1rem] ">123 Anywhere St. Any City</p>
            </div>
            <div className="flex flex-col items-end">
              <Image
                src="/logo.svg"
                alt="Next.js Logo"
                width={100}
                height={60}
                priority
              />
              <p className="text-[1.1rem] self-center">Scriptive</p>
            </div>
          </div>

          <p className="text-[1.35rem] uppercase py-7 font-semibold text-yellow-600">
            Job Reference: Senior Developer
          </p>
          <div className="text-[1.1rem] font-semibold pb-5 flex text-yellow-600 justify-between">
            <p>Dear Recipient,</p>
            <p className="text-[0.9rem]">14th August 2026</p>
          </div>
          <p className="text-[1rem] pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolore
            deleniti est? Iste alias veritatis minus accusantium laudantium?
            Incidunt iure, eos porro a totam itaque reprehenderit aperiam eum
            maxime consequuntur! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Est reprehenderit atque quis numquam officiis
            consectetur eligendi assumenda ut saepe ea?
          </p>
          <p className="text-[1rem] pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dolore cumque. Voluptatibus, voluptas cumque debitis id dicta
            laudantium optio nihil exercitationem quod ut ducimus atque, dolorem
            odio omnis vitae autem maiores quae cupiditate eligendi sequi
            aspernatur consectetur, tenetur consequuntur quas.
          </p>
          <p className="text-[1rem] pb-5">Sincerely,</p>
          <p className="text-[1rem] pb-5">John Smith</p>
          <p className="text-[1rem] pb-5">insert signature</p>
        </div>
        <div className="justify-self-end">
          <hr className="border-1 border-black my-3" />
          <div className="flex justify-between">
            <div>
              <p className="text-[1.1rem] font-semibold">Recipient Name</p>
              <p className="text-[1.1rem] font-semibold mb-2">
                Hiring Manager, Scriptive HQ
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[1.1rem] self-end">+123-456-7890</p>
              <p className="text-[1.1rem] self-end">
                recipientname@scriptive.com
              </p>
              <p className="text-[1.1rem] self-end">
                123 Anywhere St. Any City
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormalLetterv2;
