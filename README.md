# SITIO

**Fecha:** 10 de junio de 2021

## Tabla de contenidos

- [SITIO](#sitio)
  - [Tabla de contenidos](#tabla-de-contenidos)
- [Introducción](#introducción)
  - [Tecnologías](#tecnologías)
- [Instalación](#instalación)
  - [Instalación en una máquina](#instalación-en-una-máquina)
  - [Detalle de directorios](#detalle-de-directorios)
- [Pseuda API](#pseuda-api)
  - [Tipos](#tipos)
    - [Tipo Agencia (agency)](#tipo-agencia-agency)
    - [Tipo Zona {zone}](#tipo-zona-zone)
    - [Tipo Modelo (model)](#tipo-modelo-model)
  - [Tipo Publicidad (advertisement)](#tipo-publicidad-advertisement)
  - [Detalle de las API](#detalle-de-las-api)
    - [Obtener datos para la pagina principal](#obtener-datos-para-la-pagina-principal)
    - [Obtener datos de un modelo por id](#obtener-datos-de-un-modelo-por-id)

# Introducción

El sitio se centra en la presentacion de modelos que ofrecen sus servicios en linea.

## Tecnologías

Utiliza las siguientes tecnologías y librerías para el front-end y backend:

- React JS
- Next JS
- Chakra UI

# Instalación

## Instalación en una máquina

1. Descarga el código fuente desde GitHub (previo permiso por el desarrollador), puedes descargarlo con el siguiente comando:

   ```
   git clone git@github.com:IsaGodoy/proyecto.git
   ```

2. Descarga e instala `nodeJS` en tu computador, lo puedes [descargar su página oficial para Windows ó Mac](https://nodejs.org/es/download/)
3. [Descarga VSCode](https://code.visualstudio.com/download) para visualizar el código fuente y correr el proyecto
4. Ejecuta VSCode, presiona `Ctrl + O` ó `Command + O` para seleccionar el directorio del proyecto
5. Creamos un archivo llamado `.env.example` y copiamos el contenido del archivo `.env.local`
6. Una vez seleccionado el proyecto presiona `Ctrl + J` ó `Command + J`, esto abrirá una terminal en la parte inferior de la pantalla
7. Copiamos el contenido del archivo `.env.local.example` en un archivo, en la raiz del proyecto, con el nombre en `.env.local` editamos con los valores que que sean los correctos
8. Nos posicionamos en la terminal e ingresamos el siguiente comando y esperamos a que termine
   ```
   npm install
   ```
9. Una vez termine el comando anterior ejecutamos el siguiente comando:
   ```
   npm run dev
   ```
10.
11. Abrimos nuestro navegador prefereido (recomendación abrir Chrome) y vamos a la siguiente dirección [http://localhost:3000](http://localhost:3000)

## Detalle de directorios

- `data`: pseudo base de datos que contiene la informacion del sitio como son: modelos, anuncios, top de modelos, agencias y zonas
- `pages`: contiene el enrutamiento de la aplicacion
- `public` : contiene los recursos publicos de la aplicación
- `services`: funcion para realizar llamadas al servidor para obtener los datos del sitio
- `theme`: archivos necesarios para los colores, tipografia, y espaciados del sitio
- `src`: contiene el código fuente de la aplicacion dividida en los subdirectorios
  - `components`: archivos de UI recurrentes en la aplicación
  - `constants`: constantes de la aplicacion
  - `nav`: componentes gráficos necesarios para la navegacion en la aplicación
  - `screens`: código de estructura de las paginas presentadas

# Pseuda API

El sitio al estar realizado con NextJS cuenta con un API para consumir los datos de esta. Los archivos de las API se encuentran en `/pages/api`

## Tipos

El API cuenta con los siguientes modelos:

### Tipo Agencia (agency)

```js
  {
      id: number | 101,  // --> No olvide que este numero debe coincidir con el agencyId del modelo
      name: string |'Agencia 1'
  },
```

### Tipo Zona {zone}

```js
  {
      id: number | 101,  // --> No olvide que este numero debe coincidir con el zoneId del modelo
      name: string |'Bogota'
  },
```

### Tipo Modelo (model)

```js
{
   id: number | 1,
   name: string | 'Johnnie Boyer',
   gender: string | 'Hombre',
   principalPhotoURL: string | 'https://miimagen.com/..../hola.jpg', // --> No omita esta propiedad pues es la imagen que se muestra en el home Y SIEMPRE DEBE SER VERTICAL EN MEDIDA DE LO POSIBLE DEBE SER DE 290x400px
   age: number | 23,
   hairColor: string | 'matrices',
   height: string | '167 cm',
   bodyMeasurements: string | '90-60-90',
   agencyId: number | 103, // ---> Debe coincidir con el id de la agencia
   zoneId: string | 203,
   category: string[] |  ['Hombres', 'Mujeres', 'Trans'],
   schedule: string |  'Lunes - Viernes de 9:00 - 11:00',

   phone: string | '+593876543212', // --> No olvide incluir el codigo de pais
   description: string |
     'Eius repellat ab. Dolorum officia itaque. Vero aut repellat aut.',
     // LAS IMAGENES EN MEDIDA DE LO POSIBLE DEBEN TENER LAS SIGUIENTES MEDIDAS
     // VERITCAL: 290x400px
     // HORIZONTAL: 600x396px
     // O en su defecto en una proporsicion similar
   photos: [
     {
       id: string | number | 'Christina',
       photoURL: string | 'https://miimagen.com/..../hola.jpg',
       isVertical: boolean | true  // --> TRUE SIEMPRE QUE LA IMAGEN SEA VERTICAL
     },
     {
       id: string | number |  'Reva',
       photoURL: string 'https://miimagen.com/..../hola.jpg',
       isVertical:boolean | true
     },
     {
       id: string | number | 'Frederick',
       photoURL: string |'https://miimagen.com/..../hola.jpg'
     },
     {
       id: string | number |  'Jessy',
       photoURL: string | 'https://miimagen.com/..../hola.jpg'
     },
   //   ...more photos
   ],
 },
```

## Tipo Publicidad (advertisement)

```js
 {
      id: number | 15320,
      url: string | 'https://paginademipublicidad.com', // --> opcional si no la requiere no la agregue
      imageURL: string | 'https://dummyimage.com/640x100.png',
},
```

## Detalle de las API

### Obtener datos para la pagina principal

```
GET /data-site;
```

El endpoint anterior se encuentra en `/pages/api/data-site.js` y retornara la siguiente informacion:

```js
    {
        zones: zones[],
        agencies: agency[],
        models: model[],
        top: {
            Hombre: model[],
            Mujer: model[],
            Trans: model[]
        },
        advertisements:{
            Hombre: advertisement[],
            Mujer: advertisement[],
            Trans: advertisement[]
        },
    }
```

### Obtener datos de un modelo por id

```bash
GET /models/[id];
```

El endpoint anterior se encuentra en `/pages/api/models/[id].js` y retornara la siguiente informacion:

```js
{
   id: number | 1,
   name: string | 'Johnnie Boyer',
   gender: string | 'Hombre',
   principalPhotoURL: string | 'https://miimagen.com/..../hola.jpg',
   age: number | 23,
   hairColor: string | 'matrices',
   height: string | '167 cm',
   bodyMeasurements: string | '90-60-90',
   agencyId: number | 103,
   zoneId: string | 203,
   category: string[] |  ['Hombres', 'Mujeres', 'Trans'],
   schedule: string |  'Lunes - Viernes de 9:00 - 11:00',
   phone: string | '+593876543212',
   description: string |
     'Eius repellat ab. Dolorum officia itaque. Vero aut repellat aut.',
   photos: [
     {
       id: string | number | 'Christina',
       photoURL: string | 'https://miimagen.com/..../hola.jpg',
       isVertical: boolean | true
     },
     {
       id: string | number |  'Reva',
       photoURL: string 'https://miimagen.com/..../hola.jpg',
       isVertical:boolean | true
     },
     {
       id: string | number | 'Frederick',
       photoURL: string |'https://miimagen.com/..../hola.jpg'
     },
     {
       id: string | number |  'Jessy',
       photoURL: string | 'https://miimagen.com/..../hola.jpg'
     },
   //   ...more photos
   ],
   zone: {
      id: number | 15320,
      url: string | 'https://paginademipublicidad.com',
      imageURL: string | 'https://dummyimage.com/640x100.png',
    },
    agency:{
      id: number | 101,
      name: string |'Agencia 1'
    },
 },
```
