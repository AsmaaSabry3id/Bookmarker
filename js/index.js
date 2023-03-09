var siteNameInput = document.getElementById('siteName');
var siteURLInput = document.getElementById('siteURL');
var siteList = [];


if (localStorage.getItem("siteList") == null) {
    siteList = [];
} else {
    siteList = JSON.parse(localStorage.getItem("siteList"));
    console.log(siteList);
    displaySubmit(siteList)
}

function Submit() {
    if(validatesiteName()==true){

    


    var Submit = {
        BookmarkName: siteNameInput.value,
        Website: siteURLInput.value
    }


    siteList.push(Submit);
    displaySubmit(siteList);
    localStorage.setItem("siteList", JSON.stringify(siteList));
    clearForm();
    }else{
        
    }
}


function clearForm() {
    siteNameInput.value = "";
    siteURLInput.value = "";

}


function displaySubmit(Submit) {
    var bookMark = ``;
    for (var i = 0; i < Submit.length; i++) {

        bookMark += ` <div class="row">
        <div class="col-md-6">
            <div class="container">
               <div class="row">
                <div class="col-md-6">
                    <h2>${Submit[i].BookmarkName}</h2>
        
                </div>
                <div class="col-md-6 ">
                    <a class="btn btn-primary" href="${Submit[i].Website}" target="_blank">visit</a>
                    <button onclick="deleteSite(${i})" class="btn btn-danger btndelete" >Delete</button>
                </div>
               </div>
            </div>
        </div>
    
       
    </div>
    `;
    }


    document.getElementById("tBody").innerHTML = bookMark;

}


function deleteSite(index) {
    
    siteList.splice(index, 1);
    console.log(siteList);
    localStorage.setItem("siteList", JSON.stringify(siteList));
    displaySubmit(siteList);
}



function validatesiteName(){
    var regex = /^[A-Z][a-z]{3,9}$/;
    if(regex.test(siteName.value)==true){
        siteName.style.border="none"
        document.getElementById("wrongName").classList.add("d-none");
        return true
    }else{
        siteName.style.border="2px solid red"
        document.getElementById("wrongName").classList.remove("d-none");
        return false
    }
    
}

function validatesiteURL(){
    var regex = /^[A-Z][a-z]{3,9}$/;
    if(regex.test(siteURL.value)==true){
        siteURL.style.border="none"
        document.getElementById("wrongName").classList.add("d-none");
        return true
    }else{
        siteURL.style.border="2px solid red"
        document.getElementById("wrongName").classList.remove("d-none");
        return false
    }
    // return regex.test(siteURL.value);
}




