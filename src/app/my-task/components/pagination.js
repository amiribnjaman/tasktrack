// const pagination = () => {
//   // PAGINATION
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 3;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;

//   const tasksData = tasks.slice(firstIndex, lastIndex);
//   const npage = Math.ceil(tasks.length / recordsPerPage);
//   const numbers = [...Array(npage + 1).keys()].slice(1);
//   console.log(tasksData, numbers);

//   return { tasksData, numbers };
// };

// // handle next page
// const nextPage = () => {
//   if (currentPage !== lastIndex) {
//     setCurrentPage(currentPage + 1);
//   }
// };

// // handle previous page
// const prevPage = () => {
//   if (currentPage !== firstIndex) {
//     setCurrentPage(currentPage - 1);
//   }
// };

// // Change current page
// const changeCurPage = (index) => {
//   setCurrentPage(index);
// };

// export { pagination, nextPage, prevPage, changeCurPage };