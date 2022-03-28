import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
// 實作寫在這裡！

/*
console.log( document.querySelector(".container > .items") );

document.querySelector(".container > .items").addEventListener("click",(e)=>{
    console.log(e.target,e.target.parentNode.children[0].textcontent ,e.target.parentNode.children[1]);
    
})
*/
document.querySelector("tbody").addEventListener("click",(e)=>{
   if(e.target.nodeName == "I") e.target.parentNode.parentNode.parentNode.remove();
   else e.target.parentNode.parentNode.remove();
   console.log(e.target.nodeName);
})

/*
 <section class="cart">
<table class="table">
<tbody>
<tr>
  <td>老大</td>
  <td><input type="number" value="1" /></td>
  <td>$20</td>
  <td>$20</td>
  <td>
    <button class="btn btn-danger btn-sm">
      <i class="fas fa-trash-alt"></i>
    </button>
  </td>
</tr>
*/