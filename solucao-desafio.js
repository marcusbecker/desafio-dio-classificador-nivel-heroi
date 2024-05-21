// Declaração das variáveis
const titulo = 'Desafio Classificador de nível de Herói'
let nome = 'Guerreiro'
let xp = 0

// Exibir título
console.log(titulo)

// Loop para exibir os níveis
for (let i = 0; i < 8; ++i) {
  let nivel = ''
  if(xp > 10000){
    nivel = 'Radiante'
  }else if(xp > 9000){
    nivel = 'Imortal'    
  }else if(xp > 8000){
    nivel = 'Ascendente'
  }else if(xp > 7000){
    nivel = 'Platina'
  }else if(xp > 5000){
    nivel = 'Ouro'
  }else if(xp > 2000){
    nivel = 'Prata'
  }else if(xp > 1000){
    nivel = 'Bronze'
  }else{
    nivel = 'Ferro'
  }

  console.log(`O Herói de nome ${nome} ${i+1} está no nível de ${nivel}`)
  
  // Acima do nível Ouro aumenta o XP em mil, abaixo em 2 mil
  if(xp < 7000)
    xp += 2000
  else
    xp += 1000
}
