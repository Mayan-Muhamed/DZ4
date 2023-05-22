const btn = document.querySelector('.btn')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')
const name = document.querySelector('.name')
const age = document.querySelector('.age')
let dataIndex = 0
let data = []

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'peoples.json')
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        data = JSON.parse(request.response)
        showData()
    })
})


nextBtn.onclick = ()=>{
    dataIndex = (dataIndex + 1) % data.length
    showData()
}

previousBtn.onclick = ()=>{
    dataIndex = (dataIndex - 1 + data.length) % data.length
    showData()
}


const showData = ()=>{
    const person = data[dataIndex]
    name.innerHTML= person.name
    age.innerHTML = person.age
}


const request = new XMLHttpRequest()
request.open('GET', 'info.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.addEventListener('load', () => {
    const data = JSON.parse(request.response)
    console.log(data)
})


