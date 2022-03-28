import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

const addListener = (upComponent,downComponent,listener,fn) => {
	listener.addEventListener("click",(e)=>{
		let target;
		let nodeName = e.target.nodeName;
		if( nodeName == downComponent) target = e.target.parentNode;
		if( nodeName == upComponent) target = e.target;
		if( nodeName == upComponent || nodeName == downComponent){
			fn(target);
		}
	})
}

addListener("BUTTON","I",document.querySelector(".container > .items"),(target) => {
	let name = target.parentNode.children[0].textContent;
	let price = target.parentNode.children[1].textContent;
	let cartList = document.querySelectorAll("tbody tr td:first-child");
	let existInCartIndex = Array.from(cartList).findIndex(node => node.textContent == name);

	if(existInCartIndex > -1){
		let num = cartList[existInCartIndex].parentNode.children[1].children[0];
		var itemPrice = cartList[existInCartIndex].parentNode.children[3];
		num.value++;
		itemPrice.textContent = "$" +(Number(itemPrice.textContent.slice(1)) 
									+ Number(price.slice(1))).toString();
	}else{
		let insert = `
					<tr>
					<td>${name}</td>
					<td><input type="number" value="1" /></td>
					<td>${price}</td>
					<td>${price}</td>
					<td>
						<button class="btn btn-danger btn-sm">
						<i class="fas fa-trash-alt"></i>
						</button>
					</td>
					</tr>
					`
		document.querySelector("tbody").insertAdjacentHTML("beforeend",insert);
	}
	let allPrice =  document.querySelector("tfoot td:nth-child(3)");
	allPrice.textContent = "$" + (Number(allPrice.textContent.slice(1))
									+Number(price.slice(1))).toString();

})


/*

document.querySelector(".container > .items").addEventListener("click",(e)=>{
	let target;
	let nodeName = e.target.nodeName;
	if( nodeName == "I") target = e.target.parentNode;
	if( nodeName == "BUTTON") target = e.target;
	if( nodeName == "BUTTON" || nodeName == "I"){
		let name = target.parentNode.children[0].textContent;
		let price = target.parentNode.children[1].textContent;
		let cartList = document.querySelectorAll("tbody tr td:first-child");
		let existInCartIndex = Array.from(cartList).findIndex(node => node.textContent == name);

		if(existInCartIndex > -1){
			let num = cartList[existInCartIndex].parentNode.children[1].children[0];
			var itemPrice = cartList[existInCartIndex].parentNode.children[3];
			num.value++;
			itemPrice.textContent = "$" +(Number(itemPrice.textContent.slice(1)) 
										+ Number(price.slice(1))).toString();
		}else{
			let insert = `
						<tr>
						<td>${name}</td>
						<td><input type="number" value="1" /></td>
						<td>${price}</td>
						<td>${price}</td>
						<td>
							<button class="btn btn-danger btn-sm">
							<i class="fas fa-trash-alt"></i>
							</button>
						</td>
						</tr>
						`
			document.querySelector("tbody").insertAdjacentHTML("beforeend",insert);
		}
		let allPrice =  document.querySelector("tfoot td:nth-child(3)");
		allPrice.textContent = "$" + (Number(allPrice.textContent.slice(1))
									 +Number(price.slice(1))).toString();
	}
})
*/




// document.querySelector("tbody").addEventListener("click",(e)=>{
//    if(e.target.nodeName == "I") e.target.parentNode.parentNode.parentNode.remove();
//    else e.target.parentNode.parentNode.remove();
//    console.log(e.target.nodeName);
// })

/*
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