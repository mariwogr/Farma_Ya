import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {}

  filterProduct = "";
  
  public cart_products : Product[]=[]
  
  public products : Product[] = [
    {id: 0, name:"Mucosan", price:10.58, photo:"https://www.farmasoler.com/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/m/u/mucosan_30_mg_jarabe_250_ml_sanofi_656545_8470006562451_pg1_ps.jpg", uds: 0, recipe: false},
    {id: 1, name:"Nivea", price:5.20, photo:"https://chinoantonio.com/11894-large_default/nivea-creme-150-ml.jpg", uds: 0, recipe: false},
    {id: 2, name:"Gel de manos", price:2.83, photo:"https://m.media-amazon.com/images/I/61tldNyUwGL._SX342_.jpg", uds: 0, recipe: false},
    {id: 3, name:"Fisiogen", price:15.67, photo:"https://statics.promofarma.com/static/promofarma/prod/product_images/z/MWKC5_es_ES_0.jpg", uds: 0, recipe: false},
    {id: 4, name:"Hyabak", price:9.45, photo:"https://statics.promofarma.com/static/promofarma/prod/product_images/mr/Y0HI3_es_ES_0.png", uds: 0, recipe: false},
    {id: 5, name:"Celecrem", price:3.99, photo:"https://galenicumderma.com/wp-content/uploads/2021/09/Celecrem-Fijo-scaled.jpg", uds: 0, recipe: false},
    {id: 6, name:"Dalsy", price:4.65, photo:"https://farmaciamariacacabelos.com/wp-content/uploads/2021/08/dalsy-20-mg-ml-suspension-oral-1-frasco-de-150-ml.jpg", uds: 0, recipe: false},
    {id: 7, name:"Alcachofa forte", price:14.99, photo:"https://www.dosfarma.com/50750-large_default/arkolfuido-forte-alcachofa-hinojo-mate-y-uva-20-ampollas.jpg", uds: 0, recipe: false},
    {id: 8, name:"Xhekpon", price:6.20, photo:"https://statics.promofarma.com/static/promofarma/prod/product_images/z/HOVQP_es_ES_0.jpg", uds: 0, recipe: false},
    {id: 9, name:"Parches Citronella", price:4.99, photo:"https://farmacialabandeira.com/6227-large_default/goibi-parches-adh-citronela-sobre-la-ropa-24-par.jpg", uds: 0, recipe: false},
    {id: 10, name:"Tapones oidos", price:2.50, photo:"https://farmacialazenia.com/9254-large_default/xhansaplast-tapones-para-los-oidos-6-unidades.jpg.pagespeed.ic.44-Ew6YGgT.jpg", uds: 0, recipe: false},
    {id: 11, name:"Articudol", price:11.39, photo:"https://farmahouse.com/17441-large_default/articudol-30-comprimidos-de-mont-star.jpg", uds: 0, recipe: false},
    {id: 12, name:"Serelys Osteo", price:28.39, photo:"https://luaterra-6360.kxcdn.com/wp-content/uploads/2019/11/Serelys-osteo-60-comp.jpg", uds: 0, recipe: false}
  ]

  public recipe_products : Product[] = [
    {id: 0, name:"Epipen 2 pk", price:15.58, photo:"https://m.media-amazon.com/images/I/41oOGpbXqvL.jpg", uds: 0, recipe: true},
    {id: 1, name:"Anastrozole", price:53.53, photo:"https://d35cnulyv0pa6p.cloudfront.net/products/images/2018/247991/arimidex.jpg?E8l8Q8mRyVCskvhp_bL0ezIgmvdnnoQp=", uds: 0, recipe: true},
    {id: 2, name:"Anoro Ellipta", price:40.83, photo:"https://www.pharmabiz.net/wp-content/uploads/2016/05/anorogsk.jpg", uds: 0, recipe: true},
    {id: 3, name:"Arixtra", price:26.67, photo:"https://assets.website-files.com/5f3be88c03fb871a9a188a78/60b15109d94fd283b9e58de6_ARIXTRA.jpg", uds: 0, recipe: true},
    {id: 4, name:"Crestor", price:20.45, photo:"https://cdn.shopify.com/s/files/1/0024/6058/1940/products/crestor-10-mg-x-30-comprimidos-astra-zeneca-154317.jpg?v=1586193199", uds: 0, recipe: true}
  ]

  prod_to_add: string[] = []


  removeUdsHome(id:number){
    if (this.products[id].uds > 0){
      this.products[id].uds -= 1
    }
  }
  
  addUdsHome(id:number){
    this.products[id].uds += 1
  }

  removeUdsRecipe(id:number){
    if (this.recipe_products[id].uds > 0){
      this.recipe_products[id].uds -= 1
    }
  }
  
  addUdsRecipe(id:number){
    this.recipe_products[id].uds += 1
  }

  addToCartHome(id:number){
    if (this.products[id].uds > 0){
      let repeated_id = -1;
      for (let i=0; i < this.cart_products.length; i++){
        if (this.products[id].name === this.cart_products[i].name){
          repeated_id = i;
          break;
        }
      }
      if (repeated_id == -1){
        let toAdd: Product = {id: this.cart_products.length, name: this.products[id].name, price: this.products[id].price, photo: this.products[id].photo, uds: this.products[id].uds, recipe: this.products[id].recipe}
        this.cart_products.push(toAdd)
        this.products[id].uds = 0
      }
      else{
        this.cart_products[repeated_id].uds += this.products[id].uds;
      }
    }
  }

  addToCartRecipe(id:number){
    if (this.recipe_products[id].uds > 0){
      let repeated_id = -1;
      for (let i=0; i < this.cart_products.length; i++){
        if (this.recipe_products[id].name === this.cart_products[i].name){
          repeated_id = i;
          break;
        }
      }
      if (repeated_id == -1){
        let toAdd: Product = {id: this.cart_products.length, name: this.recipe_products[id].name, price: this.recipe_products[id].price, photo: this.recipe_products[id].photo, uds: this.recipe_products[id].uds, recipe: this.recipe_products[id].recipe}
        this.cart_products.push(toAdd)
        this.recipe_products[id].uds = 0
      }
      else{
        this.cart_products[repeated_id].uds += this.recipe_products[id].uds;
      }
    }
  }

  removeProd(id: number) { 
    this.cart_products.splice(id, 1)
    console.log("ELIMINAR: ", id)
    console.log(this.cart_products)
  }

  totalprice() {
    let price: number = 0
    if (this.cart_products.length != 0) {
      for (let i=0; i < this.cart_products.length; i++){
        price += this.cart_products[i].price * this.cart_products[i].uds
      }
    }
    return price
  }

  buyAll(){
    
    if (this.cart_products.length > 0){
      this.cart_products = []
      window.alert("Compra efectuada. \n Detalles de entrega:  \n Leganés, Madrid (España); /C San Guillermo 17A \n ¡¡¡Muchas gracias por confiar en nosotros!!!")
    }
    else{
      window.alert("No hay productos añadidos")
    }
  }

  subscribeAll(){
    
    if (this.cart_products.length > 0){
      this.cart_products = []
      window.alert("Suscripción efectuada (Todos los miércoles). \n Detalles de entrega:  \n Leganés, Madrid (España); /C San Guillermo 17A \n ¡¡¡Muchas gracias por confiar en nosotros!!!")
    }
    else{
      window.alert("No hay productos añadidos")
    }
  }

  closePopUp(){
    document.getElementById("pop_up_buy")!.style.visibility = "hidden"
  }

  goRecipe(){
    document.getElementById("home")!.style.display = "none"
    document.getElementById("recipe")!.style.display = "block"
    document.getElementById("cart")!.style.display = "none"
  }

  goHome(){
    document.getElementById("home")!.style.display = "block"
    document.getElementById("recipe")!.style.display = "none"
    document.getElementById("cart")!.style.display = "none"
  }

  goCart(){
    document.getElementById("home")!.style.display = "none"
    document.getElementById("recipe")!.style.display = "none"
    document.getElementById("cart")!.style.display = "block"
  }
}


