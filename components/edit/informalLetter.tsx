function InformalLetter() {
  return (
    <div className="flex h-[1056px] w-[816px] bg-white flex-col px-12 py-12 text-black gap-2 shadow-gray-700 shadow-md rounded-md">
      <div className="flex flex-col">
        <div className="flex flex-col justify-end">
          <h1 className="text-xl font-bold self-end">John Smith</h1>
          <div className="flex flex-col">
            <p className="text-[0.65rem] self-end">+123-456-7890</p>
            <p className="text-[0.65rem] self-end">johnsmith@scriptive.com</p>
            <p className="text-[0.65rem] self-end">123 Anywhere St. Any City</p>
          </div>
        </div>

        <p className="text-[0.6rem] self-end pb-5">14th August 2026</p>
        <p className="text-[0.55rem] pb-2">Dear Recipient,</p>
        <p className="text-[0.55rem] pb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolore
          deleniti est? Iste alias veritatis minus accusantium laudantium?
          Incidunt iure, eos porro a totam itaque reprehenderit aperiam eum
          maxime consequuntur! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Est reprehenderit atque quis numquam officiis
          consectetur eligendi assumenda ut saepe ea?
        </p>
        <p className="text-[0.55rem] pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          cumque. Voluptatibus, voluptas cumque debitis id dicta laudantium
          optio nihil exercitationem quod ut ducimus atque, dolorem odio omnis
          vitae autem maiores quae cupiditate eligendi sequi aspernatur
          consectetur, tenetur consequuntur quas.
        </p>
        <p className="text-[0.55rem] pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore
          cumque. Voluptatibus, voluptas cumque debitis id dicta laudantium
          optio nihil exercitationem quod ut ducimus atque, dolorem odio omnis
          vitae autem maiores quae cupiditate eligendi sequi aspernatur
          consectetur, tenetur consequuntur quas.
        </p>
        <p className="text-[0.55rem] pb-5">Sincerely,</p>
        <p className="text-[0.65rem] pb-2 font-semibold">John Smith</p>
      </div>
    </div>
  );
}

export default InformalLetter;
