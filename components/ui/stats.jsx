import Image from "next/image";

function Stats() {
  return (
    <div className="stats shadow h-[80%] w-[70%] text-white">
      <div className="stat flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <div className="stat-title text-white text-lg font-bold">
            Downloadable as PDF or PNG
          </div>
          <div className="stat-value text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              viewBox="0 -960 960 960"
              width="100"
              fill="#FFDE59"
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
          </div>
          <div className="stat-desc text-gray-400">
            <p className="max-w-[ch]">Download your output at high quality</p>
          </div>
        </div>
      </div>

      <div className="stat flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <div className="stat-title text-white text-lg font-bold">
            Downloadable as PDF or PNG
          </div>
          <div className="stat-value text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              viewBox="0 -960 960 960"
              width="100"
              fill="#FFDE59"
            >
              <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
          </div>
          <div className="stat-desc text-gray-400">
            <p className="max-w-[ch]">Download your output at high quality</p>
          </div>
        </div>
      </div>

      <div className="stat flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <div className="stat-title text-white text-lg font-bold ">
            Downloadable as PDF or PNG
          </div>
          <div className="stat-value text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              viewBox="0 -960 960 960"
              width="100"
              fill="#FFDE59"
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
          </div>
          <div className="stat-desc text-gray-400">
            <p className="max-w-[ch]">Download your output at high quality</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
