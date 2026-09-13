// import type { Technology as TechnologyType } from "../../types/technology";

// interface TechnologyCardProps {
//   technology: TechnologyType;
//   isAdded: boolean;
//   onAddToStack: (technology: TechnologyType) => void;
// }

// const TechnologyCard = ({
//   technology,
//   isAdded,
//   onAddToStack,
// }: TechnologyCardProps) => {
//   return (
//     <div
//       className="
//         group
//         flex w-full flex-col
//         rounded-xl
//         border border-gray-200
//         bg-white
//         p-4

//         transition-all
//         duration-300
//         ease-in-out

//         hover:-translate-y-2
//         hover:border-pink-300
//         hover:shadow-lg
//         hover:shadow-pink-100/50
//       "
//     >
//       {/* Icon + Badge */}
//       <div className="flex items-start justify-between gap-3">
//         <div
//           className="
//             flex h-10 w-10 shrink-0 items-center justify-center
//             rounded-lg
//             bg-gray-50
//             transition-all duration-300
//             group-hover:bg-pink-50
//           "
//         >
//           <img
//             src={technology.icon}
//             alt={technology.name}
//             className="
//               h-7 w-7 object-contain
//               transition-transform duration-300
//               group-hover:scale-110
//             "
//           />
//         </div>

//         {/* Badge */}
//         <span
//           className="
//             rounded-full
//             bg-blue-50
//             px-2.5 py-1
//             text-[10px] font-medium text-blue-500
//             transition-colors duration-300
//             group-hover:bg-pink-50
//             group-hover:text-pink-500
//           "
//         >
//           {technology.badge}
//         </span>
//       </div>

//       {/* Name */}
//       <h3
//         className="
//           mt-4
//           text-base font-semibold text-gray-900
//           transition-colors duration-300
//           group-hover:text-pink-600
//           sm:text-lg
//         "
//       >
//         {technology.name}
//       </h3>

//       {/* Description */}
//       <p className="mt-2 min-h-[60px] text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
//         {technology.description}
//       </p>

//       {/* Category + Difficulty + Rating */}
//       <div className="mt-4 flex flex-wrap items-center gap-2">
//         <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
//           {technology.category}
//         </span>

//         <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
//           {technology.difficulty}
//         </span>

//         <span className="ml-auto whitespace-nowrap text-xs text-gray-600">
//           ⭐ {technology.rating}
//         </span>
//       </div>

//       {/* Add Button */}
//       <button
//         type="button"
//         disabled={isAdded}
//         onClick={() => onAddToStack(technology)}
//         className={`
//           mt-5 w-full rounded-md
//           px-4 py-2.5
//           text-xs font-medium
//           transition-all duration-300

//           ${
//             isAdded
//               ? "cursor-not-allowed bg-gray-300 text-gray-600"
//               : "bg-gray-950 text-white hover:bg-pink-600 hover:shadow-md"
//           }
//         `}
//       >
//         {isAdded ? "✓ Added to Stack" : "Add to Stack"}
//       </button>
//     </div>
//   );
// };

// export default TechnologyCard;