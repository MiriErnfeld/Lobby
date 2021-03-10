// import React, { useState } from 'react';
// import { Navbar, Container } from 'react-bootstrap';
// import Button from '@material-ui/core/Button';
// import Information from './InformationTemp'
// // import{filterByYear,filterByMonth,filterByDay,filterByWeek} from './InformationTemp'




// export default function MyCircle() {
//     const [value, setValue] = useState("Day")
//     let arr = ["Day", "Week", "Month", "Year"]
//     let circleStyle1 = {
//         padding: 6,
//         margin: 6,
//         display: "inline-block",
//         // position:'absolute',
//         backgroundColor: "rgb(247, 181, 0)",
//         borderRadius: "50%",
//         width: 1,
//         height: 1,
//         left: 0,
//         top: 0
//     };
//     let circleStyle2 = {
//         padding: 6,
//         margin: 6,
//         display: "inline-block",
//         // position:'absolute',
//         backgroundColor: "rgb(1, 220, 209)",
//         borderRadius: "50%",
//         width: 1,
//         height: 1,
//         left: 0,
//         top: 0
//     };
//     let circleStyle3 = {
//         padding: 6,
//         margin: 6,
//         display: "inline-block",
//         // position:'absolute',
//         backgroundColor: "rgb(103, 114, 222)",
//         borderRadius: "50%",
//         width: 1,
//         height: 1,
//         left: 0,
//         top: 0
//     };
//     let circleStyle4 = {
//         padding: 6,
//         margin: 6,
//         display: "inline-block",
//         // position:'absolute',
//         backgroundColor: "rgba(255, 69, 96, 0.85)",
//         borderRadius: "50%",
//         width: 1,
//         height: 1,
//         left: 0,
//         top: 1
//     };
//     function filterby(value, x) {
//         let index = 0
//          
//         for (let i = 0; i < arr.length; i++) {
//             if (value === arr[i]) {
//                 index = i
//                 break
//             }
//         }
//         if (x  !=null) {
//             if (index === 0)
//                 index = 4
//             let newIndex = arr[index - 1]
//             setValue(newIndex)
//         }
//         else {
//             if (index === 3)
//                 index = -1
//             let newIndex = arr[index + 1]
//             setValue(newIndex)
//         }
//         switch (value) {
//             case 'Day': filterByDay()
//                 break;
//             case 'Week':filterByWeek()
//                 break;
//             case 'Month':filterByMonth()
//                 break;
//             default:filterByYear()
//                 break;
//         }
//         //  <div class="container" style={{ paddingLeft: "62%" }}>

//         //                         <FcPrevious onClick={(e) => chooseTimePrevious(e)}></FcPrevious>

//         //                         {ReducerData.choose}

//         //                         <FcNext onClick={(e) => chooseTimeNext(e)}></FcNext>

//         //                     </div>

//     }

//     // let colors = [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgba(255, 69, 96, 0.85)']
//     // const [data, setData] = useState([])
//     // for (let i = 0; i < colors.length; i++) {
//     //     let color = colors[i];
//     //     setData(...data, )
//     //     renderData.push(<Circle key={i + color} bgColor={color} />);
//     // }
//     return (
//         <>
//             {/* onClick={() => setOrderData_(previous(orderData_))} */}
//             <Button onClick={() => (filterby(value, 1))}>a</Button> {value}
//             <Button onClick={() => (filterby(value, null))}>b</Button>
//             <div>
//                 <Container >
//                     <Navbar expand="sm" variant="light" bg="light">
//                         <p style={circleStyle1}>
//                         </p>
//                         <Navbar.Brand style={{ fontSize: "14px" }}>contacts</Navbar.Brand>
//                         <div style={circleStyle2}>
//                         </div>
//                         <Navbar.Brand style={{ fontSize: "14px" }}>papers</Navbar.Brand>
//                         <div style={circleStyle3}>
//                         </div>
//                         <Navbar.Brand style={{ fontSize: "14px" }}>projects</Navbar.Brand>
//                         <div style={circleStyle4}>
//                         </div>
//                         <Navbar.Brand style={{ fontSize: "14px" }}>tasks</Navbar.Brand>
//                     </Navbar>
//                 </Container>
//                 </div>
//         </>
//     );
// }


