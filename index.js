// let time= new Date();
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log("hi");
let interval = setInterval(()=>{
    const time  = new Date();
    const option = {
    timeZone : 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'}
    element.textContent=time.toLocaleTimeString('en-US',option);
},1000)

const element=document.querySelector('.clock');
const time  = new Date();
const option = {
    timeZone : 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}
element.textContent=time.toLocaleTimeString('en-US',option);


