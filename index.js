"use strict";
const nickName = document.getElementById('nickName');
const email = document.getElementById('email');
const pushButton = document.getElementById('push');
const message = document.getElementById('message');
const userDataArray = [];
pushButton.addEventListener('click', () => {
    const userData = {
        nickName: nickName.value,
        email: email.value,
    };
    const emailRegex = /^\w+@\w+\.\w{2,}$/;
    if (!emailRegex.test(userData.email)) {
        console.log("User email has bad structure");
        return;
    }
    ;
    if (userData.nickName.length <= 4) {
        console.log('to short');
        message.innerText = 'to short Nick Name';
        return;
    }
    else {
        userDataArray.push(userData);
        console.log(userDataArray);
        message.innerText = `All good user ${userData.nickName}`;
    }
});
