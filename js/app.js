const cityForm = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('#cityName')
const clima = document.querySelector('#clima')
const temp = document.querySelector('#temperatura')
const imgDay = document.querySelector('.card-img-top')


cityForm.addEventListener('submit', getCityUser)

async function getCityUser(event) {
    event.preventDefault()
    
    const cidadeUsuario =event.target.city.value
    const cityData = await getWeather(cidadeUsuario)
    
    cityForm.reset()
}



async function putWeather (array=[]){
   
    if(array[0]){
        

        if (array[2]==='NUBLADO') {
            imgDay.src='./img/nublado.jpg'
        }else{
            imgDay.src='./img/solDia.jpg'
        }
        
    }else{
        imgDay.src='./img/noite.jpg'
    }

    temp.innerHTML = array[1]
    clima.innerHTML=array[2]
    cityName.innerHTML=array[3]
    
}
