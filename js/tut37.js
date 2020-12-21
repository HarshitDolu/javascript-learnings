// Iterators

function fruitsIterator(values){
    let nextIndex=0;
    // we will return object

    return{
        next: function(){

            if(nextIndex<values.length){
                // will return below obj
              return  {
                    value: values[nextIndex++],
                    done: false


                }
            }

                else{
                return    {
                            done: true
                    }
                }
            }
        }
    }



const myarr=['Apple','Grapes','Oranges','Bhindi'];

// using iterator
const fuits=fruitsIterator(myarr);
console.log(fuits.next)//.value;
