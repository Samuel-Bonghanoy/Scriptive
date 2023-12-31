function FormalLetter() {
  return (
    <div className="flex bg-white flex-col px-5 py-5 text-black gap-2">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">John Smith</h1>
        <div className="flex justify-between">
          <p className="text-xs font-semibold">Software Engineer</p>
          <div className="flex flex-col">
            <p className="text-[0.65rem] self-end">+123-456-7890</p>
            <p className="text-[0.65rem] self-end">johnsmith@scriptive.com</p>
            <p className="text-[0.65rem] self-end">123 Anywhere St. Any City</p>
          </div>
        </div>
        <hr className="border-1 border-black my-3" />
        <p className="text-[0.6rem] self-end">14th August 2026</p>
        <p className="text-[0.6rem] font-semibold">Recipient Name</p>
        <p className="text-[0.6rem] font-semibold mb-2">
          Hiring Manager, Scriptive HQ
        </p>

        <p className="text-[0.6rem] ">+123-456-7890</p>
        <p className="text-[0.6rem] ">johnsmith@scriptive.com</p>
        <p className="text-[0.6rem] ">123 Anywhere St. Any City</p>

        <p className="text-[0.85rem] uppercase py-3 font-semibold">
          Job Reference: Senior Developer
        </p>
        <p className="text-[0.55rem] pb-2">Dear Recipient,</p>
        <p className="text-[0.55rem] pb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolore
          deleniti est? Iste alias veritatis minus accusantium laudantium?
          Incidunt iure, eos porro a totam itaque reprehenderit aperiam eum
          maxime consequuntur! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Est reprehenderit atque quis numquam officiis
          consectetur eligendi assumenda ut saepe ea? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolor, dolore cumque. Voluptatibus,
          voluptas cumque debitis id dicta laudantium optio nihil exercitationem
          quod ut ducimus atque, dolorem odio omnis vitae autem maiores quae
          cupiditate eligendi sequi aspernatur consectetur, tenetur consequuntur
          quas.
        </p>
        <p className="text-[0.55rem] pb-5">Sincerely,</p>
        <p className="text-[0.55rem] pb-2">John Smith</p>
      </div>
    </div>
  );
}

export default FormalLetter;
