"use strict";

//1* Решите квадратное уравнение ax2 + bx + c = 0 
//(пользователь вводит коэф. a,b,c)


function solveEquation(A,B,C)
{
    const Discriminant = B**2-4*A*C;
    let roots=null;

    if(Discriminant>0)
    {
        roots = {
            root_1:-B+Math.sqrt(Discriminant)/(2*A),
            root_2:-B-Math.sqrt(Discriminant)/(2*A),
        }
    }
    else{
        if(Discriminant===0){
            roots = {
                root_1:-B/(2*A),
                root_2:this.root_1,
            }
        }
    }
    return roots;
}

function program(){
    const A = parseInt(prompt("Enter A: "));
    const B = parseInt(prompt("Enter B: "));
    const C = parseInt(prompt("Enter C: "));

    const roots = solveEquation(A,B,C);
    alert(`root_1 = ${roots.root_1}, root_2 = ${roots.root_2} `);
}

program();