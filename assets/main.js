// Distinguish between "unread" and "read" notifications
// - Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
const notificationsBtn = document.querySelector(".header-mark");
const redDot = document.querySelector(".dot");
const dotNew=document.getElementById("reddot");
const otherRed=document.getElementById("reddots");
const smallRed=document.getElementById("reddotL")
const sectionChatBox = document.querySelector(".section-chatbox");
const sectionChatBoxTwo=document.querySelector(".section-chatbox01");
const sectionChatBoxThree = document.querySelector(".section-chatbox02");
const notificationBar=document.querySelector(".header-Three")
//Adding eventListener
notificationsBtn.addEventListener("click",()=>{
    sectionChatBox.style.backgroundColor="white";
    sectionChatBoxTwo.style.backgroundColor="white";
    sectionChatBoxThree.style.backgroundColor="white";
    notificationBar.textContent=0;
    // redDot.style.backgroundColor="white"
    dotNew.style.backgroundColor="white";
    otherRed.style.backgroundColor="white";
    smallRed.style.backgroundColor="white";
});
// dotNew.addEventListener ("click",()=>{
//     console.log("This targets all the red dots")
// })