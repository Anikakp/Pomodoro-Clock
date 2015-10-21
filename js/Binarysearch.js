function findElement(array, value)
{
	
	var length1 = array.length;
	console.log("length" + length1);
	var mid = Math.floor(length1/2);

 console.log("mid" + mid);
	if(array[mid] == value)
	{
	  return mid;
	}
    else {
     if(value < array[mid])
      { 
         array = array.splice(0,mid);
         console.log(array);
         return findElement(array,value); 
      }
      else
       {
         array = array.splice(mid,length-1);
         console.log(array);
         return findElement(array,value);
       }
    }
    
}

function array1(){

	this.length = 0;
};

	array1.prototype.SearchElement = function SearchElement(array1, element){

	   var currentIndex = 0;
	   var minIndex = 0;
	   var maxIndex = this.length -1;
	   var midIndex;
	   
	   while(minIndex <= maxIndex)
	   {
	      midIndex = (minIndex+maxIndex)/2;
	      if (element == this[midIndex])
	      	{
	      		return midIndex;
	      	}
	      	else {
	      if(element > this[midIndex])
	      {
	        minIndex = midIndex+1; 
	      }
	      if(element < this[midIndex])
	      {
	        maxIndex = midIndex-1;
	      }
	  }
	      
	   }
	   return 1;

	}


	function SearchElement(searchElement) {

    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2;
        currentElement = this[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return -1;
}

Array.prototype.SearchElement = SearchElement