import restaurant from "../images/restaurant.jpg";

const Header = () => {
  return (
    <header>
      <div className="relative h-[90vh]  w-full">
        <img src={restaurant} alt="" className="h-[90vh] object-cover w-full" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </header>
  );
};

export default Header;
