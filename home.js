$(document).ready(function () {
  loadPersonalDetail();

  $("#addInfoBtn").click(function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const address = $("#address").val();
    if (name && email && phone && address) {
      const taskId = $(this).data("id"); //data()=>store data of selected element
      if (taskId) {
        // If taskId exists, update the task
        updateTask(taskId, name, email, phone, address);
        $(this).html("Add Info").removeData("id");
      } else {
        addTask(name, email, phone, address);
      }
      $("#name").val("");
      $("#email").val("");
      $("#phone").val("");
      $("#address").val("");
    } else {
      alert("Please fill all the fields");
    }
  });

  function addTask(name, email, phone, address) {
    let infos = getTasksFromLocalStorage();
    const info = {
      id: Date.now(),
      Name: name,
      Email: email,
      Phone: phone,
      Address: address,
    };
    infos.push(info);
    localStorage.setItem("Information", JSON.stringify(infos));
    loadPersonalDetail();
  }

  function updateTask(infoId, name, email, phone, address) {
    let infos = getTasksFromLocalStorage();

    if (!Array.isArray(infos)) {
      console.error("Expected tasks to be an array, but got:", infos);
      return;
    }
    infos = infos.map((info) => {
      if (info.id === infoId) {
        return {
          ...info,
          id: infoId,
          Name: name,
          Email: email,
          Phone: phone,
          Address: address,
        };
      }
      return info;
    });
    localStorage.setItem("Information", JSON.stringify(infos));
    loadPersonalDetail();
  }
  function loadPersonalDetail() {
    const infos = getTasksFromLocalStorage();
    $("#InformationList").html("");

    infos.forEach((info) => {
      $("#InformationList").append(`
            <div class="InfoItem" data-id="${info.id}">
              <div><strong>Name:</strong> ${info.Name}</div>
              <div><strong>Email:</strong> ${info.Email}</div>
              <div><strong>Phone:</strong> ${info.Phone}</div>
              <div><strong>Address:</strong> ${info.Address}</div>
              <div>
                <button class="edit btn btn-secondary">Edit</button>
                <button class="delete btn btn-danger">Delete</button>
              </div>
          </div>
        `);
    });
  }

  $(document).on("click", ".edit", function () {
    const InfoId = $(this).parents(".InfoItem").data("id");
    editTask(InfoId);
  });

  $(document).on("click", ".delete", function () {
    const InfoId = $(this).closest(".InfoItem").data("id");
    deleteTask(InfoId);
  });

  function getTasksFromLocalStorage() {
    const info = localStorage.getItem("Information");
    return info ? JSON.parse(info) : [];
  }

  function editTask(InfoId) {
    const infos = getTasksFromLocalStorage();
    const info = infos.find((t) => t.id === InfoId);
    if (info) {
      $("#name").val(info.Name);
      $("#email").val(info.Email);
      $("#phone").val(info.Phone);
      $("#address").val(info.Address);
      $("#addInfoBtn").html("Update Info").data("id", InfoId);
    }
  }

  function deleteTask(InfoId) {
    let infos = getTasksFromLocalStorage();
    infos = infos.filter((t) => t.id !== InfoId);
    localStorage.setItem("Information", JSON.stringify(infos));
    loadPersonalDetail();
  }
});
