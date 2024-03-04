import inquirer from "inquirer";


const answer= await inquirer.prompt([{
    
    type : "list",
    name: "intertAmount",
    choices:["Rs","Dollar","Riyal"],
    message:"Select your input currency"
},{
   
   
    type : "number",
    name: "amountinput",
    
    message:"Enter the Amount you want to convert"


},
 {
     
    type : "list",
    name: "convertAmount",
    choices:["Rs","Dollar","Riyal"],
    message:"Select your output currency"
}




])
if (    answer.intertAmount === "Rs"&& answer.convertAmount ==="Dollar" ){
    
            console.log(`The ${ answer.amountinput} Pakistani Rupe is equal to ${ answer.amountinput/281} Us Dollar`)
}


else if (     answer.intertAmount=== "Rs"&& answer.convertAmount ==="Riyal" ){
    
           console.log(`The ${ answer.amountinput} Pakistani Rupe is equal to ${ answer.amountinput/75} Saudi Riyal`)
}
else if (     answer.intertAmount=== "Riyal"&& answer.convertAmount ==="Dollar" ){
              console.log(`The ${ answer.amountinput} Saudi Riyal is equal to ${ answer.amountinput/3.75} US Dollar`)
    
}
else if (     answer.intertAmount=== "Riyal"&& answer.convertAmount ==="Rs" ){
    
               console.log(`The ${ answer.amountinput}Saudi Riyal is equal to ${ answer.amountinput*75} Pakistani Rupe`)
}
else if (     answer.intertAmount=== "Dollar"&& answer.convertAmount ==="Rs" ){
    
            console.log(`The ${ answer.amountinput}US Dollar is equal to ${ answer.amountinput*281} Pakistani Rupe`)
}
else if (     answer.intertAmount=== "Dollar"&& answer.convertAmount ==="Riyal" ){
            console.log(`The ${ answer.amountinput} US Dollar is equal to ${ answer.amountinput*3.71} Saudi Riyal`)

}else{
 console.log("Plesa Select another currency to convert")
}


