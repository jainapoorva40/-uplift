/*document.querySelector('.get-jokes').addEventListener('click',getJokes);
function getJokes(e)
{
    const number=document.getElementById('number').value;
    const xhr=new XMLHttpRequest();

    //console.log('Click');
    //e.preventDefault();
    
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if(this.status==200)
        {
            let output=``;
            const response=JSON.parse(this.responseText);
            if(response.type=='success')
            {
            response.value.forEach(function(joke){
                output+=`<li>${joke.joke}</li>`;
            })
            }
            else
            {
                output+=`<li>Something went wrong</li>`
            }
        document.querySelector('.jokes').innerHTML=output;
}}
xhr.send();
//console.log('Click');
e.preventDefault();
}*/

document.querySelector('.get-jokes').addEventListener('click',getJokes);
function getJokes(e)
{
const hello=document.getElementById('number').value;
const xhr=new XMLHttpRequest();

xhr.open('GET',`http://api.icndb.com/jokes/random/${hello}`,true);
xhr.onload=function(){
    if(this.status==200){
        let output=``;
        const response=JSON.parse(this.responseText);
        //console.log(response);
        if(response.type=='success')
        {
            response.value.forEach(function(joke){
                output+=`<li>${joke.joke}</li>`;
            })
        }
        else
        {
            output+=`<li>SOMETHING WENT WRONG</li>`
        }
        document.querySelector('.jokes').innerHTML=output;
    }
}
xhr.send();
//console.log(number);
e.preventDefault();
}