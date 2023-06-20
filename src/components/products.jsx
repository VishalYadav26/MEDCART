import { spiralArrow } from "../assets/AllImages";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const { data, isLoading } = useContext(UserContext);
  // const allProduct = data?.data;
  const allProduct = [
    {
      _id: 1,
      title: "Parijaat Patti Powder",
      isNew: true,
      oldPrice: "200",
      price: 150,
      description:
        "It is a natural product.Helpful in soothing joint pain and digestive disorders. Helpful in boosting immunity",
      category: "Adult",
      image:
      "https://m.media-amazon.com/images/I/61HvD1S5E2L.jpg",
      rating: 4.5,

    },
    {
      _id: 2,
      title: "Himalaya Gokshura",
      isNew: true,
      oldPrice: "70",
      price: 65,
      description:
        "Gokshura(Tribulus Terrestris) is known to help improve stamina and vigour. Supports healthy testosterone levels and helps boost performance. Helps improve desire and drive, which subsequently improves performance.",
      category: "Men",
      image:
        "https://m.media-amazon.com/images/I/619JAXBeiGL._AC_UL600_FMwebp_QL65_.jpg",
      rating: 4.9,
    },
    {
      _id: 3,
      title: "Sheopals Hyper Care",
      isNew: true,
      oldPrice: "70",
      price: 55.99,
      description:
        "Helps control hypertension. Helps correct irregular heartbeat. Helps fight stress & anxiety. Helps prevent stroke & other heart disorders. Supports heart health",
      category: "Adult",
      image:
        "https://m.media-amazon.com/images/I/71c6kN2rU5L._SX679_.jpg",
      rating: 3.9,
    },
    {
      _id: 4,
      title: "Vitality & Vigour",
      isNew: true,
      oldPrice: "70",
      price: 50,
      description:
        "Helps to increase Immunity, Blood Circulation, Iron Absorption, Hormonal Balance, Strength, Power, Energy, long lasting Good Health . Boosts in Immune system and Fat Metabolism of Females During workouts",
      category: "Women",
      image:
        "https://m.media-amazon.com/images/I/51WnZzhLSQL._SX522_.jpg",
      rating: 4.8,
    },
    {
      _id: 5,
      title: "Zingavita Sharp Eye",
      isNew: true,
      oldPrice: "800",
      price: 695,
      description:
        "With juggling work, housework and your little ones schooling all at home, we're all guilty of letting cartoons babysit for a while. And with that comes the worry of eye strain for young and growing eyes. Zingavita sharp eye gummies are a delicious daily boost to protect your little ones eyes from the harmful effects of increased screen time",
      category: "Children",
      image:
        "https://m.media-amazon.com/images/I/61UJ0MUEByL._SL1500_.jpg",
      rating: 5,
    },
    {
      _id: 6,
      title: "Ashwagandha",
      isNew: true,
      oldPrice: "80",
      price: 75,
      description:
        "Boosts Immunity: Ashwagandha is known to significantly increase WBCs in the body thereby boosting the strength of the immune system to fight infections. Stress: Ashwagandha helps to reduce serum cortisol levels, which is the main stress hormone in the body, thereby helping to relieve stress.; Anti-Fatigue: Ashwagandha helps to combat fatigue and in boosting energy levels",
      category: "Old",
      image:
        "https://m.media-amazon.com/images/I/81I6xgGNf9L._SX679_.jpg",
      rating: 4.6,
    },
  ];
  const [likedItem, setLikedItems] = useState(false);
  // Logic for set Liked items
  const handledLikedItems = (id) => {
    setLikedItems(!likedItem);
  };
  // Logic for set Liked items

  return (
    <section className="mt-14 px-5 max-w-7xl mx-auto font-gilroyMedium">
      <div>
        <div className="flex justify-center items-center my-4 gap-6">
          <h2 className="text-3xl md:text-5xl font-gilroyBold">
            <span className="span">Exclusive</span> <span className="font-eagle text-black cursor-pointer text-4xl">
              MED_CART.
            </span> Products
          </h2>
          <div>
            <img
              src={spiralArrow}
              alt=""
              className="h-10 w-10 -z-10 xl:w-20 xl:h-20"
            />
          </div>
        </div>
        <p className="font-gilroyMeduim text-center text-gray-400">
          Search for the latest articles and find amazing products to buy from
          our huge collection
        </p>
        {/* search Input */}
        <div className="relative w-full max-w-[500px] mx-auto mt-10">
          <FiSearch className="text-gray-300 text-2xl absolute left-5 top-[14px]" />
          <input
            type="text"
            className="bg-gray-100 h-14 w-full max-w-[500px] rounded font-gilroyRegular pl-16 outline-none focus:border-2 border-[#ffbdf0]"
            placeholder="Search Products by Category"
          />
          <button className="hidden sm:block bg-black text-white font-gilroyMedium h-12 w-[40%] absolute top-1 right-2 rounded">
            Explore Now
          </button>
          {/* Mobile buttton */}
          <button className="block sm:hidden bg-black text-white font-gilroyMedium h-12 w-[40%] absolute mt-5 right-0 rounded">
            Explore Now
          </button>
        </div>
      </div>
      <div className="grid px-5 mt-32 lg:mt-20 ">
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <div className="animate-pulse rounded-md p-4" key={n}>
              <div className="rounded-md bg-slate-200 h-72 w-full "></div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="bg-slate-200 w-32 rounded-md h-5 mb-3"></p>
                  <p className="bg-slate-200 w-32 rounded-md h-3"></p>
                </div>
                <div className=" bg-slate-200 h-8 rounded-md w-24"></div>
              </div>
            </div>
          ))}
        {allProduct?.map((card) => {
          const idString = (id) => {
            return String(id).toLowerCase().split(" ").join("");
          };
          const rootId = idString(card.title);
          // Logic for Navigating to detailed items
          const handleDetails = () => {
            navigate(`product/${rootId}`, { state: { item: card } });
          };
          // Logic for Navigating to detailed items
          return (
            <div
              // to={`/product/${card._id}`}
              className="relative cursor-pointer"
              key={card._id}
              onClick={handleDetails}
            >
              <div className="overflow-hidden w-full">
                <img
                  src={card.image}
                  alt=""
                  className="h-96 w-full overflow-hidden object-cover rounded-md hover:scale-110 duration-500"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <p className="font-gilroyBold  text-lg mb-1">{card.title}</p>
                  <p className="text-gray-400 text-base">Category : {card.category} <div> Rating : {card.rating} ⭐</div></p>
                </div>
                <div className="btn px-7 h-10 flex justify-center items-center font-gilroyBold text-gray-600 rounded-md">
                ₹{card.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;



// import { spiralArrow } from "../assets/AllImages";
// import { useContext, useState } from "react";
// import { UserContext } from "../App";
// import { FiSearch } from "react-icons/fi";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// function Products() {
//   const navigate = useNavigate();
//   const { data, isLoading } = useContext(UserContext);
//   const allProduct = data?.data;
//   const [likedItem, setLikedItems] = useState(false);
//   // Logic for set Liked items
//   const handledLikedItems = (id) => {
//     setLikedItems(!likedItem);
//   };
//   // Logic for set Liked items

//   return (
//     <section className="mt-14 px-5 max-w-7xl mx-auto font-gilroyMedium">
//       <div>
//         <div className="flex justify-center items-center my-4 gap-6">
//           <h2 className="text-3xl md:text-5xl font-gilroyBold">
//             <span className="span">Exclusive</span> Products
//           </h2>
//           <div>
//             <img
//               src={spiralArrow}
//               alt=""
//               className="h-10 w-10 -z-10 xl:w-20 xl:h-20"
//             />
//           </div>
//         </div>
//         <p className="font-gilroyMeduim text-center text-gray-400">
//           Search for the latest articles and find amazing products to buy from
//           our huge collection
//         </p>
//         {/* search Input */}
//         <div className="relative w-full max-w-[500px] mx-auto mt-10">
//           <FiSearch className="text-gray-300 text-2xl absolute left-5 top-[14px]" />
//           <input
//             type="text"
//             className="bg-gray-100 h-14 w-full max-w-[500px] rounded font-gilroyRegular pl-16 outline-none focus:border-2 border-[#ffbdf0]"
//             placeholder="Search Products by Category"
//           />
//           <button className="hidden sm:block bg-black text-white font-gilroyMedium h-12 w-[40%] absolute top-1 right-2 rounded">
//             Explore Now
//           </button>
//           {/* Mobile buttton */}
//           <button className="block sm:hidden bg-black text-white font-gilroyMedium h-12 w-[40%] absolute mt-5 right-0 rounded">
//             Explore Now
//           </button>
//         </div>
//       </div>
//       <div className="grid px-5 mt-32 lg:mt-20 ">
//         {isLoading &&
//           [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
//             <div className="animate-pulse rounded-md p-4" key={n}>
//               <div className="rounded-md bg-slate-200 h-72 w-full "></div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <p className="bg-slate-200 w-32 rounded-md h-5 mb-3"></p>
//                   <p className="bg-slate-200 w-32 rounded-md h-3"></p>
//                 </div>
//                 <div className=" bg-slate-200 h-8 rounded-md w-24"></div>
//               </div>
//             </div>
//           ))}
//         {allProduct?.map((card) => {
//           const idString = (id) => {
//             return String(id).toLowerCase().split(" ").join("");
//           };
//           const rootId = idString(card.title);
//           // Logic for Navigating to detailed items
//           const handleDetails = () => {
//             navigate(`product/${rootId}`, { state: { item: card } });
//           };
//           // Logic for Navigating to detailed items
//           return (
//             <div
//               // to={`/product/${card._id}`}
//               className="relative cursor-pointer"
//               key={card._id}
//               onClick={handleDetails}
//             >
//               <div className="overflow-hidden w-full">
//                 <img
//                   src={card.image}
//                   alt=""
//                   className="h-96 w-full overflow-hidden object-cover rounded-md hover:scale-110 duration-500"
//                 />
//               </div>

//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <p className="font-gilroyBold  text-lg mb-1">{card.title}</p>
//                   <p className="text-gray-400 text-base">{card.category}</p>
//                 </div>
//                 <div className="btn px-7 h-10 flex justify-center items-center font-gilroyBold text-gray-600 rounded-md">
//                   ${card.price}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Products;
