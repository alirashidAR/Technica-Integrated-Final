import FAQList from "./FAQList"; // Assuming this imports the FAQ list component
import p1 from "../imageForWebsite/comets/p1.png";
import p2 from "../imageForWebsite/comets/p2.png";


export default function FAQ() {
  return (
    <div className="font-Michroma bg-cover bg-center flex flex-col max-md:flex-col mb-10 mt-20">
            <img
                src={p1}
              alt="Comet"
              className="comet absolute bottom-36 left-80  md:w-1/12 w-16 max-md:hidden"
            />
            <img
              src={p2}
              alt="Comet"
              className="comet absolute bottom-92 right-16  md:w-1/12 w-16"
            />
      <h1 className='text-white mb-8 text-8xl md:mt-12 md:mb-12 max-md:text-4xl'>FAQs</h1>
      <div className="flex-grow flex flex-col justify-center items-center text-center py-10 ">
        <div className="max-md:grid max-md:grid-cols-1  md:gap-20">
          {/* Displaying FAQ items in two columns for desktop view */}
          <FAQList />
        </div>
        <div className="flex items-start justify-start text-center pt-12">
          <a target="_blank" rel="noreferrer"
            href="https://drive.google.com/file/d/1mBNDdQdZjdECvB5jtT9Od40kfTQVJJp9/view?usp=sharing"
            className="bg-transparent hover:bg-[#27A5EF] text-white font-semibold hover:text-black py-2 px-4 border border-[#27A5EF] hover:border-transparent rounded"
          >
            CODE OF CONDUCT
          </a>
        </div>
      </div>
    </div>
  );
}
