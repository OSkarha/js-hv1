(function(){ 

       'use strict';
   
       let name = prompt ('Введите свой логин, пожалуйста');
     
       if (name == "Админ") {
   
           let pas = prompt ('Введите свой пароль, пожалуйста');
   
               if (pas == "Чёрный Властелин") {
                   alert ('Добро пожаловать!')
               }
   
               else if (pas){
                   alert ('Пароль неверен')
               } else {
                   alert ('Вход отменён')
               }
   
       } else if (name){
           alert ('Я вас не знаю')
   
       } else {
           alert ('Вход отменён')
       }
       
   
   })();