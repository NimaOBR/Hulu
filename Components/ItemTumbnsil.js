import Image from "next/image";

// icons
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const ItemTumbnsil = forwardRef(({ item }, ref) => {
  console.log(item);
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className="px-2 mt-10 group cursor-pointer transition-all duration-100 ease-in-out transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        className="rounded"
        layout="responsive"
        width={1080}
        height={920}
        alt="image"
        src={
          `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
          `${BASE_URL}${item.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md mb-2">{item.overview}</p>
        <h2 className="text-white mb-2 text-1xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {item.title || item.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {item.media_type && `${item.media_type.toUpperCase()} `}&nbsp;{" "}
         ( {item.release_date || item.first_air_date} ){" "}
          <ThumbUpIcon className="h-5 mx-2" /> {item.vote_count}
        </p>
      </div>
    </div>
  );
});

export default ItemTumbnsil;
