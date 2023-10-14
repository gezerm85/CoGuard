
let dateboxDOM = document.querySelector("#datebox"); 


if (!dateboxDOM.value) {
  let dateDOM = new Date();
  let gun = String(dateDOM.getDate()).padStart(2, "0"); 
  let ay = String(dateDOM.getMonth() + 1).padStart(2, "0"); 
  let yil = dateDOM.getFullYear(); 
  
  dateboxDOM.value = yil + "-" + ay + "-" + gun;
}





//







