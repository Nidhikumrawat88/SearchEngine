const Searchform = document.getElementById("Search");
const Searchbox = document.getElementById("sbox");
const Searchresult = document.getElementById("result");
const Showbtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
 async function SearchImages(){
    keyword = Searchbox.value ;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=Hp3rwn4kMLYNPTWYeocdrtz8kLDFSetXLvCG3BogHBo&per_page=24`
const response = await fetch(url) ;
const data = await response.json();

if(page==1){
    Searchresult.innerHTML =" ";
}
const results = data.results ;


results.map((result)=>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html ;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    Searchresult.appendChild(imageLink);
})
Showbtn.style.display= "block";
}
Searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    SearchImages()
})
Showbtn.addEventListener("click",()=>{
    page++;
    SearchImages();
})