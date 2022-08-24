var expressions={
    personName: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
}

function validateName(){
    var expRegName= /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
    var personName = document.getElementById("name");
    if(!expRegName.exec(personName.value)){
        alert("Only write letters.");
        return false;
    }else{
        return true;
    }
}


function validateAge(date){

   now=new Date()
 
   var array_date = date.split("/")

   if (array_date.length!=3)
      return false

   var year
   year = parseInt(array_date[2]);
   if (isNaN(year))
      return false

   var month
   month = parseInt(array_date[1]);
   if (isNaN(month))
      return false

   var day
   day = parseInt(array_date[0]);
   if (isNaN(day))
      return false

   if (year<=99)
   year +=1900

   age=now.getYear()- year - 1; 

   if (now.getMonth() + 1 - month < 0) 
      return age
   if (now.getMonth() + 1 - month > 0)
      return age+1  
   if (now.getDay() - day >= 0)
      return age + 1
    
   return age

}