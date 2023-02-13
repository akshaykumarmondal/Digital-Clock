const hourElement=document.getElementById('hour');

const minuteElemet=document.getElementById('Minutes');

const secondElemet=document.getElementById('Seconds');

const ampmElement=document.getElementById('ampm');

// function to get data about time from our computer

function updateClock(){

    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm='AM'

    if(h>12){   //if hour is > 12 that is 13 
                // subtract 13 -12 = 1 and then
                // ampm should be pm;
        h=h-12;
        ampm='PM';
    }

    //to avoid single digit

    h= h<10 ? "0"+h :h;
    m= m<10 ? "0"+m :m;
    s= s<10 ? "0"+s :s;

    hourElement.innerText=h;
    minuteElemet.innerText=m;
    secondElemet.innerText=s;
    ampmElement.innerText=ampm;

    setTimeout(()=>{

        updateClock();
    },1000)
}

updateClock()