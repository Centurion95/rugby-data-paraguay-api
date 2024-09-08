# Rugby Data Paraguay - Backend

This project showcases the results of rugby matches within my country through a dynamic web platform. Built as a personal endeavor, the website is crafted using React for the frontend and NodeJS with Express for the backend. The data is stored in a MongoDB database, and the entire system is hosted in the cloud.

The platform offers an intuitive user interface designed in React, allowing visitors to seamlessly navigate and explore detailed match results, scores, team statistics, and historical data. Leveraging NodeJS and Express, the backend efficiently manages data retrieval and processing to ensure a responsive and reliable user experience.

By utilizing MongoDB, the project maintains a scalable and adaptable database structure, enabling easy storage and retrieval of match-related information. This cloud-hosted solution ensures accessibility and availability from anywhere, enhancing the platform's reach and usability.

Through this project, I aim to demonstrate my skills in full-stack development, utilizing modern technologies to present comprehensive rugby match data in an engaging and informative manner.


### Visit the website: https://rugby-data-paraguay.vercel.app

#### Frontend project: https://github.com/Centurion95/rugby-data-paraguay

#### Backend project: https://github.com/Centurion95/rugby-data-paraguay-api

### Author: [Rodrigo Centurión][1]
[1]: https://www.linkedin.com/in/rcenturion95



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Versiones](#versiones)

## Installation

1. Clone the repository:
```
git clone https://github.com/Centurion95/rugby-data-paraguay-api
```

2. Install dependencies:
```
cd rugby-data-paraguay-api
npm install
```

3. Set up the environment variables:
- Create a `.env` file based on the `.env.example` file.
- Update the environment variables with your own values.

## Usage

1. Start the server:
```
npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Versiones (desc)

#### rc95 08/09/2024 02:04
- Cambios en el README

#### rc95 - 09/11/2023 10:40
- Se agrega la sección VISITAS

#### rc95 - 08/09/2023 21:37
- Se implementa `order_number` en `tournament`

#### rc95 - 27/08/2023 04:05
- Se implementa el LOGIN
- Se bloquean los endpoints vía middleware

#### rc95 - 26/08/2023 21:30
- Cambios necesarios para el web_visit

#### rc95 - 12/08/2023 08:08
- Solo usamos una variable para la BD en `.env`

#### rc95 - 11/08/2023 23:50
- Cambios para deploy en `vercel`

#### rc95 - 05/07/2023
- Cambios en el `README`

#### rc95 - 16/06/2023
- Se implementa `jsonwebtoken`
- Se implementa un propotipo de `Login`
- Se implementa:
  - /api/estadios

#### rc95 - 09/06/2023
- Se implementa:
  - /api/jugadores
  - /api/torneos
  - /api/torneo_detalles

#### rc95 - 08/06/2023
- Se implementa:
  - /api/clubes
  - /api/tipos_contacto
  - /api/tipos_identificador
  - /api/personas

#### rc95 - 06/06/2023
- Se implementa:
  - /api/paises
  - /api/estados
  - /api/ciudades

#### rc95 - 03/06/2023
- Primer commit
- Prototipo de API REST
- Estructura preparada para modelos de MongoDB
- Se crea una función inicial para prepoblar la base
- Estructura app - routes - controller
- Se implementa:
  - /api/continentes
- Se crea el archivo `utils.js` para formateo de fechas


___
### Versión anterior (front y back juntos bajo un mismo proyecto)
#### rc95 - 28/09/2022 19:39
- Prepoblamos las tablas al inicio:
  - contact (club, person)
  - person
  - player
  - staff_role
  - staff
  - referee
  - stadium
  - tournament
  - match

#### rc95 - 27/09/2022 20:04
- First commit del proyecto completo en modo privado, enfocado al tema de la tesis
- Cambios en el readme
- Prepoblamos las tablas al inicio:
  - role
  - user
  - continent
  - country
  - identifier_type
  - state
  - city
  - sport
  - region
  - club
  - contact_type

#### rc95 - 25/08/2022 22:33
- Reestructuración de carpetas, separación de funcionalidades
- Se finalizan los `GET / POST / PATCH / DELETE`

#### rc95 - 25/08/2022 00:06
- Primera versión del proyecto