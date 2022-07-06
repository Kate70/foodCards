export const fetchUser = () => {
    const userInfo = localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null;
    return userInfo
}

// export const fetchCart = () => {
//     const cardInfo =
//       localStorage.getItem("cardItems") !== "undefined"
//         ? JSON.parse(localStorage.getItem("cardItems"))
//         : localStorage.clear();
  
//     return cardInfo ;
//   };