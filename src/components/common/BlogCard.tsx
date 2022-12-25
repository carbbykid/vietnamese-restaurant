import Link from "next/link";
import Image from "next/image";
import { FaDog, FaRegEdit, FaWaze } from "react-icons/fa";

const BlogCard = ({
  blog,
  classNameWrap,
  index,
}: {
  blog: any;
  classNameWrap: string;
  index: number;
}) => {
  // const dispatch = useDispatch();
  const primaryItem = index === 0;
  return (
    <div
      className={`text-chipo-bg-primary ${classNameWrap} ${
        !primaryItem && "flex gap-4"
      }`}
    >
      <Image
        src={blog.imgUrl}
        width={primaryItem ? 950 : 280}
        height={primaryItem ? 600 : 180}
        objectFit="cover"
      />

      <div className="flex-1">
        <div className="flex items-center">
          <FaWaze className="mr-2" />
          <h4 className="mr-2 font-medium text-chipo-hover-text">
            {blog.creater}
          </h4>
          <span className="mr-2 font-extralight">{blog.date}</span>
        </div>
        <div className="flex justify-between mt-2">
          <h4
            className={`font-bold ${
              primaryItem ? "mt-2 md:mt-3 text-2xl" : "text-lg"
            } `}
          >
            {blog.blogName}
          </h4>
          {primaryItem && (
            <Link href={`/blog/${blog.id}`}>
              <a className="cursor-pointer mt-1 decoration-current">
                Read more
              </a>
            </Link>
          )}
        </div>

        <p className={`${!primaryItem ? "text-base" : ""} mt-1 line-clamp-3`}>
          {blog.desc}
        </p>

        <div className="mt-3">
          {blog.tabs.map((tag: any, idx: any) => (
            <span
              key={idx}
              className="border-chipo-hover-text px-3 py-1 rounded-lg border-2 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
