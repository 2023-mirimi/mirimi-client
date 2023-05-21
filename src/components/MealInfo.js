// import React, { useEffect, useState } from "react";
// import { Text, View, FlatList } from "react-native";

// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth(); // 0 ~ 11
// month++;

// const KEY = "42a1d43c85f848fdaed1ad5a7b5325ab";
// const ATPT_OFCDC_SC_CODE = "B10"; // 서울특별시교육청
// const SD_SCHUL_CODE = "7010569"; // 미림여자정보과학고
// let MLSV_YMD = `${year}${month}${date}`;

// let url = `https://open.neis.go.kr/hub/mealServiceDietInfo`;

// url += `?KEY=${KEY}`;
// url += `&Type=json`;
// url += `&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`;
// url += `&SD_SCHUL_CODE=${SD_SCHUL_CODE}`;
// url += `&MLSV_YMD=${MLSV_YMD}`;

// const renderItem = ({ item }) => {
//   return (
//     <View>
//       <View>
//         <Text>user id : {item.userId}</Text>
//       </View>
//       <View>
//         <Text>id : {item.id}</Text>
//       </View>
//       <View>
//         <Text>title: {item.title}</Text>
//       </View>
//       <View>
//         <Text>body : {item.bodys}</Text>
//       </View>
//     </View>
//   );
// };

// const MealInfo = () => {
//   const [data, setData] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const getData = () => {
//     setLoading(true);
//     fetch("http")
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => String(item.id)}
//     />
//   );
// };

// export default MealInfo;
