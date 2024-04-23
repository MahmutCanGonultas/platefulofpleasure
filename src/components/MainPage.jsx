import data from "../data";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";

const getImageUrl = (index) => {
  switch (index) {
    case 1:
      return image1;
    case 2:
      return image2;
    case 3:
      return image3;
    case 4:
      return image4;
    default:
      return null;
  }
};
const MainPage = () => {
  const renderedData = data.map((item, index) => {
    const { id, title, desc } = item;
    let sd = `image` + index + 1;
    let stemp;
    if ((index + 1) % 2 == 0) {
      stemp = `md:flex-row`;
    } else {
      stemp = `md:flex-row-reverse`;
    }
    return (
      <div
        key={id}
        className={`md:max-w-screen-xl md:mx-auto  h-96 md:h-[32rem]  flex flex-col mt-8 ${stemp}`}
      >
        <div className="bg-neutral-800 md:bg-transparent  p-4 md:w-2/5 flex flex-col justify-center">
          <h2 className="text-center font-semibold text-3xl mb-8  ">{title}</h2>
          <p className="text-xl">{desc}</p>
        </div>
        <img
          src={getImageUrl(index + 1)}
          alt=""
          className="w-full object-cover md:w-3/5"
        />
      </div>
    );
  });
  return <div className="">{renderedData}</div>;
};

export default MainPage;
