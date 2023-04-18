

alert("Bienvenido! Estoy aquí para ayudarte con tus gastos para así poder ahorrar :D")
const name = prompt("Cuál es tu nombre?")
alert(`Encantado ${name}! Te explico con qué vamos a lograr trabajar tus gastos: Su nombre es "Pareto" y es un principio estadístico que dicta que el 80 % de las consecuencias (gastos) son el resultado del 20 % de las causas (situaciones generales que te llevan a gastar).`)
alert("Ahora solo debes responder estas preguntas, es normal no tener una respuesta exacta, valores aproximados también nos sirven. También debo comentarte que los números que utilices no deben estar intercalados con puntos es decir, si quieres escribir 1.000 (mil) debes hacerlo de esta manera: 1000 (mil)")

// const salary = Number(prompt("¿cuánto ganas al mes?"))
// const objective = Number(prompt("¿cuánto te gustaría ahorrar?"))


// CATEGORIAS
const categorias={
    1: "Alimentacion",
    2: "Vivienda",
    3: "Transporte",
    4: "Entretenimiento",
    5: "Salud",
    6: "Educacion",
    7: "Ropa y Accesorios",
    8: "Tecnologia y Comunicacion",
    9: "Mascotas",
    10: "Regalos y Donaciones",
}

// CONSEJOS

const consejos={
    1: "Alimentación: Hacer una lista de compras y seguirla para así comprar solo lo necesario, cocinar en casa y, en caso de querer realizar una salida pautar dias para comer fuera (2 sábados al mes por ejemplo).",
    2: "Vivienda: Utilizar aplicaciones para facilitar la busqueda de casas o departamentos por zonas y asi poder encontrar el mejor precio, negociar promociones con tus proovedores de servicio o su competencia, mantener el microondas o electrodomesticos poco frecuentes y muy consumidores desenchufados, apagar la luz al retirarse de una habitación, entre otros.",
    3: "Transporte: Intentar reurrir al transporte publico, dividir gastos de transporte en auto llevando compañeros al trabajo, desplazarse caminando o en bicicleta si la distacia y el tiempo lo permiten.",
    4: "Entretenimiento: pautar que diás se realizará una salida recreativa (cine todos los 15 del mes), contratar servicios de streaming con ofertas e intentar compartirlas con familia o amigos para dividir gastos, acudir a noches gratuitas de museo o eventos en parques.",
    5: "Salud: Mantener un estilo de vida saludable para evitar gastos de atención médica, contratar un seguro médico para cubrir gran partes del gasto en situaciones de urgencia, utilizar medicamentos económicos reconocidos en lugar de marcas costosas.",
    6: "Educación: En la sitación de la educación propia se aconseja buscar opciones de enseñanza gratuitas como instituciones publicas o cursos en línea, utilizar libros prestados, de la biblióteca o en formato pdf, buscar obtener becas completas o de descuento como una ayuda.",
    7: "Ropa y Accesorios: No comprar ropa y accesorios de marcas exclusivas, acudir a la de segunda mano, en promoción o en tiendas económicas, restaurar o adaptar ropa antigua.",
    8: "Tecnología y Comunicación: Siempre mantenerse al tanto y comunicarte con tus proveedores para acceder a las mejores promociones y, además compará esas ofertas con las de su competencia.",
    9: "Mascotas: Comprar alimentos para mascotas buenos pero baratos, calidad-precio, mantenerlos en una dieta basada en comida cocinada por tí mismo para abaratar costos, además de ser más sano, hacer revisiones frecuentes de vacunas y el estado de tu mascota en veterinarias con buena reputacion pero economicas para asi evitar gastos altos por enfermedad a futuro.",
    10: "Regalos y Donaciones: Hacer manualidades, llevan más tiempo pero es más económico, entretenido y suele gustar más. Con las donaciones igual, producotos como mercadería o ropa usada pero en buen estado también ayuda, no solo la ayuda monetaria."
}

// GASTOS

const gastos={
    1: Number(prompt("¿Cúanto gastas al mes en comida? También incluí los gastos relacionados con la compra de alimentos como bebidas alcoholicas, comida por delivery, restaurantes, etc.")),
    2: Number(prompt("¿Cúanto gastas al mes en vivienda? También incluí los gastos relacionados con la vivienda, como las cuentas, mantenimiento/reparación o remodelación del hogar.")),
    3: Number(prompt("¿Cúanto gastas al mes en transporte? Tené en cuenta que si tus gastos son de un auto propio debes contar cosas como las cuotas a pagar, su mantenimiento, seguro, pago por estacionamiento, etc.")),
    4: Number(prompt("¿Cúanto gastas al mes en entretenimiento? También incluí los gastos de entretenimiento a fúturo como un plan de un viaje, etc.")),
    5: Number(prompt("¿Cúanto gastas al mes en salud? También incluí los gastos relacionados con la atención médica, como seguros de salud, etc.")),
    6: Number(prompt("¿Cúanto gastas al mes en educación? También incluí los gastos relacionados con la educación, como el pago de matrícula, libros, útiles escolares, cuotas de exámenes, actividades extracurriculares, entre otros.")),
    7: Number(prompt("¿Cúanto gastas al mes en ropa y accesorios? Incluí, por ejemplo, la compra de nuevas prendas asi como tambien el pago de unas zapatillas compradas anteriormente pero retiradas en cuotas.")),
    8: Number(prompt("¿Cúanto gastas al mes en tecnología y comunicación? También incluí los gastos relacionados con los dispositivos electrónicos, como el servicio de internet, etc.")),
    9: Number(prompt("Si es que tenés: ¿Cúanto gastas al mes en tus mascotas?  También incluí los gastos relacionados con las mascotas, como el cuidado veterinario, juguetes, entre otros.")),
    10: Number(prompt("¿Cúanto gastas al mes en regalos y donaciones?  También incluí los gastos relacionados con la compra de regalos como el gasto de materiales si el regalo es una manualidad."))
}

console.log(gastos[1])

// const gastos={
//     1: 250,
//     2: 750,
//     3: 66,
//     4: 6, 
//     5: "t",
//     6: 32,
//     7: 0,
//     8: 30,
//     9: 100,
//     10: 2,
// }

// Veo que los datos cargados solo sean números
let todoOk=true
while(todoOk){
    todoOk=false
    for (i=1; i<=10; ++i){
        if (isNaN(gastos[i])){
            gastos[i]=Number(prompt(`Por favor vuelve a introducir los gastos de: ${categorias[i]} muchas gracias!`))
            todoOk=true
        }
    }
}

// TOTAL
let total = 0
for (let i=1; i<=10; ++i){
    total = total + gastos[i]
}

function ordenar(){
    let ordenado=false
    while (ordenado==false){
        ordenado=true
        for (let i=2; i<=10; ++i){
            let g=gastos[i-1]
            let c=categorias[i-1]
            let con=consejos[i-1]
            if (gastos[i]>gastos[i-1]){
            gastos[i-1]=gastos[i]
            categorias[i-1]=categorias[i]
            consejos[i-1]=consejos[i]
            gastos[i]=g
            categorias[i]=c
            consejos[i]=con
            ordenado=false
            }
        }
    }
}

ordenar()



let ochentaPorciento = total*0.8

// Se identifican las categorías que en total suman el 80% y en las respuestas se va escribiendo cada categoría.

let suma=0
let respuesta1= "Debes disminuir tus gastos en esta categoría: "
let respuesta2= "Aquí tienes algunos consejos para mejorar en ello: "
for (let i=1;suma<ochentaPorciento;++i){
    suma=suma + gastos[i]
    respuesta1 = `${respuesta1}\n-${categorias[i]}`
    respuesta2 = `${respuesta2}\n-${consejos[i]}`
}

// Se realiza la operación
let porcentaje = 100 * suma / total
respuesta1 = `${respuesta1}\nEstas categorías ocupan un ${porcentaje}% de todos tus gastos.`

// RESPUESTA
alert(respuesta1)
alert(respuesta2)

// FINAL
alert(`Espero haberte ayudado ${name}! Y espero que te haya gustado participar como a mí crear esto!`)


