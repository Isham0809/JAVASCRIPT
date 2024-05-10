/*
 *****
 *****
 *****
 *****
 *****
 */

let size = 5
let pattern = ""
for(i=0; i<size; i++)
{
    for(j=0;j<size;j++)
    {
        pattern +="*"
    }
    pattern += "\n"
}
console.log(pattern)

/*
*****
*   *
*   *
*   *
*****
*/
let size1 = 5
let pattern1 = ""
for(i=0; i<=size1; i++)
{
    for(j=0;j<=size1;j++)
    {
        if (i == 0 || i == size1 || j == 0 || j == size1){
            pattern1 +="*"
        }else {
            pattern1 +=" "
        }
    }
    pattern1 += "\n"
}
console.log(pattern1)

/*
 *
 **
 ***
 ****
 *****
 */

 let size3 = 5
 let pattern3 = ""
 for(i=0; i<size3; i++)
 {
     for(j=0;j<=i;j++)
     {
         pattern3 +="*"
     }
     pattern3 += "\n"
 }
 console.log(pattern3)
 
/*
    *
   **
  ***
 ****
*****
*/

let size4 = 5
let pattern4 = ""
for(let i = 1 ; i<=size4 ;i++)
  {
     pattern4 =''
    for(let j = 1 ; j<=size4-i ; j++)
      {
        pattern4 += ' '
      }
    for(let k = 1 ; k<=i ; k++)
      {
        pattern4 += '*'
      }
    console.log(pattern4)
  }

/*
    *
   * * 
  * * *
 * * * *
* * * * *  
*/
 
let size5 = 5
let pattern5 = ""
  
for(let i = 1 ; i<=size5 ;i++)
{
  pattern5 =''
  for(let j = 1 ; j<=size5-i ; j++)
  {
    pattern5 += ' '
  }
  for(let k = 0 ; k<=i-1 ; k++)
  {
    pattern5 += '*' + " "
  }
  console.log(pattern5)
}

/*
    *
   * * 
  * * *
 * * * *
* * * * *  
 * * * *
  * * *
   * *
    *
*/
 
var size6 = 5
var pattern6 = ''
  
for(let i = 1 ; i<=size6 ;i++)
{
  pattern6 =''
  for(let j = 1 ; j<=size6-i ; j++)
  {
    pattern6 += ' '
  }
  for(let k = 1 ; k<=i ; k++)
  {
    pattern6 += '*' + " "
  }
  console.log(pattern6)
}
for(let i=1;i<=size6-1;i++)
  {
    pattern6 =''
    for(let j = 1 ; j<=i ; j++)
    {
      pattern6 += ' '
    }
    for(let k = 1 ; k<=size6-i ; k++)
    {
      pattern6 += '*' + " "
    }
    console.log(pattern6)
  }