const userData = {
   '123' : 'ISHA MISTRY', // user 1
   '567' : 'AMI MISTRY', // user 2
  }
  
  const accountBalance = {
    'ISHA MISTRY': 1000,
    'AMI MISTRY': 2000,
  }
  
  
  let currentUser = localStorage.getItem("currentUser")
  
  if (currentUser) {
    document.getElementById('user').innerHTML = `WELCOME ${currentUser}`
    document.getElementById("balance").innerText = `Current Balance: $${accountBalance[currentUser]}`
  } else {
    document.getElementById("balance").innerText = "Please log in first."
  }

  function checkUser(event) {
    
    event.preventDefault();
    
    // const username = document.getElementById("username").value
    const pin = document.getElementById("pin").value
  
    if (userData.hasOwnProperty(pin)) {
      currentUser = userData[pin];

      localStorage.setItem("currentUser", currentUser)
      document.getElementById("atmForm").reset()
      document.getElementById("output").innerText = ""

      window.location.href = "main.html";
    } else {
      document.getElementById("output").innerText = "Invalid username or pin"
    }
  }

  // function for deposit the amount
  function deposit() {
    const depositAmount = parseFloat(prompt("Enter deposit amount : "))
    if (!isNaN(depositAmount) && depositAmount > 0) {
      accountBalance[currentUser] += depositAmount
      document.getElementById("deposit").innerText = `Deposits : $${depositAmount}`
      document.getElementById("balance").innerText = `Current Balance : $${accountBalance[currentUser]}`
  
    } else {
      document.getElementById("deposit").innerText = "Invalid amount"
    }
  }

  // function for withdraw the amount
  function withdraw() {
    const withdrawAmount = parseFloat(prompt("Enter deposit amount : "))
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      accountBalance[currentUser] -= withdrawAmount
      document.getElementById("withdraw").innerText = `Withdrawals: $${withdrawAmount}`
      document.getElementById("balance").innerText = `Current Balance : $${accountBalance[currentUser]}`
  
    } else {
      document.getElementById("withdraw").innerText = "Invalid amount"
    }
  }

  // Function to handle logout
  function logout() {
    window.location.href = "index.html"
  }
