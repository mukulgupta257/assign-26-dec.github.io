var d=0;
document.getElementById('clicked').addEventListener('click',_=>{
    if(d==0){
        document.getElementById('content-grid').style.display='none';
        document.getElementById('cont-list').style.display='flex';
        d=1;
        console.log(d);
    }
    else if(d=='1'){
        document.getElementById('content-grid').style.display='grid';
        document.getElementById('cont-list').style.display='none';
        d=0;
        console.log(d)
    }
})