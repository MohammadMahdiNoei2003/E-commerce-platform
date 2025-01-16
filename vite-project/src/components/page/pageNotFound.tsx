import { Link } from "react-router-dom";
import image from "/images/404.jpg"; 

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-lg leading-10 w-3/5">
        <p>!صفحه‌ای که دنبال آن بودید پیدا نشد</p>
        <Link to="/" className="text-blue-500 text-lg mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="inline-block mr-4 w-5 h-5"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.522 4.25 20 12l-7.478 7.75-.733-.709 6.302-6.531H4v-1.02h14.09L11.79 4.959z"
              clipRule="evenodd"
            ></path>
          </svg>
          صفحه‌ی اصلی
        </Link>
        <img className="w-full" src={image} alt="404 Not Found" />
      </div>
    </div>
  );
};

export default PageNotFound;
