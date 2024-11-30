import Stars from "./Stars";

function Review() {
  return (
    <div className="w-full border-b-2 border-gray-200 p-5">
      <div>March 25, 2024</div>
      <div className="flex">
        <div className="basis-1/4 space-y-1">
          <div className="flex items-center gap-2 text-xl font-bold">
            <i className="fa-regular fa-circle-user text-2xl"></i>
            John Doe
          </div>
          <div className="font-bold">Item details</div>
          <div>
            <p>Bed size: King</p>
            <p>Color: Gray</p>
          </div>
          <div className="font-bold">Sold by</div>
          <div>TechMart.com</div>
        </div>
        <div className="basis-3/5 space-y-1">
          <div className="flex items-center gap-2">
            <Stars className={"text-lg"} />{" "}
            <span className="font-bold">Verified Purchase</span>{" "}
            <i className="fa-solid fa-circle-info"></i>
          </div>
          <div className="font-bold">High quality bed for modern bedroom!</div>
          <p>
            A really good bed that with high quality set of comfortable mattress
            and pillows. It is really worth to buy. I’m glad that I discovered
            this match for my bedroom. Also it is really beautiful and come in
            handy for sleeping.
          </p>
          <div className="flex items-center gap-5 py-5">
            <div>Helpful review?</div>
            <div className="text-md flex items-center gap-2">
              <i className="fa-regular fa-thumbs-up text-xl"></i>9
            </div>
            <div className="text-md flex items-center gap-2">
              <i className="fa-regular fa-thumbs-down text-xl"></i>2
            </div>
            <div className="border-l-2 border-gray-500 px-5">Report</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
