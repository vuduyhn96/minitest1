let view =document.getElementById("view");
function appendtoview(value) {
    view.value +=value;
}
function calulateresult() {
    try {
        let result = eval(view.value);
        view.value = result;
    } catch (error) {
        view.value = "error";
    }
}
function clearinput() {
    view.value = "";
}