
    
    //variavel que valida a função openbasket
    var validation = false

    //elemento html container que contem os itens da sacola 
    var containerCart = document.getElementById("containerAnotherOrders")
    
    //elemento html container que contem os itens do açai
    var containerCartAcai = document.getElementById("containerAcai")

    // soma ds arrays em um só para usar na função GenerateCartItens
   var cartItens = hotDogItems.concat(salgadosItems,bebidasItems,polpasItems)

   var cartItensAcai = shopItemsData.concat(shopItemsData)

   
//função que abre  e fecha a sacola(carrinho) dos itens 
let openBasket=()=>{

    let basketOpen = document.getElementById("basketSection")
    let body= document.getElementById('body')
    let basketDiv = document.getElementById('basket')
    let sendOrder = document.getElementById('sendOrder')

    

    if(validation === false ){

        
        
        document.getElementById('toSeeShopCart').innerHTML = 'Fechar Sacola'
        basketOpen.classList.add("basketSectionOpen")
        basketDiv.style.backgroundColor = 'black'
        sendOrder.style.display = 'block'
        body.style.position = 'fixed'
        body.style.transition = 'all 1s'
        basketOpen.style.transition = "all 1s"
        basketDiv.style.transition = "all 1s"
        

        
        
        
       
       
        
        generateCartItems(containerCart,cartItens)
        generateCartItemsAcai(containerCartAcai,cartItensAcai)
       
       
       
        return validation = true

    }else{
        
        document.getElementById('toSeeShopCart').innerHTML = 'Abrir Sacola'
        basketOpen.classList.remove("basketSectionOpen")
        basketDiv.style.backgroundColor ='#f20055'
        sendOrder.style.display = 'none'
        body.style.position = 'relative'
        sendOrder.style.transition = "all 1s"
        basketOpen.style.transition = "all 1s"  
        basketDiv.style.transition = "all 1s"
        
        return validation = false

    }
    
    
}

// gera o carrinho com os itens seecionados 
let generateCartItems = (div,product) =>{
    if (basket.lenght !==0) {

        return (div.innerHTML = basket.map((x) =>{
            let {id,item} = x

            
            let search = product.find((y) => y.id === id) || [] 
           
           
           
            return`
                
                <div class=" cartItem">
                <img class="imgItem" src="${search.img}">
                <p class="amount"> ${item}</p>
                <p class="itemName"> ${search.name}</p>
                <p class = "itemPrice"> ${search.price}</p>
                <p class = "totalPrice"> ${item*search.price}</p>
                <div  class="trashIcon" onClick = "removeIten(${id})"></div>
                </div>

                `  
           
            
        }).join(""))
    }
}



//remove  os itens da sacola 

let removeIten = (id) =>{

    console.log('removendo itens')
    // let selectedId = id

    // basket.filter((x)=> x.id !== selectedId.id)
    // generateCartItems(hotdog,cartItens)
    // localStorage.setItem("data",JSON.stringify(basket))

}







//verifica o checkbox com o tamanho que foi selecionado 
var acaiOrder =()=>{

    let tmn = document.getElementsByName('tamanho')
  
       
    for(let i=0; i<tmn.length;i++){
        if(tmn[i].checked){
            
            acaiCremosoSize = tmn[i].value
          
        }
        
    }

    

    switch (acaiCremosoSize){
   
        case "300ml":

            acaiCremosoPrice = shopItemsData.map((x)=>x.priceSize[0])
            shopItemsData.push([{price:acaiCremosoPrice}])
            console.log(shopItemsData)
            console.log(acaiCremosoPrice)
            break
           
        case "500ml":

            acaiCremosoPrice = shopItemsData.map((x)=>x.priceSize[1])
            break
        case "700ml":

            acaiCremosoPrice = shopItemsData.map((x)=>x.priceSize[2])
            break
        case "1L":

            acaiCremosoPrice = shopItemsData.map((x)=>x.priceSize[3])
            break
        case "Barca":

            acaiCremosoPrice = shopItemsData.map((x)=>x.priceSize[4])
            break

            
    }
 

        
       
}

// gera o carrinho com os itens seecionados do açai 
var generateCartItemsAcai = (div,product) =>{
  if (basketAcai.lenght !==0) {

      return (div.innerHTML = basketAcai.map((x) =>{
          let {id,item} = x

          
          let search = product.find((y) => y.id === id) || [] 
         
         
         
          return`
              
              <div class=" cartItem">
              <img class="imgItem" src="${search.img}">
              <p class="amount"> ${item}</p>
              <p class="itemName"> ${search.name}</p>
              <p class = "itemPrice"> ${search.price}</p>
              <p class = "totalPrice"> ${item*search.price}</p>
              <div  class="trashIcon" onClick = "removeIten(${id})"></div>
              </div>

              `  
         
          
      }).join(""))
  }
}




