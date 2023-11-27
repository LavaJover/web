var btnAdd = document.getElementsByClassName("add_btn")[0];
var submit = document.getElementsByClassName("submit")[0];
var duty = document.getElementsByName("duty")[0];
var show = document.getElementsByClassName("show")[0];
var showList = show.getElementsByTagName("ol")[0];
var id = 0;


function actionAdd(){
	let newDuty = document.createElement("li");
	newDuty.name = id;
	newDuty.innerHTML = duty.value;
	showList.append(newDuty);

	let btnEdit = document.createElement("input");
	btnEdit.className = "edit_btn";
	btnEdit.type = "button";
	btnEdit.value = "edit";
	btnEdit.name = id;
	showList.append(btnEdit);
	btnEdit.addEventListener("click", actionEdit, false);

	let btnDel = document.createElement("input");
        btnDel.className = "del_btn";
        btnDel.type = "button";
        btnDel.value = "delete";
	btnDel.name = id;
        showList.append(btnDel);
	btnDel.addEventListener("click", actionDelete, false);

	duty.value = "";
	id++;

}

function findDuty(name){
	var editDuties = document.getElementsByTagName("li");
        var editDuty;
        for(var i = 0; i<editDuties.length; i++){
                if(editDuties[i].name == name){
                        editDuty = editDuties[i];
                        break;
                }
        }

	return editDuty;

}

function actionEdit(evt){
	var editDuty = findDuty(evt.currentTarget.name);
	editDuty.innerHTML = prompt("Edit ur duty", editDuty.innerHTML);
}



function actionDelete(evt){
	var btnEdits = document.getElementsByClassName("edit_btn");
	var btnEdit;
	for(var i=0; i<btnEdits.length; i++){
		if(btnEdits[i].name == evt.currentTarget.name){
			btnEdit = btnEdits[i];
			break;
		}
	}
	console.log(btnEdit);
	btnEdit.remove();
	findDuty(evt.currentTarget.name).remove();
	evt.currentTarget.remove();

}

btnAdd.addEventListener("click", actionAdd, false);
