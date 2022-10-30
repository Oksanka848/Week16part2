
let button = document.getElementById('button');
button.onclick = subtotal;
  

    function subtotal() {
    
    var brand = document.getElementById ('brand').value;
    brand = parseInt(brand);
    var model = document.getElementById ('model').value;
    model = parseInt(model);
    var bodytype = document.getElementById ('bodytype').value;
    bodytype = parseInt(bodytype);
    var mileage = document.getElementById ('mileage').value;
    mileage = parseInt(mileage);
    var gas = document.querySelector('input[type=checkbox][name="gas"]:checked').value;
    gas = parseInt(gas);
    var age = document.querySelector('input[type=radio][name="age"]:checked').value;
    age = parseInt(age);
    var total=0;
    var arr = [brand , model , bodytype , mileage , gas , age]
    for (var i in arr) {
      total += arr[i];
          }
    document.getElementById ('total').innerHTML= total + ' ' + 'тысяч рублей';
    
  }