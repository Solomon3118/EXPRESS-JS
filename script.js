var selectedRow = null

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData)

    resetform();

 }

 function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementsById("fullName").value;
    formData["empCode"] = document.getElementsById("empCode").value;
    formData["salary"] = document.getElementsById("salary").value;
    formData["city"] = document.getElementsById("city").value;
    return formData;
 }
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell14= newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = '<a onClick="onEdit(this)">Edit</a>
                       <a>Delete</a>


    function resetform() {
        document.getElementsById("fullName").value ="";
        document.getElementsById("empCode").value ="";
        document.getElementsById("salary").value ="";
        document.getElementsById("city").value ="";
        selectedRow = null;

    }    
    
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementsById("fullName").value = selectedRow.cells[0].innerHTML;
        document.getElementsById("empCode").value = selectedRow.cells[1].innerHTML;
        document.getElementsById("salary").value = selectedRow.cells[2].innerHTML;
        document.getElementsById("city").value = selectedRow.cells[3].innerHTML; 



    }
    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.fullName;
        selectedRow.cells[1].innerHTML = formData.empCode;
        selectedRow.cells[2].innerHTML = formData.salary;
        selectedRow.cells[3].innerHTML = formData.city;
    }
    function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetform();
    }



}