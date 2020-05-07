    var scoreusr=0;
    var scorecomp=0;
document.querySelector(".btn1").addEventListener("click",function ()
{    
    scoreusr=0;
    scorecomp=0;
     var key=rnd(1);
     document.querySelectorAll(".imgc")[0].setAttribute("src","images/"+key+".png");
     key=rnd(1);
     document.querySelectorAll(".imgc")[1].setAttribute("src","images/"+key+".png");
     document.querySelector(".compscore").textContent="Score: "+scorecomp;
     key=rnd(2)
     document.querySelectorAll(".img")[2].setAttribute("src","images/"+key+".png");
     document.querySelector(".userscore").textContent="Score: "+scoreusr;
     document.querySelector(".btn3").addEventListener("click",function wrk(){
     comp();
     document.querySelector(".btn3").removeEventListener("click",wrk);
     });
        document.querySelector(".btn2").addEventListener("click",function work(){
        key=rnd(1);
        document.querySelectorAll(".imgc")[2].setAttribute("src","images/"+key+".png");
        document.querySelector(".compscore").textContent="Score: "+scorecomp;
        comp();
        document.querySelector(".btn2").removeEventListener("click",work);
        
     });

});
function rnd(usr)
{
    
    var a=Math.random()*13;
    a=Math.ceil(a);
    var b=Math.random()*4;
    b=Math.floor(b);
    var c=["S","C","H","D"];
    if(usr==1)
    {    if(a>10)
        {
            scorecomp+=10;
        }
        else
        {
            scorecomp+=a;
        }
    }
    else
    {
        if(a>10)
        {
            scoreusr+=10;
        }
        else
        {
            scoreusr+=a;
        }
    }
    var d=a+c[b];
    return d;
}

function comp()
{
    if(scorecomp>21)
        {
            document.querySelector("h1").textContent="Busted!!!"
        setTimeout(function(){window.location.reload()},4000);
        }
        else{
        key=rnd(2)
        document.querySelectorAll(".img")[1].setAttribute("src","images/"+key+".png");
        document.querySelector(".userscore").textContent="Score: "+scoreusr;
        if(scoreusr>scorecomp)
        {
            document.querySelector("h1").textContent="You Lost!!";
            setTimeout(function(){window.location.reload()},4000);
        }
        else
        {
            key=rnd(2)
            document.querySelectorAll(".img")[0].setAttribute("src","images/"+key+".png");
            document.querySelector(".userscore").textContent="Score: "+scoreusr;
            if(scoreusr>21)
            {
                document.querySelector("h1").textContent="You Won!!";
                setTimeout(function(){window.location.reload()},4000);
            }
            else if(scoreusr<scorecomp)
            {
                document.querySelector("h1").textContent="You Won!!";
                setTimeout(function(){window.location.reload()},4000);
            }
            else if(scoreusr>scorecomp)
            {
                document.querySelector("h1").textContent="You Lost!!";
            setTimeout(function(){window.location.reload()},4000);
            }
            else{
                document.querySelector("h1").textContent="Draw!!";
                setTimeout(function(){window.location.reload()},4000);
            }
        }
        }

}