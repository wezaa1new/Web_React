import React from 'react'

function randInt(min,max){
    let x = (max-min)+1
    return min + Math.floor(Math.random()*x)
}

export default function Banner(){
    const r = randInt(1,3)


    let banner = ''

    let url = ''

    switch(r){
        case 1:
            banner = './banner/cat01.jpg'
            url = 'https://www.youtube.com/'
            break

        case 2:
            banner = './banner/cat02.png'
            url = 'https://www.google.com/'
            break

        case 3:
            banner = './banner/cat03.jpg'
            url = 'https://github.com/'
            break
    
        default: break
    }

    const bannerClick = () =>{
        window.open(url)
    }

    return (
        <div style={{margin:'20px',textAlign:'red'}}>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer',height:'900px',width:'1080px'}} alt="banner"/>
        </div>
    )
}