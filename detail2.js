
async function getData2() {

    let x2 = await fetch('Productssuper.json');
    let server2 = await x2.json();
    return server2;
}
async function main2() {
    let data2 = await getData2();
    console.log(data2)
    return data2;
}

async function addData() {
    let arr2 = await main2();
    let Pagedr = new URLSearchParams(window.location.search).get('dr');
    for (let product of arr2) {
        if (product.dr == Pagedr) {
             adddata();
            
            console.log("biku");
            break;
            
        }
    }
    async function getData(Pagedr) {
        let x = await fetch(`Products${Pagedr}.json`);
        let server = await x.json();
        return server;
    }
    async function main() {
        let data = await getData(Pagedr);
        console.log(data)
        return data;
    }
    main();
    async function adddata() {
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
                                    
                                        <img class="img"
                                            src=${element.image}
                                            alt="">  
                                 
                                        <button class="crttxt" onclick="addToCart(${element.name},${element.price},${element.image})">Add to Cart</button> 
                                    </div>
                                </div>
                                <a class="taketo" href="/indidetail.html?id=${element.id}&dr=${Pagedr}" style="text-decoration: none; color:black;  ">
                                
                                <div class="sbox">
                                    <div class="itmname">${element.name}</div>
                                    <div class="itmabt"> Lorem ipsum dolo.</div>
                                    <div class="itmprice">
                                        $${element.price}
                                    </div>    
                                </div>
                                </a>`;
                x.append(div);
            })

        }
    }


}







addData();
let nav = document.querySelector(".tmplt")

async function loadtmplt() {
    let x = await fetch('/template.html');
    let loader = await x.text();
    nav.innerHTML = loader;
}
loadtmplt();



