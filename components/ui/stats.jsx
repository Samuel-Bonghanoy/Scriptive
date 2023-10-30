import Image from "next/image";

function Stats() {
  return (
    <div className="stats shadow h-[80%] w-[70%] text-white">
      <div className="stat flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 items-center">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              viewBox="0 -960 960 960"
              width="100"
              fill="white"
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stat flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value  text-main">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stat flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-main">2.6M</div>
          <div className="stat-desc">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
