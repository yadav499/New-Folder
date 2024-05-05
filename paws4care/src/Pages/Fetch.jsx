// import  { useEffect, useState } from "react";
// import axios from "axios";

// export default function Fetch() {
//   const [details, setDetails] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/v1/user/fetchdetails");
//         // Check if response.data.user is an array before updating state
//         setDetails(response.data.user);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
  

//   return (
//     <div className="pt-[10%]">
//       <h1>All Details</h1>
//       <ul className="my-11">
//         {details.map((detail, index) => (
//           <li key={index} className="my-[4rem]">
//             <p>Name: {detail.name}</p>
//             <p>Email: {detail.email}</p>
//             <p>Organisation: {detail.organisation}</p>
//             <p>Phone Number: {detail.phoneNo}</p>
//             <p>Message: {detail.message}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Fetch() {
  const [details, setDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/user/fetchdetails");
        setDetails(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter details based on search query
  const filteredDetails = details.filter(detail =>
    (detail.name && detail.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (detail.email && detail.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (detail.organisation && detail.organisation.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (typeof detail.phoneNo === 'string' && detail.phoneNo.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (detail.message && detail.message.toLowerCase().includes(searchQuery.toLowerCase()))
);


  return (
    <div className="pt-[50%] md:pt-[10%]">
    <h1 className="text-center text-[1.5rem] font-semibold" style={{ fontFamily: "'manrope', sans-serif" }}>All Details</h1>

    <div className="w-[80%] flex my-5  justify-center mx-auto">
      <input
        type="search"
        name=""
        id=""
        placeholder="Search..."
        className="w-[60%] rounded-lg outline-none  border border-violet-600 p-2"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>

    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <ul className="my-8">
        {filteredDetails.length === 0 ? (
          <li className="text-center text-gray-500">No matching details found.</li>
        ) : (
          filteredDetails.map((detail, index) => (
            <li key={index} className="my-[4rem] bg-violet-200 rounded-lg grid grid-cols-1 md:grid-cols-5 w-[80%] mx-auto p-4">
              <p>Name: {detail.name || <Skeleton />}</p>
              <p>Email: {detail.email || <Skeleton />}</p>
              <p>Organisation: {detail.organisation || <Skeleton />}</p>
              <p>Phone Number: {detail.phoneNo || <Skeleton />}</p>
              <p>Message: {detail.message || <Skeleton />}</p>
            </li>
          ))
        )}
      </ul>
    </SkeletonTheme>
  </div>
);
}
