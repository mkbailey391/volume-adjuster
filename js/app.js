console.log('JS loaded')

function volumeChange(){
    let input=document.getElementById('start');
    input.addEventListener('change', function(elem){
    document.getElementById('volume-level').innerHTML=this.value;
    })
}
volumeChange();