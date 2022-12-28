import Link from "next/link";
import Image from "next/image";
import { FaLink, FaWaze } from "react-icons/fa";

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
      className={`text-chipo-bg-primary ${classNameWrap} md:${
        !primaryItem && "flex gap-4"
      } mt-8 md:mt-0`}
    >
      <Image
        src={blog.imgUrl}
        width={primaryItem ? 950 : 280}
        height={primaryItem ? 600 : 180}
        objectFit="cover"
      />

      <div className={`flex-1 ${primaryItem ? "mt-2" : ""} `}>
        <div className="flex items-center">
          <h4 className="mr-2 font-medium text-chipo-hover-text">
            {blog.creater}
          </h4>
          <FaWaze className="mr-2" />
          <span className="mr-2 font-extralight">{blog.date}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Link href={`/`}>
            <h4
              className={`font-bold ${
                primaryItem ? "text-2xl" : "text-lg"
              } cursor-pointer hover:underline duration-200 `}
            >
              {blog.blogName}
            </h4>
          </Link>
          {primaryItem && (
            <Link href={`/`}>
              <a className="flex hover:underline duration-200 items-center cursor-pointer mt-1 decoration-current">
                Read more <FaLink className="ml-2 hover:underline" />
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
