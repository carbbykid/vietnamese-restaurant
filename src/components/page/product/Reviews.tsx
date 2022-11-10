import React from "react";
export type ReviewType = {
  rating: number;
  text: string;
};

const Reviews = ({ reviews }: { reviews: ReviewType[] }) => {
  return (
    <div>
      {reviews.map((review, idx) => (
        <div key={idx} className="mt-3 first:mt-0">
          <div className="text-chipo-heading">ChiPoPo</div>
          <div className="font-semibold text-chipo-orange mt-1">
            {review.rating} (rating)
          </div>
          <div className="mt-4">{review.text}</div>
        </div>
      ))}

      <div className="w-full md:w-[90vh] m-auto mt-14">
        <form action="">
          <label
            htmlFor="name"
            className="text-[20px] font-semibold text-chipo-heading"
          >
            Leave your experience
          </label>
          <input
            className="w-full block mt-5 outline-none px-4 py-2 border-chipo-heading border rounded-sm"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
          />
          <div className="mt-5">Rating</div>
          <textarea
            className="w-full mt-5 px-4 py-2 border-chipo-heading outline-none border rounded-sm"
            name=""
            id=""
            placeholder="Review Message..."
          ></textarea>

          <button className="px-5 mt-10 py-2 bg-chipo-heading hover:bg-chipo-blue duration-200 cursor-pointer text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
