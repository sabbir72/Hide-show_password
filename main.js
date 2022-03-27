let p1=document.querySelector('#p1');
let i1=document.querySelector('#i1');

let p2=document.querySelector('#p2');
let i2=document.querySelector('#i2');


i1.addEventListener('click',()=>{
    if(p1.type==='password'){
         p1.type='text';
         i1.classList.replace("fa-eye-slash", "fa-eye");
    }else{
        p1.type='password';
        i1.classList.replace( "fa-eye","fa-eye-slash");
    }
})
i2.addEventListener('click',()=>{
    if(p2.type==='password'){
         p2.type='text';
         i2.classList.replace("fa-eye-slash", "fa-eye");
    }else{
        p2.type='password';
        i2.classList.replace( "fa-eye","fa-eye-slash");
    }
})


