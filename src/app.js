// export function calcThirdAngle(angle1, angle2) {
//     if (angle1 <= 0 || angle2 <= 0 || angle1 + angle2 >= 180) {
//       throw new Error(
//         "Los ángulos deben ser positivos y la suma debe ser menor que 180 grados."
//       );
//     }
//     return 180 - (angle1 + angle2);
//   }
  
//   console.log(calcThirdAngle(30, 60)); 
//   console.log(calcThirdAngle(60, 60)); 
//   console.log(calcThirdAngle(43, 78));
//   console.log(calcThirdAngle(10, 20)); 
export function calcThirdAngle(firstAngle, secondAngle) {
  return 180 - (firstAngle + secondAngle);
}