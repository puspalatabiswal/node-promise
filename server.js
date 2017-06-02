/*function service(){
	console.log("i am calback")
} // function


var array = [1,2,3];// for array
var obj ={ // for object
	name : "pooja",
	city :"hyderabad"
}
function sample (name){ //for invoking function
console.log(name());
}

sample(service); // invoke the function
*/

/*================================*/

/*var Promise = require ('Promise')*/

function getData(val,err){
	return new Promise(function(resolve , reject){
		if(err){
				resolve(val)
		
		}
		reject(err)
})
}


/*function sample(){
	return "pooja";
}*/

// getData(1).then(function(data){
// console.log(data)

/*})*/

/* sample().then(function(data){
 	console.log(data)
 })*/

 getData("pooja", "i am the error")
 .then(function(data){
 	console.log(data);
 })

 .then(function(newData){
 	console.log(newData);

 })

 .catch(function(){ // catch is a method
 	console.log("this is error block");
 	console.log(err);
 })