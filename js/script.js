let parent = document.querySelector('#parent');
let menu = document.querySelector('.menu');
//let tabs = document.querySelector('.tabs');
let tabs = document.querySelectorAll('.tab');
let links = document.querySelectorAll('.link');
 
 menu.addEventListener('click',(e)=>{
     let elTarget=e.target;
     let dataLink = elTarget.dataset.vkladka;
     for(let link of links){
        e.preventDefault();
        
        link.classList.remove('active');
        for(let tab of tabs){
            tab.classList.remove('active');
            if(dataLink === tab.id){
                tab.classList.add('active');
                
            }
            
        }
        
     }
     elTarget.classList.add('active');   
})
// for(let link of links){
//     link.addEventListener('click',(e)=>{
//         e.preventDefault();
//         let currentLink = e.target;
//         let dataLink = currentLink.dataset.
//         for(let tab of tabs){

//         }

//     })
// }