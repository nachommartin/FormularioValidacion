const form = document.querySelector("#for");
const boton = document.querySelector("#boton");
const nome = document.querySelector("#name");
const apel = document.querySelector("#sname");
const radio = document.querySelectorAll("input [type=radio]");
const tfno = document.querySelector("#tel");
const correo = document.querySelector("#mail");
const terms = document.querySelector("#acepta");
const man=  document.querySelector("#man");
const woman=  document.querySelector("#wom");
const nobin=  document.querySelector("#gen");
const anex=  document.querySelector("#anexo");


const formIsVal ={
    nome: false,
    apel: false,
    sex: false,
    tfno: false,
    correo: false,
    terms: false
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    validar();
})

nome.addEventListener('change', (e) =>{
    if (e.target.value.trim().length>0){
        formIsVal.nome= true;
    }
})

apel.addEventListener('change', (e) =>{
    console.log('Hola');
    if (e.target.value.trim().length>0){
        formIsVal.apel=true;
    }
})

man.addEventListener('change', (e) =>{
    console.log(e.target.checked);
    if (e.target.checked==true){
        formIsVal.sex= true; }
})

woman.addEventListener('change', (e) =>{
    if (e.target.checked==true){
        formIsVal.sex= true; }
})

nobin.addEventListener('change', (e) =>{
    console.log(e.target.checked);
    pregunta()
    if (e.target.checked==true){
        formIsVal.sex= true; }
})


tfno.addEventListener('change', (e) =>{
    let correcto = /^[0-9]+$/;
    if (e.target.value.trim().length>0 && tfno.value.match(correcto)){
        formIsVal.tfno= true;
    }
})

correo.addEventListener('change', (e) =>{
    let validador = /^([a-zA-Z0-9_\.\-])+\@(iesjacaranda.es|juntadeandalucia.es)$/
    if (e.target.value.trim().length>0 && correo.value.match(validador)){
        formIsVal.correo= true;
    }
    else{
    alert('Dominio de correo incorrecto. Tiene que ser del instituto o de la Junta')
}
})



function pregunta() {
  if (nobin.checked) {
    anex.hidden= false;
  }
  else {
    anex.hidden= true;
  }
}

terms.addEventListener('change', (e) =>{
    formIsVal.terms= e.target.checked;
    (e.target.checked) ? boton.removeAttribute('disabled') : boton.setAttribute('disabled', true)
})

function validar(){
const valores = Object.values(formIsVal)
const validado = valores.findIndex(value => value==false)
if (validado==-1){
    form.submit()
}
else{
    alert('Formulario no rellenado correctamente')
}
}

