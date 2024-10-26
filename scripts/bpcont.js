function checkmsg(){
    let msgnum = localStorage.getItem("msgnum")
    if (msgnum > 0){
        let msgcount = document.createElement('p')
        msgcount.innerHTML = `Total Messages: ${msgnum}`
        msgcount.setAttribute("id", "msgcount")
        document.getElementById("countdiv").appendChild(msgcount)
    }
}


if (localStorage.getItem("msgnum") == null){
    localStorage.setItem("msgnum", 0)
}

function messages(){
    let incnum = parseInt(localStorage.getItem("msgnum")) 
    localStorage.setItem("msgnum", incnum += 1)
    console.log(incnum)
}
checkmsg();

document.getElementById("submit").addEventListener("click", messages)