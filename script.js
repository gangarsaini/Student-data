const Stuname = document.querySelector('#name');
const StundentId = document.querySelector('#student-id');
const StundentClass = document.querySelector('#StudentEmail');
const StudentRoll = document.querySelector('#studentNumber');
const btn = document.querySelector('#button-id');
const studentinfo = document.querySelector('.complete-wrapper');
const tabledata = document.querySelector("#show-data");
const showdataTable = document.querySelector('.show-data-in');
const getForm = document.querySelector('#student-form');

// localsotrage function
function getStudent(){
const readData = JSON.parse(localStorage.getItem('StudentData')) || [];
    return readData;
}

function saveStudent(data){
    localStorage.setItem("StudentData", JSON.stringify(data));
}

const hasdata = getStudent();


// show table, if having data
function toggleTable(hasdata){
         if(hasdata.length > 0){
    studentinfo.classList.remove('table-has-data');
    }
    else{
        studentinfo.classList.add('table-has-data');
    }
}


// Showscroll bar when maxheight greater than 310px
function autoScrollbar(){
      showdataTable.style.maxHeight = "310px";
      if(showdataTable.scrollHeight>showdataTable.clientHeight){
        showdataTable.style.overflowY  = "auto";
       
        }
    else{
        showdataTable.style.overflowY  = "hidden"
    }
}


// handle error function
function ShowError(input, message){
 const inputData = input.parentElement.querySelector('.errordesign');
 inputData.innerHTML = message;
 return inputData;
}
// clear error function
function clearError(input){
 const inputData = input.parentElement.querySelector('.errordesign');
 inputData.innerHTML = "";
 return inputData;
}

let editIndex = null;


// Creation of the table
function tableCreation(student,index){
    const createTr = document.createElement('tr');
    const createTd1 = document.createElement('td');
    createTd1.innerHTML = student.name;
    const createTd2 = document.createElement('td');
    createTd2.innerHTML = student.id;
     const createTd3 = document.createElement('td');
    createTd3.innerHTML = student.studentmail;
     const createTd4 = document.createElement('td');
    createTd4.innerHTML = student.phoneNumber;
    const createTd5 = document.createElement('td');
    const button = document.createElement('button')
    button.classList.add('designbtn','col');
    button.innerHTML = "Delete";
    createTd5.appendChild(button);
    createTd5.addEventListener('click', function(){
        const students = getStudent();
        students.splice(index,1);
        saveStudent(students);
        renderTable();
        toggleTable(students);
       
    });
    const creategap = document.createElement('td');
    creategap.innerHTML = ''
    const createTd6 = document.createElement('td');
    const editbtn = document.createElement('button');
    editbtn.innerHTML = "Edit";
    editbtn.classList.add('designbtn')
    createTd6.appendChild(editbtn);
    createTd6.addEventListener('click', function(){
        editIndex = index;
        Stuname.value = student.name;
        StundentId.value = student.id;
        StundentClass.value = student.studentmail;
        StudentRoll.value = student.phoneNumber;
        btn.innerHTML = 'Update data';
        

    })
    createTr.append(createTd1,createTd2,createTd3,createTd4,createTd5,creategap,createTd6)
    tabledata.appendChild(createTr);
    
}

// render table 
function renderTable(){
  tabledata.innerHTML = "";
  const students = getStudent();
  students.forEach((student,index) => {
    tableCreation(student,index);
    autoScrollbar();
  });
}



// validation of the all the fields 
function ShowStudentData(){
clearError(Stuname);
clearError(StundentId);
clearError(StundentClass);
clearError(StudentRoll);

let hasError = false;
if(Stuname.value === ""){
    ShowError(Stuname, "Name is required");
    hasError = true;
}
if(StundentId.value === ""){
    ShowError(StundentId, "Student Id is required");
    hasError = true;
}
if(StundentClass.value === ""){
    ShowError(StundentClass, "Email is required");
    hasError = true;
}
if(StudentRoll.value === ""){
    ShowError(StudentRoll, "Phone Number is required");
    hasError = true;
}

if (hasError) return;
if(!/^[A-Za-z ]+$/.test(Stuname.value)){
        ShowError(Stuname, "Please Enter the letters only");
        return;
    }
    if(!/^[0-9]+$/.test(StundentId.value)){
        ShowError(StundentId, "Please Enter the Numbers only");
        return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(StundentClass.value)){
        ShowError(StundentClass, "Please Enter correct email");
        return;
    }
    if(!/^\d{10}$/.test(StudentRoll.value)){
        ShowError(StudentRoll, "Phone number must be exactly 10 digits");
        return;
    }

    let Studentdetail = {
    name:Stuname.value.trim(),
    id:StundentId.value.trim(),
    studentmail:StundentClass.value.trim(),
    phoneNumber:StudentRoll.value.trim()
    }
    let students = getStudent();
  if(editIndex !== null){
   students[editIndex] = Studentdetail;
   btn.innerHTML = "Add Data"
    editIndex = null
    toggleTable(students);
  }
   else{
     students.push(Studentdetail);
     toggleTable(students)
   }
   saveStudent(students);
   renderTable()
   
  Stuname.value = "";
  StundentId.value = "";
  StundentClass.value = "";
  StudentRoll.value = "";

}
renderTable()
toggleTable(hasdata);


getForm.addEventListener('submit', function(e){
e.preventDefault();
ShowStudentData();
})

