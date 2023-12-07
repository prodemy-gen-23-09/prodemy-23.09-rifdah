// import axios from "axios";
// import { useNavigate } from "react-router";
// import ProductCard from "../components/ProductCard";
// import useSWR from "swr";
// import React from "react";

// const HomeWithSWR = () => {
//   const navigate = useNavigate();

//   const onClickCard = (id) => {
//     navigate(`/detail/${id}`);
//   };

//   const getList = (url) => axios.get(url).then((response) => response.data);

//   const { data, isLoading, error, mutate } = useSWR(
//     "http://localhost:3000/products",
//     getList,
//     {
//       onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
//     }
//   );

//   if (error) return alert(JSON.stringify(error));
//   return (
//     <section className="flex flex-col justify-center">
//       <div className="flex justify-center gap-4">
//         <button
//           className="rounded-lg bg-sky-400 p-2 text-white self-center"
//           onClick={onClickGetData}
//         >
//           Get Data
//         </button>
//         {/*
//         <button
//           className="rounded-lg bg-sky-400 p-2 text-white self-center"
//           onClick={onClickPostData}
//         >
//           Post Data
//         </button> */}
//       </div>

//       <div className="flex justify-center gap-4 mt-8">
//         {isLoading ? (
//           <BeatLoader color="#38BDF8" />
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {data?.map(({ id, title, img }) => (
//               <ProductCard
//                 title={title}
//                 image={img}
//                 key={id}
//                 onClick={() => onClickCard(id, title)}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HomeWithSWR;
