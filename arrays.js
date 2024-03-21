 let arr1=[3,7,34,90,12];
console.log(arr1[arr1.length-1]);
let arr2=[true,"green","where",12,56];
console.log(arr2[arr2.length-1]);
stringMyPets=["Cow","Bird","Snake","Dog"];
console.log(stringMyPets.toString());
const arr3=[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort()
console.log(arr3);
var arr=["apples","mango","apple","orange","mango","mango"];

function removeDuplicates(arr) {
	var unique = arr.reduce(function (acc, curr) {
		if (!acc.includes(curr))
			acc.push(curr);
		return acc;
	}, []);
	return unique;
}
console.log(removeDuplicates(arr));

let arr5=["the","way","x",4];
let substring="way"
if (arr5.indexOf(arr5) !==1) {
	console.log({substring});
}
else{
	console.log(`${substring}the search word was not found`);
}
let word="sevink";
let sortword=(string)=>{
    return string.split("").sort().join("")
}
console.log(sortword("sevink"));
