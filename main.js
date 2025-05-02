//SNACK 1
//Crea una funzione getPostTitle(id) che accetta un id 
// e restituisce una Promise che recupera il titolo di un post dal link 
// https://dummyjson.com/posts/{id}


function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => resolve(data.title))
            .catch(reject)
    })
    return promessa
}

getPostTitle(1)
    .then(data => console.log('Titolo:', data))
    .catch(error => console.log(error))





//SNACK 2
//Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, 
// genera un numero casuale tra 1 e 6. 
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.


const lancioDado = () => {
    return new Promise((resolve, reject) => {
        console.log('Sto per lanciare il dado')
        setTimeout(() => {
            const dadoIncastrato = Math.random < 0.2;
            if (dadoIncastrato) {
                reject('Dado incatrato. Riprovare!')
            } else {
                const dadoNumber = Math.floor(Math.random() * 6) + 1;
                resolve(dadoNumber)
            }
        }, 3000)
    })
}


lancioDado()
    .then(data => console.log('risultato dado :', data))
    .catch(error => console.error(error))