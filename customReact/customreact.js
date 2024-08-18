function customRender(reactElement, container)
{
    // logic : kasie inject krenge : 
          //1. phele DOM elem create kro 
         // 2. jaha per inject krna hota tha waha per append child krke likh lete the
    //  Dom elem create kro; Dom elem create krne k liye ek property hoti h createElement
    // creteElement () kiska ya kya Dom crete krega toh reactElement [Aap createElement('p') 'p' pass krke direct para type DOM element bna skte h]
// ----------------------VERSION 1---------------------------------
//     const domElement = document.createElement(reactElement.type); // DOM Elem ban gya h ie container tayar h of type 'a' but kuch ander h nhi
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElement)

const domElement = document.createElement(reactElement.type) // DOM element create kiye using document.createElement(), yeh func requires type of element toh we may write directly write as 'p' here it as reactElement.type
domElement.innerHTML=reactElement.children; // Hum uss domElement k HTML m change krenge
for(const prop in reactElement.props)
{
    if(prop ==='children') continue; // phele log props m hi children ki value ko pass kr dete the 
    domElement.setAttribute(prop,reactElement.props[prop]); // yeh hmare domElement k attributes ko set krdega kon sa attribute prop attribute aur usko kya set krega toh reactElement.props[prop] se set kr dega
}
container.appendChild(domElement);
}
const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blanck'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector("#root") // hume root le liya h ya grab kr liya h 
// and now we need to render some things on root toh here we will see how react sees elements when we render => humne React Element bnaya
// humne yeh isilyeh bnaya taki hum yeh smjh payeh ki react underhood kaise kam krta h and kyuki yeh hmara custom react h toh hme yeh btana padega ki hum elements kaise dekhenge taki jo v hmara yeh custom react use kre aapne elements issi trah se likhna padega


//Now we want to write a function jo ki render kr de hmare ReactElement ko render means Hmare ReactElement ko add krde div element m (inject krde)
// so we write a customRender((kya render(inject) kru),(kha per inject kru)) method jo ki takes two argument kya render(inject) kru and kha per inject kru

customRender(reactElement,mainContainer)