const navRespo = document.querySelector('.dashboard-list');
const toggleRespo = document.querySelector('.dashboard-img')

toggleRespo.addEventListener('click', () => {
    navRespo.classList.toggle('active')
})

const listaDeCartoes = [
    {
        titulo: 'Koenigsegg',
        subdesc: 'Sport',
        imagem: "../image/image_catalogo/car1.png",
        litros: '90L',
        cambio: 'Manual',
        pessoas: '2 Pessoas',
        valor: 'R$99.00'
    },
    {
        titulo: 'Nissan GTR',
        subdesc: 'Sport',
        imagem: "../image/image_catalogo/car2.png",
        litros: '80L',
        cambio: 'Manual',
        pessoas: '4 Pessoas',
        valor: 'R$80.00'
    },
    {
        titulo: 'Rolls Royce',
        subdesc: 'Sport Sedan',
        imagem: "../image/image_catalogo/car3.png",
        litros: '90L',
        cambio: 'Manual',
        pessoas: '5 Pessoas',
        valor: 'R$120.00'
    },
    {
        titulo: 'Nissan GTR',
        subdesc: 'Sport',
        imagem: "../image/image_catalogo/car2.png",
        litros: '80L',
        cambio: 'Manual',
        pessoas: '4 Pessoas',
        valor: 'R$80.00'
    }
]

const cartoesHtml = listaDeCartoes.map(item => 
`<div class="carros">
    <h1>${item.titulo}</h1>
    <p>${item.subdesc}</p>
    <img src="${item.imagem}" alt="${item.titulo}"></img>
    <div class="carros-infos">
        <p>${item.litros}</p>
        <p>${item.cambio}</p>
        <p>${item.pessoas}</p>
    </div>
    <div class="carros-alugar">
        <p>${item.valor}/Dia</p>
        <a href="pagamento.html">Alugar/Comprar</a>
    </div>
</div>`).join('')

const cartoes = document.getElementById('container-de-cartoes')
cartoes.innerHTML = cartoesHtml


const listaDeClassicos = [
    {
        titulo: 'All New Rush',
        subdesc: 'SUV',
        imagem: "../image/image_catalogo/car4.png",
        litros: '100L',
        cambio: 'Automatico',
        pessoas: '6 Pessoas',
        valor: 'R$75.00'
    },
    {
        titulo: 'CR-V',
        subdesc: 'SUV',
        imagem: "../image/image_catalogo/car5.png",
        litros: '80L',
        cambio: 'Automatico',
        pessoas: '6 Pessoas',
        valor: 'R$65.00'
    },
    {
        titulo: 'New Cross',
        subdesc: 'SUV',
        imagem: "../image/image_catalogo/car6.png",
        litros: '80L',
        cambio: 'Automatico',
        pessoas: '5 Pessoas',
        valor: 'R$80.00'
    },
    {
        titulo: 'GLA 200',
        subdesc: 'SUV Sport',
        imagem: "../image/image_catalogo/car7.png",
        litros: '50L',
        cambio: 'Automatico',
        pessoas: '5 Pessoas',
        valor: 'R$85.00'
    },
    {
        titulo: 'BYD Exclusive',
        subdesc: 'Hatchback',
        imagem: "../image/image_catalogo/car8.png",
        litros: '70KW',
        cambio: 'Automatico',
        pessoas: '4 Pessoas',
        valor: 'R$65.00'
    },
    {
        titulo: 'New BYD',
        subdesc: 'SUV',
        imagem: "../image/image_catalogo/car9.png",
        litros: '90KW',
        cambio: 'Automatico',
        pessoas: '5 Pessoas',
        valor: 'R$55.00'
    },
    {
        titulo: 'Pajero',
        subdesc: 'SUV',
        imagem: "../image/image_catalogo/car5.png",
        litros: '50L',
        cambio: 'Automatico',
        pessoas: '6 Pessoas',
        valor: 'R$85.00'
    },
    {
        titulo: 'HAVAL',
        subdesc: 'SUV',
        imagem: "../image/image_catalogo/car8.png",
        litros: '90KW',
        cambio: 'Automatico',
        pessoas: '6 Pessoas',
        valor: 'R$87.00'
    },
]

const classicos = listaDeClassicos.map(item => `
<div class="carros">
    <h1>${item.titulo}</h1>
    <p>${item.subdesc}</p>
    <img src="${item.imagem}" alt="${item.titulo}"></img>
    <div class="carros-infos">
        <p>${item.litros}</p>
        <p>${item.cambio}</p>
        <p>${item.pessoas}</p>
    </div>
    <div class="carros-alugar">
        <p>${item.valor}/Dia</p>
        <a href="pagamento.html">Alugar/Comprar</a>
    </div>
</div>`).join('')
const listaClassicos = document.getElementById('classicos-carros')
listaClassicos.innerHTML = classicos