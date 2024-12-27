

var product =[
    {code:"oppo",price:5000,category:"mobile",onsale:true},
    {code:"samsung",price:600,category:"tv",onsale:false},
    {code:"toshiba",price:8000,category:"tv",onsale:true},
    {code:"lg",price:9000,category:"screen",onsale:false}
]
var cartoon =``
for(var i=0;i<product.length;i++){
   if (product[i].onsale==true){
cartoon+=
`<div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h2>title:${product[i].code} </h2>
            <h3> Price:${product[i].price}</h3>
            <h3>category : ${product[i].category}</h3>
            <span class="badge bg-danger"> on sale </span>
          </div>
        </div>
      </div>
      </div>`

     
}
else{
    cartoon+=
`<div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h2>title:${product[i].code} </h2>
            <h3> Price:${product[i].price}</h3>
            <h3>category : ${product[i].category}</h3>  
          </div>
        </div>
      </div>
      </div>`
}
document.getElementById("demo").innerHTML=cartoon
}
