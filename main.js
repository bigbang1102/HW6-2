const root = document.querySelector('#root')
const btnAdd =document.querySelector('.btn-add')

function Counter() {
    let countNum = 0
    function makeElement(tag, attr_n, attr_v, content) {
        let output = document.createElement(tag)
        output.setAttribute(attr_n, attr_v)
        output.textContent = content
        return output
    }

    function updateCounter(n) {
        if (countNum + n < 0) {
            return
        }
        countNum += n
        number.textContent = countNum
    }
    // const delCounter=()=>{
    //     const parentElement = counter.parentNode;
    //     parentElement.removeChild(counter);

    // }
    const delCounter=(e) =>{
        console.log(e.target.closest('.counter'))
        e.target.closest('.counter').remove()
    }
    const counter = makeElement('div', 'class', 'counter', '')
    const btnInc = makeElement('button', 'class', 'btn-inc', 'เพิ่ม')
    const number = makeElement('h3', 'class', 'number', '0')
    const btnDec = makeElement('button', 'class', 'btn-dec', 'ลด')
    const btnClr = makeElement('button', 'class', 'btn-clr', 'คืนค่า')
    const btnDel = makeElement('button', 'class', 'btn-del', 'ลบ')

    btnInc.addEventListener('click', () => updateCounter(1))
    btnDec.addEventListener('click', () => updateCounter(-1))
    btnClr.addEventListener('click', () => updateCounter(-countNum))
    btnDel.addEventListener('click',delCounter)

    counter.append(btnInc)
    counter.append(number)
    counter.append(btnDec)
    counter.append(btnClr)
    counter.append(btnDel)

    return counter
}
// console.log(Counter())
// root.append(Counter())
// root.append(counter)
const hdlAddCounter=()=>{
    root.append(Counter())
}

btnAdd.addEventListener('click' ,hdlAddCounter)