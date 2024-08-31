async function getData() {
    let x = await fetch('Products1.json');
    let server = await x.json();
    return server;
}
async function main() {
    let data = await getData();
    console.log(data)
    return data;
}
main();
async function addData() {
    let arr = await main();
    let x = document.querySelector(".itemcont");
    x.innerHTML = '';
    if (arr.length > 0) {
        arr.forEach(element => {
            let div = document.createElement('div')
            div.classList.add("itmbox")
            div.innerHTML =
                         `             
                        <div class="itm">
                            <div class="itmimg">
                            <a "href=/indidetail.html?id=${element.id}">
                                <img class="img"
                                    src="${element.image}"
                                    alt="">
                            </a>
                                <button class="crttxt">Add to Cart</button>
                            </div>
                        </div>
                       <a  href="/indidetail.html?id=${element.id}" style="text-decoration: none; color:black;" >
                        <div class="sbox">
                            <div class="itmname">${element.name}</div>
                            <div class="itmabt"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto
                                voluptatem esse impedit nihil? Quibusdam perspiciatis dicta delectus consectetur beatae veniam
                                adipisci velit eaque ipsum.</div>
                            <div class="itmprice" data-id="${element.id}">
                            
                                $${element.price}
                            </div>    
                        </div>
                        </a>`;
        x.append(div);
        });

    }

}
addData();
let nav = document.querySelector(".tmplt")

async function loadtmplt(){
    let x=await fetch('/template.html');
    let loader= await x.text();
    nav.innerHTML=loader;
}
loadtmplt();