document.getElementById('passwordForm').addEventListener('submit', function (a) {
    a.preventDefault();

    let cpass = document.getElementById('currentpass').value
    let npass = document.getElementById('newpass').value
    let copass = document.getElementById('confirmpass').value
    // let passregx = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)$/"

    // validation
    if(cpass === '' || npass === '' || copass === '')
    {
        alert("Please fill all the field")
        return
    }
    if(cpass.length<6 || npass.length<6){
        alert("Character Should be More than 6")
        return
    }
    if(npass!==copass)
    {
        alert("New Password and Confirm Password do not match")
        return
    }
    if(cpass===npass)
    {
        alert("Current Password and New Password is same try other Password")
        return
    }
    // if(cpass!==passregx || npass!==passregx)
    // {
    //     alert("Password should contain atleast one character, one digit and one special character")
    //     return
    // }

    console.log("Current password : ", cpass)
    cpass=npass
    // password change logic 
    console.log("Current password : ", cpass)
    console.log("New password : ", npass)
    console.log("Confirm password : ", copass)

    // clear all form fields
    document.getElementById("currentpass").value = ''
    document.getElementById("newpass").value = ''
    document.getElementById("confirmpass").value = ''
});