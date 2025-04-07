import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-100">
        <div className="text-6xl p-2">Hi, I am Manpreet </div>
        <div className="text-6xl p-2">Software Engineer</div>
      </div>
      <div className="flex text-6xl mt-10">Projects</div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="p-2 inline items-stretch">
          <div className="flex text-2xl hover:text-blue-400">
            <Link to="/mars-dashboard">Mars Dashboard</Link>
          </div>
          <img src="/mars2.jpeg" className="h-50" />
          <div className="flex flex-col justify-between">
            <Link
              to="/item-catalog"
              className="flex text-sm mt-5 h-30 hover:text-blue-400"
            >
              A web application that retrieves and displays high-resolution
              images captured by NASA’s Mars rovers using the official NASA Mars
              Rover Photos API. Users can explore images by rover (Curiosity,
              Opportunity, Spirit), camera type, and Martian sol (solar day),
              with responsive design and intuitive UI for seamless browsing.
            </Link>
            <div className="flex mt-5">
              <Link
                to="https://www.typescriptlang.org/"
                className="flex ml-4 h-6"
              >
                <img src="/ts.svg" className="rounded-md" />
              </Link>
              <Link to="https://react.dev/" className="flex ml-4 h-6">
                <img src="/react.svg" />
              </Link>
              <Link to="https://www.python.org/" className="flex ml-4 h-6">
                <img src="/py.png" />
              </Link>
              <Link
                to="https://fastapi.tiangolo.com/"
                className="flex ml-4 h-6"
              >
                <img src="/fast-api.png" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 inline">
          <div className="flex text-2xl hover:text-blue-400">
            <Link to="/projects/item-catalog">Item Catalog</Link>
          </div>
          <img src="" className="h-50" />
          <div className="flex flex-col justify-between">
            <Link
              to="/projects/item-catalog"
              className="flex text-sm mt-5 h-30 hover:text-blue-400"
            >
              Catalog Item App is integrated with third party user registration
              and authentication that provides a list of items within a variety
              of categories
            </Link>
            <div className="flex mt-5">
              <Link to="https://react.dev/" className="flex ml-4 h-6">
                <img src="/react.svg" />
              </Link>
              <Link to="https://www.python.org/" className="flex ml-4 h-6">
                <img src="/py.png" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-6xl mt-10">Contact</div>
      <div className="flex ml-2 p-2 mt-5">manpreet1107@gmail.com</div>
      <div className="flex text-6xl mt-10">Skills</div>
      <div className="flex p-2 mt-5">
        <Link to="https://nodejs.org/en" className="flex ml-2 h-10">
          <img src="/node.png" className="rounded-md" />
        </Link>
        <Link to="https://www.typescriptlang.org/" className="flex ml-4 h-10">
          <img src="/ts.svg" className="rounded-md" />
        </Link>
        <Link to="https://www.javascript.com/" className="flex ml-4 h-10">
          <img src="/js.png" className="rounded-md" />
        </Link>
        <Link to="https://www.postgresql.org/" className="flex ml-4 h-10">
          <img src="/postgres.png" className="rounded-md" />
        </Link>
        <Link to="https://nestjs.com/" className="flex ml-4 h-10">
          <img src="/nestjs.svg" />
        </Link>
        <Link to="https://react.dev/" className="flex ml-4 h-10">
          <img src="/react.svg" />
        </Link>
        <Link to="https://expressjs.com/" className="flex ml-4 h-10">
          <img src="/express.png" />
        </Link>
        <Link to="https://emberjs.com/" className="flex ml-4 h-10">
          <img src="/ember.svg" />
        </Link>
        <Link to="https://www.python.org/" className="flex ml-4 h-10">
          <img src="/py.png" />
        </Link>
        <Link to="https://fastapi.tiangolo.com/" className="flex ml-4 h-10">
          <img src="/fast-api.png" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
