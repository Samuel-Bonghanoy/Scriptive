import Image from "next/image";

function Stats() {
  return (
    <div className="stats shadow h-[80%] w-[70%] text-white">
      <div className="stat flex flex-col gap-3 justify-center">
        <div className="flex flex-col gap-3">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-main">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stat flex flex-col gap-3 justify-center">
        <div className="flex flex-col gap-3">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value  text-main">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>

      <div className="stat flex flex-col gap-3 justify-center">
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
