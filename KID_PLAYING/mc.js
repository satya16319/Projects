var pos=0,test,test_status,question,chA,chB,chC,choice,correct=0,u,u1,ranpos,chD;
var arr=new Array(10);
for(var i=0;i<arr.length;i++)
 arr[i]=new Array(6);
 for(var i=0;i<arr.length;i++)
 {
     
         u=Math.floor(Math.random()*1000);
         u1=Math.floor(Math.random()*1000);
         arr[i][0]=i+1+".What is "+u + " + "+u1+"?";
         for(var j=1;j<=4;j++)
         {
             arr[i][j]=Math.floor(Math.random()*(u+u1+10));
             while(arr[i][j]==u+u1)
             arr[i][j]=Math.floor(Math.random()*(u+u1+10));

         }
          ranpos=Math.floor(Math.random()*4)
          
            arr[i][ranpos+1]=u+u1;
            if(ranpos==0)
            arr[i][5]="A";
            else if(ranpos==1)
            arr[i][5]="B";
            else if(ranpos==2)
            arr[i][5]="C";
            else
            arr[i][5]="D"
            
 }

function _(x)
{
    return document.getElementById(x);
}
function renderQuestion()
{
    test=_("test");
    if(pos>=arr.length)
    {
        test.innerHTML="<h2>You got  " +correct+" of "+arr.length+" questions correct</h2>";
        _("test_status".innerHTML="Test Completed");
        return false;
    }
    // _("test_status").innerHTML="Question "+(pos+1)+" of "+arr.length;
    question=arr[pos][0];
    chA=arr[pos][1];
    chB=arr[pos][2];
    chC=arr[pos][3];
    chD=arr[pos][4];
    test.innerHTML="<h3>"+question+"</h3>";
    test.innerHTML+="<input type='radio' name='choice' value='A'>"+chA+"<br>";
    test.innerHTML+="<input type='radio' name='choice' value='B'>"+chB+"<br>";
    test.innerHTML+="<input type='radio' name='choice' value='C'>"+chC+"<br>";
    test.innerHTML+="<input type='radio' name='choice' value='D'>"+chD+"<br><br>";

    test.innerHTML+="<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer()
{
    choices=document.getElementsByName("choice");
    for(var i=0;i<choices.length;i++)
    {
        if(choices[i].checked)
        {
            choice=choices[i].value;
        }
    }
    if(choice==arr[pos][5])
    {
    correct++;
    //alert("Right Answer");
    pos++;
    renderQuestion();
    }
    else
    alert("Wrong Answer");
    // pos++;
    // renderQuestion();
    
}
window.addEventListener("load",renderQuestion,false);

