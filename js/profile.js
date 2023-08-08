var selectedRow = null
const form = document.getElementById('first')
const profile = document.getElementById('second')

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["contact"] = document.getElementById("contact").value;
    return formData;
}

function insertNewRecord(data) {
    form.style.display = 'none';
    profile.style.display = 'block';
    const fullName = document.getElementById("p-fullName");
    const age = document.getElementById("p-age");
    const dob = document.getElementById("p-dob");
    const contact  = document.getElementById("p-contact");

    fullName.innerHTML=data.fullName;
    age.innerHTML=data.age;
    dob.innerHTML=data.dob;
    contact.innerHTML=data.contact;
   
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.contact;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("profile").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


function preback(){window.history.forward();}
setTimeout("preback()", 0);
window.onunload=function() {null};




const sign = e => {
    let fullName = document.getElementById('fullName').value,
        age = document.getElementById('age').value,
        dob = document.getElementById('dob').value,
        contact = document.getElementById('contact').value;
       

  
    let formD = JSON.parse(localStorage.getItem('formD')) || [];
  
    let exist = formD.length && 
        JSON.parse(localStorage.getItem('formD')).some(data => 
            data.fullName.toLowerCase() == fullName.toLowerCase() &&
            data.age.toLowerCase() == age.toLowerCase()
        );
  
    if(!exist){
        formD.push({ fullName,age, dob, contact });
        localStorage.setItem('formD', JSON.stringify(formD));
        document.querySelector('form').reset();
        document.getElementById('fullName').focus();
     
  
    }
    else{
        
    }
    e.preventDefault();
  }