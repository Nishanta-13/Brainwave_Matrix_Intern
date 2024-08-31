
let nav = document.querySelector(".tmplt")
async function loadtmplt() {
    let x = await fetch('/template.html');
    let loader = await x.text();
    nav.innerHTML = loader;
}
loadtmplt();
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
            adddetail(Pagedr);

            console.log("biku");
            break;

        }
    }
    async function adddetail(Pagedr) {
        async function getData() {
            let x = await fetch(`Products${Pagedr}.json`);
            console.log(Pagedr)
            let server = await x.json();
            return server;
        }
        async function main() {
            let data = await getData();
            console.log(data)
            return data;
        }
        main();

        let arr = await main();
        console.log(arr)
        let Pageid = new URLSearchParams(window.location.search).get('id');
        let detail = document.querySelector(".supercontainer");
        detail.innerHTML = '';
        console.log(Pageid);
        arr.forEach(element => {
            if (element.id == Pageid) {
                let div = document.createElement('div');
                div.classList.add("container");
                div.innerHTML = `
            <div class="imgcont">
                <img class="img" src="${element.image}" alt="">
            </div>
            <div class="info">
                <div class="name">${element.name}</div>
                <div class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere voluptas ipsa
                    accusantium quis vero, quasi totam laudantium ratione culpa harum nulla nobis, suscipit numquam.
                </div>
                <div class="price">$${element.price}</div>

                <div class="cont">
                    <button class="buy">Buy Now</button>
                    <button class="cartt" onclick="showNotification()">Add to cart</button>
                </div>

            </div>` ;
                detail.append(div);
            }

        });


    }
}
addData()

function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

