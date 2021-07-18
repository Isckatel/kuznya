console.log('Скрипты подключены!');
$(document).ready(function() {
  $('.burger').click(function(event){
    $('.burger, .mainMenu').toggleClass('active');//нажали добавили класс, нажали еще раз убрали класс
  })  
})
