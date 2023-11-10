import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div>
      <div className="featured-item bg-fixed   text-white">
        <div className="mx-auto text-center  md:w-3/12 my-20 pt-7">
          <h1 className="text-yellow-600 ">---Check it out---</h1>
          <h4 className="text-4xl uppercase border-y-4 py-4 ">FROM OUR MENU</h4>
        </div>
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-12">
            <p>March 20, 2023</p>
            <h3>WHERE CAN I GET SOME?</h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </h4>
            <button className="btn btn-outline border-0 border-b-4">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
