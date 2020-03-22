var popup=document.querySelector(".subscribe-form-wrap");
popup&&popup.classList.toggle("subscribe-form-show");
var button=document.querySelector(".subscribe-button");
checkin=popup.querySelector("[name=checkin]");
checkout=popup.querySelector("[name=checkout]");
adults=popup.querySelector("[name=adults]");
children=popup.querySelector("[name=children]");
form=popup.querySelector("subscribe-form");
button.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.toggle("subscribe-form-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit",function(evt){
    checkin.value&&checkout.value&&adults.value||(evt.preventDefault(),
    popup.classList.remove("modal-error"),
    form.offsetWidth=form.offsetWidth,
    popup.classList.add("modal-error"))
});
