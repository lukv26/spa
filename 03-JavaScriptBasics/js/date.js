const getDate = () =>{
    confirm(new Date().toDateString());
};

document.getElementById('button').onclick = getDate;