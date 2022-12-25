
function onclickSubmit() {
 
    var sr = document.getElementById("sr").value;
    let email = document.getElementById("inputEmail3").value;
    let age = document.getElementById("age").value;
    let gen = document.querySelector('input[name="gender"]:checked').value;
    var Actions = `<button id='edit' onclick="onClickEdit(${sr})">${"Edit"}</button><button id='delete' onclick="onClickDelete(${sr})">${"Delete"}</button>`;
    
  if(sr!=='')
  {
    updateEmployee(sr,email,age,gen);
  }
  else
  {
    var sr = Employee.length + 1;
    var Actions = `<button id='edit' onclick="onClickEdit(${sr})">${"Edit"}</button><button id='delete' onclick="onClickDelete(${sr})">${"Delete"}</button>`;
    Employee.push([sr, email, age, gen, Actions]);

  $("#example")
    .on("draw.dt", function () {})
    .DataTable({
      data: Employee,
      'destroy': true,
      'autoWidth': false,
      'info': false,
      'JQueryUI': true,
      'ordering': true,
      'paging': false,
      'scrollY': "500px",
      'scrollCollapse': true,
    });
  textClear();
  }
}

function onClickDelete(e) {
  // for(let i=0;i<Employee.length;i++)
  // {
  //   if(e==Employee[i][0])
  //     {
  //       Employee.splice(i,1);
  //     }
  // }
  // let j=0;
  // for(let i=0;i<Employee.length;i++)
  // {
  //   Employee[i][0]=j+1;
  //   j++;
  // }
  var dup = [];
  let j=0;
  for (let i = 0; i <Employee.length; i++) {
    if (Employee[i][0] !== e) {
      dup.push([
        Employee[i][0]=j+1,
        Employee[i][1],
        Employee[i][2],
        Employee[i][3],
        Employee[i][4] = `<button id='edit' onclick="onClickEdit(${j+1})">${"Edit"}</button><button id='delete' onclick="onClickDelete(${j+1})">${"Delete"}</button>`
      ]);
      j++;
    }
  }
  Employee = dup;
 $('#example').on('draw.dt', function(){
    }).DataTable({
      data:Employee,
      'destroy': true,
      'paging': true,
      'lengthChange': true,
      'searching': true,
      'ordering': true,
      'info': true,
      'autoWidth': true 
    })
}

function onClickEdit(p){
  let sr=Employee[p-1][0];
  let email=Employee[p-1][1];
  let age=Employee[p-1][2];
  
  document.getElementById("sr").value = sr;
  document.getElementById("inputEmail3").value = email;
  document.getElementById("age").value = age;

}

function updateEmployee(sr,email,age,gender){
  console.log("line no 109 " + sr);
      let index=sr-1;
      
 
   Employee[index].splice(1,3,email,age,gender);
 
   $('#example').on('draw.dt', function(){
    }).DataTable({
        data:Employee,
      'destroy': true,
      'paging': true,
      'lengthChange': true,
      'searching': true,
      'ordering': true,
      'info': true,
      'autoWidth': true 
    })
  }



function textClear() {
  sr =document.getElementById('sr').value="";
  email = document.getElementById("inputEmail3").value = "";
  age = document.getElementById("age").value = "";
}
