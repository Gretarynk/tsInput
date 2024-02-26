
type UserData={
    nickName:string;
    email:string;
}

const nickName : HTMLInputElement= document.getElementById('nickName')as HTMLInputElement;
const email : HTMLInputElement= document.getElementById('email')as HTMLInputElement;
const pushButton : HTMLButtonElement= document.getElementById('push')as HTMLButtonElement;
const message:HTMLElement=document.getElementById('message')!;
const userDataArray:UserData[]=[];

pushButton.addEventListener('click',()=>{
    const userData={
        nickName:nickName.value,
        email:email.value,
    }
    const emailRegex: RegExp = /^\w+@\w+\.\w{2,}$/;

    if (!emailRegex.test(userData.email)) {
        console.log("User email has bad structure");
        return;
      };
      if(userData.nickName.length<=4){
        console.log('to short');
        message.innerText='to short Nick Name';
        return;
      }
      else{
        userDataArray.push(userData);
        console.log(userDataArray);
        message.innerText=`All good user ${userData.nickName}`;
        
      }

})

