<template>
    <v-snackbar v-model="open" top :timeout="10000">
        Sabias que... {{ text }}
        <v-btn color="pink" flat @click="open = false">
            X
        </v-btn>
    </v-snackbar>
</template>


<script lang="ts">
    import Vue from 'vue'
    import {
        setInterval
    } from 'timers';
    export default Vue.extend({
        name: 'curiosities',
        mounted() {
            setInterval(() => {
                this.open = true;
                this.text = this.phrases[Math.floor(Math.random()*this.phrases.length)] 
            }, 20000)
        },
        data() {
            return {
                open: false,
                text: '',
                phrases: [
                    "El Vaticano posee la cantidad de dinero suficiente para acabar con la pobreza mundial dos veces",
                    "Los caballitos de mar elijen una pareja durante to… permanecen solos por un tiempo y mueren también!",
                    "Los humanos y los delfines son las únicas especies que practican sexo por placer.",
                    "Las semillas de la manzana contienen cianuro, comerte 40 o 50 podrían matarte.",
                    "Si le quitas los bigotes a un gato, éste no puede …n y por lo tanto pierde el equilibrio y se cae...",
                    "Un koala puede vivir toda su vida sin tomar agua",
                    "Thomas Alva Edison, el inventor de la bombilla eléctrica, le temía a la oscuridad",
                    "Los escorpiones, son los únicos que se suicidan, l…iempre son ellos los que terminan con su vida....",
                    "Si divides el número de abejas hembras por el de m…mpre obtendrás el mismo número, PI. 3,14159265...",
                    "Los ojos de un hámster pueden caerse si lo cuelgan con la cabeza para abajo",
                    "Los peces chicos no se aburren en las peceras porq…o dura dos minutos y es como si volvieran a nacer",
                    "Si estornudas tu corazón se detiene un 1 milisegun…a desgarrar la carótida o sufrir daños cerebrales",
                    "El león, el animal de mayor actividad sexual del m…de copular con la misma hembra cien veces al día.",
                    "Una persona morirá más rápido por no dormir que po…in sueño, y puede estar varias semanas sin comer.",
                    "Si metes una Coca Light en un recipiente con agua,…i lo haces con una de Coca-Cola normal, se hunde.",
                    "Las primeras palmeras crecieron en el Polo Norte",
                    "Los chimpances, orangutanes, delfines, elefantes y…es capaces de reconocerse a sí misma en un espejo",
                    "Alex Mitchell, un albañil de 50 años de edad de Ki…tchell finalmente se derrumbo en el sofá y murió.",
                    "Los antiguos romanos cuando tenían que decir la ve…a antigua costumbre procede la palabra testificar",
                    "Miguel de Cervantes Saavedra y William Shakespeare…tivamente; ambos murieron el 23 de abril de 1616…",
                    "Los mosquitos tienen dientes. (47 dientes)",
                    "Cuando un niño termina la educación primaria ha vi…tos y 10.000 actos de violencia en la televisión.",
                    "Si pones un huevo en medio de dos celulares lograras q se cocine en aproximadamente 62 minutos",
                    "Desde que nacemos nuestros ojos siempre son del mismo tamaño",
                    "Una gota de petróleo es capaz de convertir 25 litros de agua en no potable.",
                    "El músculo más potente del cuerpo humano es la lengua.",
                    "En Bangladesh,los niños de 15 años pueden ser encarcelados por hacer trampa en sus exámenes finales",
                    "Los delfines duermen con un ojo abierto.",
                    "Cada mes que comienza en Domingo tiene un Viernes …ada mes que comienza en Jueves tiene un Martes 13",
                    "En 1982 se sacó a la venta un juego en Estados Uni… casa se producían sucesos... (continuar leyendo)",
                    "En la antigua Inglaterra la gente no podía tener s…debían colgar afuera de su... (continuar leyendo)",
                    "El material más resistente creado por la naturaleza es la tela de araña.",
                    "Si por alguna razón el sol dejara de emitir luz, e…ra tardaríamos 8 minutos en darnos cuenta de esto",
                    "Hipopomonstrosesquipedalifobia miedo a las palabras largas",
                    "Los osos polares son zurdos.",
                    "Si tienes comezón en la garganta ráscate el oído, …os sufran un espasmo, así aliviando la comezón...",
                    "En la vida de los hipocampos son los machos los que llevan los embarazos",
                    "Un metro cuadrado de césped produce suficiente oxigeno para una persona por todo el año",
                    "La imagen más reconocida a nivel mundial, es la im…brerito con estrella, mirando hacia el horizonte.",
                    "La memoria del pez dorado dura 3 segundos",
                    "La nariz tiene el mismo largo que la frente",
                    "En 2008 en un programa de Disney Channel llamado Manny Manitas colaron pornografia",
                    "Cada rey de las cartas representa a un gran rey de… Corazones: Carlomagno. - Diamantes: Julio César.",
                    "Sólo existen tres animales con lengua azul: el per…Chow Chow, el lagarto lengua-azul y el oso negro.",
                    "Los búlgaros dicen 'sí' moviendo la cabeza de lado… lado, y dicen 'no' moviéndola de arriba a abajo.",
                    "El yoyo primero se uso como arma en Asia",
                    "Acetylseryltyrosylserylisoleucylthreonylserylproly…inylglutaminylphenylalanyl... (continuar leyendo)",
                    "Un gramo de oro se puede expandir hasta 20km.",
                    "Papa Noel antes vestía de verde y no de rojo",
                    "Golpearte la cabeza contra la pared consume 150 calorías por hora",
                    "La sal tiene más de 10000 usos",
                    "La base de la Gran Pirámide de Egipto equivale en tamaño a 10 campos de fútbol.",
                    "En París hay un Mc Donald's cuya famosísima letra …dicen que el color amarillo se veía muy corriente",
                    "Si pusiéramos una al lado de la otra todas las muñ…hasta la actualidad daríamos dos vueltas al mundo",
                    "En Finlandia se prohibieron los cómics del pato Donald porque no tenía pantalones",
                    "El primer minuto de silencio de la historia duró dos minutos",
                    "Antes de la Segunda Guerra Mundial, en el director…ers. Para el final de la guerra no había ninguno.",
                    "En 1980 en un hospital de Las Vegas se suspendiero…or apostar a qué hora iban a morir los pacientes.",
                    "En 1879 fue introducida en Estados Unidos una sust…para tratar la adicción a la morfina: la cocaína.",
                    "Cada vez que Beethoven se sentaba a escribir música, se ponía agua fría sobre la cabeza.",
                    "La distancia con los brazos y las manos estiradas …o índice al otro, es tu altura (de pies a cabeza)",
                    "En el momento que el agua esta hirviendo en un rec…ndo del recipiente no esta caliente....solo tibio",
                    "En el fondo del mar hay un pez que tiene los dientes tan grandes que no puede cerrar la boca",
                    "Aunque las hormigas son conocidas por trabajar en …rruptos, lo que las hace similares al ser humano.",
                    "Un estornudo viaja en tu boca a más de 100 Km/hr, …antener los parpados abiertos mientras estornuda.",
                    "Microsoft gasta más atendiendo llamadas de sus usuarios con problemas que produciendo sus programas.",
                    "La temperatura más alta registrada en el mundo ha … termómetro llego a los 136.4 Fahrenheit. (58º C)",
                    "La letra J, es la única letra que no aparece en la tabla periódica.",
                    "La fecha en las botellas de vino es la fecha en qu…y no es la fecha en que fue embotellado tal vino.",
                    "Hay un millón de insectos por cada persona.",
                    "Si gritas durante 8 años, 7 meses y 6 días...gener…energía suficiente para calentar una taza de café",
                    "La cucaracha puede vivir nueve días sin su cabeza, antes de morir de hambre.",
                    "El 'miembro' más grande del mundo animal es el de … llegar a medir más que un humano promedio (alto)",
                    "La gente rubia tiene más pelo que la gente de pelo oscuro.",
                    "100 tazas de café tomadas en un lapso de cuatro horas técnicamente pueden causar la muerte.",
                    "Si te truenas el cuello cada 3 horas durante 1 mes…ilidad suficiente como para poder lamerte el codo",
                    "En 1997, las líneas aéreas americanas se ahorraron… con solo eliminar una aceituna de cada ensalada.",
                    "El más rápido en el acto sexual el chimpancé (Pan … en 3 segundos. Le sigue el ratón con 5 segundos.",
                    "El alfabeto más largo del mundo es el de Camboya, tiene 74 letras",
                    "Los testículos de un hombre fabrican 10 millones d…te para repoblar todo el planeta en sólo 6 meses!",
                    "La pipi de gato se ve a la luz ultravioleta.",
                    "En Alemania del siglo XVIII, la sangre menstrual d… se añadía como afrodisíaco en comidas y bebidas.",
                    "Un dentista invento la galleta de la fortuna",
                    "El término 'poner los cuernos ' se debe a que en l…ara que se supiera que ahí... (continuar leyendo)",
                    "Los murciélagos siempre dan la vuelta a la izquierda al salir de una cueva.",
                    "El vuelo más largo que ha hecho una gallina es de 13 segundos",
                    "El pintor Vincent Van Gogh vendió solamente una pintura cuando vivía: Red Vineyard at Arles",
                    "Un kilo de patatas fritas cuesta 200 veces lo que vale un kilo de patata cruda...",
                    "Los cocodrilos no pueden sacar la lengua",
                    "El horno de microondas surgió cuando un investigad…ían derretido el chocolate que tenía en la bolsa.",
                    "La palabra mafia viene de dialecto italiano de la …lla' si ven sus siglas se forma la palabra mafia.",
                    "El olor más desagradable al que han llegado los ex…ción, y que en estado puro... (continuar leyendo)",
                    "Hexakoisiohexekontahexefobia miedo al 666",
                    "Las orejas humanas crecen hasta una edad muy avanzada, aunque lo hacen muy lentamente",
                    "La letra Q es la única que no aparece en ningún estado de Norteamérica",
                    "El 'hombre del año' en 1938 según la revista Time era Adolfo Hitler",
                    "Una persona puede llenar una bañera por día con el sudor y la saliva",
                    "La nuez moscada es extremadamente venenosa si es inyectada en forma intravenosa.",
                    "El 23% de las copias en las fotocopiadoras es porque personas se sientan y se fotocopian las nalgas",
                    "El besugo tiene el miembro 1,5 veces mas grande que su cuerpo"
                ]
            }
        }
    })
</script>
