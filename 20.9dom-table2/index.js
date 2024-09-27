let gProducts=[];
const elForm=document.getElementById("productForm");
elForm.addEventListener("submit",function(ev){
    ev.preventDefault();
    const productNameValue = elForm.querySelector("#productName").value;
    const productPriceValue = elForm.querySelector("#productPrice").value;
    const productAmountValue = elForm.querySelector("#productAmount").value;

    
    createProduct(productNameValue,productPriceValue,productAmountValue);
    elForm.querySelector("#productName").value=``;
    elForm.querySelector("#productPrice").value=``;
    elForm.querySelector("#productAmount").value=``;
});


function renderProductList(){
    const elProductList=document.getElementById("productList")
    for (let i = 0; i < gProducts.length; i++) {
        const product1= gProducts[i];
        const elProduct= document.createElement("li")
        elProduct.setAttribute("id",product1.productName)    
        
        elProduct.innerHTML = `
        <div>${product1.productName}</div>
        <div>${product1.productPrice}</div>
        <div>${product1.productAmount}</div>

        <button onclick="deleteProduct('${product1.productName}')">Delete</button>`;
        elProductList.appendChild(elProduct);
    }
}




function createProduct(name, price,amount) {
    const newProd = {
    productName :name,
    productPrice : price,
    productAmount: amount,
    }
    gProducts.push(newProd);
    saveProductListToLocalStorage();                 //////////////////////local storage

    const elProductList = document.getElementById("productList");
    elProductList.innerHTML = "";
    renderProductList();  //////////////////////////////////////////
}

  // DELETE
function deleteTask(productName) {
    const newProducts = [];

    for (let i = 0; i < gProducts.length; i++) {
        const product = gProducts[i];
        if (product.productName !== productName) {
        newProducts.push(product);
        }
    }

    gProducts = newProducts;
    saveProductListToLocalStorage();                    //////////////////////local storage

    const elProductList = document.getElementById("productList");
  
    const elProductToDelete = elProductList.querySelector("#" + productName);
    elProductList.removeChild(elProductToDelete);
}
  
  
//   taskList.addEventListener("click", function (ev) {
//     selectItem(ev.target);
//   });
  
//   function selectItem(selectedItem) {   
//       selectedItem.classList.toggle("done");
//     }







function saveProductListToLocalStorage() {           //////////////////////שמירה בלוקל סטוראג
  localStorage.setItem('productList', JSON.stringify(gProducts));
}



function loadProductsFromLocalStorage() {     //////////////////////////////טעינת הרשימה הקיימת בלוקל סטוראג סמידה וריקה רשימה ריקה
  const productListFromStorage = localStorage.getItem('productList');
  if (productListFromStorage) {
      gProducts = JSON.parse(productListFromStorage);
  } else {
      gProducts = [];
  }
}

///////////////////////////////////////////////////////////////התחלה:
loadProductsFromLocalStorage();   //////////////////טעינת הרשימה מהסטוראג
renderProductList();             ////////////////////// טעינה והצגת הרשימה