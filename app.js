let tareas = [];

    const input = document.getElementById("inputTarea");
    const lista = document.getElementById("lista");
    const empty = document.getElementById("empty");
    const msg = document.getElementById("msg");

    const btnAdd = document.getElementById("btnAdd");
    const btnShow = document.getElementById("btnShow");
    const btnDelete = document.getElementById("btnDelete");
    const btnExit = document.getElementById("btnExit");

    
    function addTask(){

      const tarea = input.value.trim();

      if(tarea === ""){
        alert("Escribe una tarea");
        return;
      }

      tareas.push(tarea);

      input.value = "";

      render();
    }

    function showTasks(){

      render();

    }

   
    function deleteTask(){

      if(tareas.length === 0){
        alert("No hay tareas");
        return;
      }

      const pos = prompt(
        "¿Qué tarea quieres eliminar? (1, 2, 3...)"
      );

      if(pos === null) return;

      // Convertir a índice real
      const index = parseInt(pos) - 1;

      if(
        isNaN(index) ||
        index < 0 ||
        index >= tareas.length
      ){
        alert("Número inválido");
        return;
      }

      tareas.splice(index, 1);

      render();
    }

   
    function render(){

      lista.innerHTML = "";

      if(tareas.length === 0){

        empty.classList.remove("hidden");

      } else {

        empty.classList.add("hidden");

        tareas.forEach((tarea, index) => {

          lista.innerHTML += `
            <li class="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition">

              <span class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                ${index + 1}
              </span>

              <span class="text-slate-700">
                ${tarea}
              </span>

            </li>
          `;
        });

      }
    }

    function exitApp(){

      msg.textContent = "Gracias";

      btnAdd.disabled = true;
      btnShow.disabled = true;
      btnDelete.disabled = true;
      btnExit.disabled = true;

      input.disabled = true;

      const buttons = [
        btnAdd,
        btnShow,
        btnDelete,
        btnExit
      ];

      buttons.forEach(btn => {
        btn.classList.add(
          "opacity-50",
          "cursor-not-allowed"
        );
      });

      input.classList.add(
        "opacity-50",
        "cursor-not-allowed"
      );
    }

    
    input.addEventListener("keypress", function(e){

      if(e.key === "Enter"){
        addTask();
      }

    });