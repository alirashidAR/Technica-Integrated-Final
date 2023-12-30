import google from "../imageForWebsite/google.webp";
import p2 from "../imageForWebsite/comets/p2.png";
import p3 from "../imageForWebsite/comets/p3.png";
import rosen from "../imageForWebsite/rosen.png";
import echo from "../imageForWebsite/echo.png";
import wolfram from "../imageForWebsite/wolfram.png";
import ValueCreed from "../imageForWebsite/ValueCreed.png"

function Sponsor() {
  return (
    <div className="font-Michroma mb-72 md:mb-96 min-h-screen ">
      <div className="relative bg h-screen mt-10">
        <img
          src={p3}
          alt="Comet"
          className="comet absolute top-72 left-72  md:w-1/12 w-16 max-md:hidden "
        />
        <p className="text-center mb-8">
          <span className="heading heading1">SPO</span>
          <span className="heading heading2">NSORS</span>
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 justify-center gap-y-10 justify-items-center">
          <h2 className="text-white col-span-4 md:text-5xl"> Title Sponsor </h2>
          <div className="col-span-3 md:col-span-4 flex flex-col items-center justify-center ">
            <div className="h-28 w-28 md:h-52 md:w-52 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={ValueCreed}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Value Creed
              </p>
            </div>
          </div>
          <h2 className="text-white md:text-3xl col-span-4 md:mt-8 ">
            Community Sponsors
          </h2>
          <div className="col-span-1 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={rosen}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Rosenfeld
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={echo}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Echo 3D
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={wolfram}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Wolfram 
              </p>
            </div>
          </div>
          <h2 className="text-white md:text-3xl col-span-4 md:mt-8 ">
            Outreach Partners
          </h2>
          <div className="col-span-2 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Value Creed
              </p>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center max-md:mr-28">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Value Creed
              </p>
            </div>
          </div>
        </div>
        <img
          src={p2}
          alt="Comet"
          className="comet absolute bottom-32 right-28 md:w-1/12 w-16 max-md:hidden"
        />
      </div>
    </div>
  );
}

export default Sponsor;
