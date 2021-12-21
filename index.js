document.addEventListener('DOMContentLoaded', ()=>{
    async function fetchData(url){
        try {
            const response = await fetch(url)
            const data = await response.json()
            const {items} = data
            let videosContainer = ''
            console.log(items)
            for(let values of items){
                videosContainer += ` <div class="cards">
                                        <img src="${values.snippet.thumbnails.high.url}" alt="image-2">
                                        <div class="master">
                                            <img class="channel" src="${values.snippet.thumbnails.high.url}" alt="ViniiTube">
                                            <div class="character">
                                                <h4>
                                                    ${values.snippet.title}
                                                </h4>
                                                <p>
                                                    ${values.snippet.channelTitle} <br> 27k views . 4 hours ago
                                                </p>
                                            </div>
                                        </div>
                                    </div>   `
            }
            const hero = document.querySelector('.hero')
            hero.innerHTML = videosContainer
        } catch (error) {
            console.log(error)
        }
    }
    fetchData('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&key=AIzaSyA0QGaYJP16O2HEsaEDnIQHzDQBxcgBUkQ')
    
    const icon = document.querySelector('.left')
    const input = document.querySelector('input')
    icon.addEventListener('click', clickFunction)
    
    function clickFunction(){
        if(input.value === ''){
            return
        }else{
            fetchData(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=${input.value}&key=AIzaSyA0QGaYJP16O2HEsaEDnIQHzDQBxcgBUkQ`)
        }
        
    }
    const buttons = document.querySelectorAll('.header_button')
    buttons.forEach(item=>{
        item.addEventListener('click', buttonFunction)        
        })
        function buttonFunction(e){
            const v = e.target.innerHTML.trim()
            fetchData(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${v}&maxResults=16&key=AIzaSyA0QGaYJP16O2HEsaEDnIQHzDQBxcgBUkQ`)
        }

})

