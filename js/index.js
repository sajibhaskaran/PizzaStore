var total = {
  'size': '',
  'crust': '',
  'cheese': '',
  'sauce': '',
  'meat': [],
  'veggies': []
};
var price = {
  'size': '',
  'crust': '',
  'cheese': '' ,
  'sauce': '',
  'meat': [],
  'veggies': []
};

var getTotal = (price) => {
  var amount = 0;
  var totalPrice = document.querySelector('#total_price');
  for(var key of Object.keys(price)){
      if(Array.isArray(price[key])){
          for(item in price[key]){
              amount += parseInt(price[key][item]);
          }
      }else if(!(price[key] == ''))amount += parseInt(price[key])

  }


      totalPrice.innerHTML=amount + ".00";

 console.log(amount);

}


var getHTML = (total, price) =>{

  var element1 = document.querySelector('#order');
  var element2 = document.querySelector('#price');

  element1.innerHTML= '';
  element2.innerHTML= '';

  for(var key of Object.keys(total)){
  if(Array.isArray(total[key])){
    for(item in total[key]){

      var itemnode = document.createElement("p");
      var textnode = document.createTextNode(total[key][item]);
          itemnode.appendChild(textnode);
          element1.appendChild(itemnode);

      var pricenode = document.createElement("p");
          textnode = document.createTextNode(price[key][item] +".00");
          pricenode.appendChild(textnode);
          element2.appendChild(pricenode);
    }
  }else{

    var itemnode = document.createElement("p");
    var textnode = document.createTextNode(total[key]);
        itemnode.appendChild(textnode);
        element1.appendChild(itemnode);

        var pricenode = document.createElement("p");
      if(!(price[key] == '')){
        var textnode = document.createTextNode(price[key]+".00");
        pricenode.appendChild(textnode);
        element2.appendChild(pricenode);
      }
      else if(price[key] === 0) {
        textnode = document.createTextNode(0+".00");
        pricenode.appendChild(textnode);
        element2.appendChild(pricenode);
      }
  
  }
  }
getTotal(price);
}



var getValue = (name, id) => {
  var classid;

      if(name === 'meat'){
            total['meat']=[];
            price['meat']=[];
            classid = '.'+name + ' input[type=checkbox]';
      }
      else if(name === 'veggies'){
            total['veggies']= [];
            price['veggies']= [];
            classid = '.'+name + ' input[type=checkbox]';
      }
      else classid = '.'+name + ' input[type=radio]';

  var list = document.querySelectorAll(classid);
  for (var item of list) {

    if(item.checked){
            if(name === 'meat' || name === 'veggies'){
              total[name].push(item.value)
                  if(total[name].indexOf(item.value) == 0) price[name].push(0)
                  else price[name].push(1);
            }
            else{
              total[name] = item.value;
              price[name] = parseInt(item.id);
            }
    }
  }
getHTML(total, price);

};

window.onclick= (e) => !(e.target.value === undefined) ? getValue(e.target.name, e.target.id): null;
