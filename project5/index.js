// data about candidates

const data = [
    {
        name: 'Harshit Jain',
        age: 21,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]



// cv iterator

function cvIterator(profiles){

let nextIndex=0;
return {

    next: function(){
        if(nextIndex<profiles.length){

            return {
                value: profiles[nextIndex++],
                done: false


            }
        }
        else{

            return {
                done: true
            }}}
}
}

// button listener

let next=document.getElementById('next');
next.addEventListener('click',nextCV);

const candidates=cvIterator(data);
nextCV();

function nextCV(){
   
    const curr=candidates.next().value;

let image=document.getElementById('image');
let profile=document.getElementById('profile');
if(curr != undefined){
image.innerHTML=`<img src='${curr.image}'>`
profile.innerHTML = `<ul class="list-group">
<li class="list-group-item">Name: ${curr.name}</li>
<li class="list-group-item">${curr.age} years old</li>
<li class="list-group-item">Lives in ${curr.city}</li>
<li class="list-group-item">Primarily works on ${curr.language}</li>
<li class="list-group-item">Uses ${curr.framework} framework</li>
</ul>`;
}
else{
    alert('End of candidate applications');
    console.log(window.location.reload());
    window.location.reload();
    
}

}



    























