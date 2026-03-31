let students = JSON.parse(localStorage.getItem("students")) || [
  {
    id: 1,
    name: "Nguyễn Việt Hưng",
    age: 18,
    gender: "Nam",
    gpa: 4,
    status: "Active", //Inactive
  },
  {
    id: 2,
    name: "Vũ Hàn Thiên Đức",
    age: 19,
    gender: "Nữ",
    gpa: 3,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Tạ Phúc Minh Hiếu",
    age: 18,
    gender: "Nam",
    gpa: 1,
    status: "Inactive",
  },
];
let listHtml = document.getElementById(`list`);
// console.log(listHtml);
let editId;
function render(s) {
  // Cách 1
  let html = "";

  s.forEach((student) => {
    html += `<li>
                ${student.id} ${student.name} ${student.age} ${student.gender} ${student.gpa} ${student.status} <button onclick={updateStudent(${student.id})}>Sửa</button><button onclick={deleteStudent(${student.id})}>Xoá</button>
            </li>`;
  });
  listHtml.innerHTML = html;

  //   Cách 2
  //   s.forEach((student) => {
  //     let li = document.createElement("li");
  //     li.innerHTML = `<li>
  //                 ${student.id} ${student.name} ${student.age} ${student.gender} ${student.gpa} ${student.status}
  //             </li>`;
  //     listHtml.appendChild(li);
  //   });
}
render(students);

let addstudent = () => {
  if (flag === 0) {
    let inputName = document.getElementById(`namestudent`).value;
    let inputAge = document.getElementById(`studentage`).value;
    let inputGender = document.getElementById(`genderselect`).value;
    let inputGPA = document.getElementById(`studentGPA`).value;
    let inputStatus = document.getElementById(`statusselect`).value;
    let newStudent = {
      id: Date.now(),
      name: inputName,
      age: inputAge,
      gender: inputGender,
      gpa: inputGPA,
      status: inputStatus,
    };
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));
    render(students);
  } else {
    let inputName = document.getElementById(`namestudent`).value;
    let inputAge = document.getElementById(`studentage`).value;
    let inputGender = document.getElementById(`genderselect`).value;
    let inputGPA = document.getElementById(`studentGPA`).value;
    let inputStatus = document.getElementById(`statusselect`).value;
    let studentIndex = students.findIndex((s) => s.id === flag);
    if (confirm(`Bạn có muốn sửa không ?`)) {
      students[studentIndex] = {
        id: flag,
        name: inputName,
        age: inputAge,
        gender: inputGender,
        gpa: inputGPA,
        status: inputStatus,
      };
      flag = 0;
      let btnAdd = document.getElementById(`btnAdd`);
      btnAdd.innerText = "Thêm";
      console.log(students);
        let title = document.getElementById("title");
  title.innerText = "Quản lý học sinh";
      localStorage.setItem("students", JSON.stringify(students));
      render(students);
    }
  }
};

function deleteStudent(id) {
  let student = students.findIndex((s) => s.id === id);
  if (confirm(`Bạn có muốn xoá không`)) {
    students.splice(student, 1);
    localStorage.setItem("students", JSON.stringify(students));
    render(students);
  }
}
let flag = 0;
function updateStudent(id) {
  flag = id;
  let inputName = document.getElementById(`namestudent`);
  let inputAge = document.getElementById(`studentage`);
  let inputGender = document.getElementById(`genderselect`);
  let inputGPA = document.getElementById(`studentGPA`);
  let inputStatus = document.getElementById(`statusselect`);
  let btnAdd = document.getElementById(`btnAdd`);
  btnAdd.innerText = "Cập nhật";
  let title = document.getElementById("title");
  title.innerText = "Cập nhật học sinh";

  let studentIndex = students.findIndex((s) => s.id === id);

  inputName.value = students[studentIndex].name;
  inputAge.value = students[studentIndex].age;
  inputGender.value = students[studentIndex].gender;
  inputGPA.value = students[studentIndex].gpa;
  inputStatus.value = students[studentIndex].status;
  console.log(flag);
}
