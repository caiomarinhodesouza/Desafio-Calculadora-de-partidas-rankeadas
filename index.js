//Calculadora de partidas Rankeadas:

function sub (vit,der) {
 
    let result = vit - der
     
       return result  }
  
  let saldorank = sub(101,10)
    console.log(saldorank)
  
  if (saldorank < 10) {
    console.log("O Herói tem o Saldo de: "+saldorank," está no nível de FERRO")
  }
  if (saldorank >= 10 && saldorank <= 20) {
    console.log("O Herói tem o Saldo de: "+saldorank," está no nível de BRONZE")
  }
  if (saldorank >= 21 && saldorank <= 50) {
    console.log("O Herói tem o Saldo de: "+saldorank," está no nível de PRATA")
  }
  if (saldorank >= 51 && saldorank <= 80) {
    console.log("O Herói tem o Saldo de: "+saldorank," está no nível de OURO")
  }
  if (saldorank >= 81 && saldorank <= 90) {
    console.log("O Herói tem o Saldo de: "+saldorank," está no nível de DIAMANTE")
  }
  if (saldorank >= 91 && saldorank <= 100) {
    console.log("O Herói tem o Saldo de: "+saldorank," está no nível de LENDÁRIO")
  }