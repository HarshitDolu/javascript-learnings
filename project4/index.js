console.log("Project 4- Form Validation")
// classlist to add class in element
// form inputs 

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

// validate name here
name.addEventListener('blur',()=>{
console.log("blurred")
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    if(regex.test(str)){
        name.classList.remove('is-invalid')
        validUser=true;

    }
    else{
            name.classList.add('is-invalid');

    }

})

// validate email here
email.addEventListener('blur',()=>{
    
    let regex=/([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str=email.value;

    if(regex.test(str)){
        email.classList.remove('is-invalid')
        validEmail=true;

    }
    else{
            email.classList.add('is-invalid');

    }
    
    })


    // validate phone no
 phone.addEventListener('blur',()=>{

    let regex=/^([0-9]){10}$/

    let str=phone.value;
    
    if(regex.test(str)){
        validPhone=true;
        phone.classList.remove('is-invalid')

    }
    else{
            phone.classList.add('is-invalid');

    }
    
    
    
    })  



    let submit=document.getElementById('submit');

    submit.addEventListener('click',(e)=>{
        console.log('Clicked on submit');
        e.preventDefault();
// form submission
        if(validEmail && validPhone && validUser){
            console.log('Phone , email and user are valid')

            let success=document.getElementById('success');
            success.classList.add('show');

           //  failure.classList.remove('show');
          // $('#failure').alert('close')
          $('#failure').hide();
          $('#success').show();
         
        }
        else{

            console.log('Not valid!! Try again')
            let failure=document.getElementById('failure');
            failure.classList.add('show');
            // success.classList.remove('show');
        //    $('#success').alert('close')
        $('#success').hide();
        $('#failure').show();
        }


      

    })