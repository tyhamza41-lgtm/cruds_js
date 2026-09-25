let title= document.getElementById("title")
let price= document.getElementById("price")
let taxes= document.getElementById("taxes")
let ads= document.getElementById("ads")
let discount= document.getElementById("discount")
let total= document.getElementById("total")
let count=document.getElementById("count")
let category=document.getElementById("category")
let submit= document.getElementById("submit")
let mode= 'create'
let tmp;
// get total
function getTotal(){
    if(price.value !='' && price.value >=0){
        let result= (+price.value + +taxes.value + +ads.value) - +discount.value        
        total.innerHTML=result
        total.style.background='green'
    }else{
        total.innerHTML=""
        total.style.background='red'
    }
}

// create product
let dataPro=localStorage.products?JSON.parse(localStorage.products):[]
submit.onclick= function(){
    let objPro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value 
    }

//clean data
if(title.value!='' && price.value!='' && count.value < 100 && category.value!=''){
    // count
    if(mode=='create'){
      if(parseInt(count.value)>1){
        for (let i = 0; i < parseInt(count.value); i++) {
        dataPro.push(objPro)
      }
      }else{
        dataPro.push(objPro)
      }
    }else{
        dataPro[tmp]= objPro
        submit.innerHTML=`Create`
        count.style.display='block'
    }
    clearInput()
}

    
    // save localstorage
    localStorage.setItem('products', JSON.stringify(dataPro))
    
    showData()
}

// clear inputs
function clearInput(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML="";
    count.value='';
    category.value=''
}
// read
function showData(){
    getTotal()
    let tbody=document.getElementById('tbody')
    tbody.innerHTML='';
    for(let i = 0 ; i < dataPro.length ; i++){
        tbody.innerHTML+=`<tr>
                        <td>${i+1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button id="update" onclick="updateData(${i})"> update</button></td>
                        <td><button id="delete" onclick = "deleteData(${i})"> delete</button></td>
                    </tr>`
    }
    let divdelet=document.getElementById("divdelet")
    if(dataPro.length>0){
        divdelet.innerHTML=
        `<button onclick="deletAll()"> Delete All (${dataPro.length})</button>`
    }
}
 showData()

// delete
function deleteData(k){
    dataPro.splice(k,1);
    localStorage.products=JSON.stringify(dataPro);
    showData();
}

function deletAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()
    divdelet.innerHTML=''
}

// update
function updateData(i){
    title.value=dataPro[i].title
    price.value=dataPro[i].price
    taxes.value=dataPro[i].taxes
    ads.value=dataPro[i].ads
    discount.value=dataPro[i].discount
    getTotal()
    count.style.display='none'
    category.value=dataPro[i].category
    mode='update'
    submit.innerHTML=`Update`
    tmp=i
    scroll({
        top:0,
        behavior:'smooth'
    })
}
// search
let searchMode='Title'
function getSearchMode(id){
    let search=document.getElementById('search')
    if(id==='searchTitle'){
        searchMode='Title'
        
    }else{
        searchMode='Category'
    }
    search.placeholder='Search by ' + searchMode
    search.focus()
    search.value=''
    showData()
}
function searchData(value){
    tbody.innerHTML=''
    for(let i=0 ; i <dataPro.length ; i++){
        if(searchMode=='Title'){
            if(dataPro[i].title.toLowerCase().includes(value.toLowerCase())){
                tbody.innerHTML+=`<tr>
                        <td>${i+1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button id="update" onclick="updateData(${i})"> update</button></td>
                        <td><button id="delete" onclick = "deleteData(${i})"> delete</button></td>
                    </tr>`
            }
        }
        else{
            if(dataPro[i].category.toLowerCase().includes(value.toLowerCase())){
                tbody.innerHTML+=`<tr>
                        <td>${i+1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button id="update" onclick="updateData(${i})"> update</button></td>
                        <td><button id="delete" onclick = "deleteData(${i})"> delete</button></td>
                    </tr>`
            }
        }
    }
}