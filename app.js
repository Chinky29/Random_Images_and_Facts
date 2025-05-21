
let url= "https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random"
// using axios
let btn=document.querySelector("#btn");
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",async ()=>
{
    let f=await getImage();
    let img=document.querySelector("img");
    img.setAttribute("src",f);
   
})
async function getImage() {
    try{
    let res= await axios.get(url2);
    return(res.data.message);
    }
    catch (e){
    console.log("error-" ,e);
    return "/";
}    
}
let img=document.querySelector("#image");
let fact1=document.getElementById("fact");
btn.addEventListener("click",async ()=>
{
    let fact=await getFacts();
    fact1.innerText=fact;
})
async function getFacts() {
    try{
    let res= await axios.get(url);
    return(res.data.fact);
    }
    catch (e){
    console.log("error-" ,e);
    return "/";
}    
}