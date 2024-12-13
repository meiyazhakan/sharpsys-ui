import { Stories } from "@/types/stories";
import Image from "next/image";

const UserStories = ({ review, customSlide }: { review: Stories, customSlide: any }) => {
  const { id, header, designation, image, content } = review;
  return (
    <div className={`rounded-3xl h-full p-9 pt-7.5 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none ${customSlide === 'aboutus' ? 'flex w-3/4 m-auto' : 'w-full'}`}>
    <div className={`flex ${customSlide === 'aboutus' ? 'flex-row w-2/5 m-auto' : 'justify-center items-center'}`}><Image className={`rounded-full h-48 ${customSlide === 'aboutus' ? 'px-4' : ''} `} src={image} alt={header}/> </div>
    <div className={`${customSlide === 'home' ? 'flex justify-between dark:border-strokedark' : 'w-full'}`}>
      <div className="p-2">
        <h2 className="text-metatitle2 text-bold text-black text-center dark:text-white">
          {header}
        </h2>
        <p className="text-xs text-slate-400 text-center">{designation}</p>
        <div className="text-center">
          <div className="inline-flex items-center"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="currentColor" className="w-4 h-4 text-yellow-700 cursor-pointer">
            <path fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"></path>
          </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-4 h-4 text-yellow-700 cursor-pointer">
            <path fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"></path>
          </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-4 h-4 text-yellow-700 cursor-pointer">
            <path fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"></path>
          </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-4 h-4 text-yellow-700 cursor-pointer">
            <path fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"></path>
          </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 h-4 cursor-pointer text-blue-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
            </path>
          </svg></span></div>
        </div>
        <p className="text-xs text-justify">{content}</p>
      </div>
    </div>
  </div>
  );
};

export default UserStories;
