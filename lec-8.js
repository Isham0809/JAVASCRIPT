function grade(){
    let score = document.getElementById('score').value
    let grade = ''

    if(score>=90)
    {
      grade='A'
      
    }else{
       if(score>=80)
       {
         grade='B'
       }else{
         grade = 'C'
       }
      
    }

    document.getElementById('grade').innerText = "Grade : " + grade
}

function quadrant(){
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    
    let quadrant = ''

    if(x>0)
    { 
        if(y>0)
        {
            quadrant = '1'
        }else{
            quadrant = '4'
        }
    
    }else if (x<0)
    {
        if(y>0)
        {
            quadrant = '2'
        }else{
            quadrant = '3'
        }
    }else{
        if(y!==0)
        {
            quadrant = 'y axis'
        }else{
            quadrant = 'origin'
        }
    }
    document.getElementById('quadrant').innerText = "quadrant : " + quadrant
}
