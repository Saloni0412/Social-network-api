# Social-network-api
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![expree](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)![insomnia](https://camo.githubusercontent.com/93ae318132d035a8c007ee1cb244f63a02d87cc0051dfa67323f5bfdc6b222d1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f496e736f6d6e69612d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d696e736f6d6e6961266c6f676f436f6c6f723d353834394245)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
## Description

This repository contains a Social Network API that allows users to interact with a MongoDB database using various HTTP methods. The API provides functionality to manage users, thoughts, reactions, and friends within the social network.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

To install this application you will need to download NODE JS and MongoDB. Once downloaded clone this repository to your local machine, run command npm install/ npm i express which will install all express dependencies. You must also download Mongoose package. 
* To start the app you can use comment "npm start"
* You can then use Insomnia to test all routes.

## Usage

Starting with command npm start, one will have to use insomnia app to run all the api's with given end point for ``USERS``, ``FRIENDS``, ``THOUGHTS`` and ``REACTIONS``

|                                     | USERS                                   | THOUGHTS                           |
| ---------------                     | ---------------                         | ----------------                   |
| GET /  POST                         | http://localhost:3001/api/users/        | http://localhost:3001/api/thoughts/|
| DELETE / UPDATE / GET BY ID         | http://localhost:3001/api/users/:userId | http://localhost:3001/api/thoughts/:thoughtId| 

|                          | FRIENDS                                 | REACTION                           |
| ---------------          | ---------------                         | ----------------                   |
| POST /  DELETE           | /api/users/:userId/friends/:friendId    | /api/thoughts/:thoughtId/reactions |


The link of the walkthrough video is - [Link to the video]()


## Credits

[MongoDB](https://www.mongodb.com/docs/atlas/) - to get some concepts for mongoDB

[Badges](https://github.com/Ileriayo/markdown-badges/blob/master/README.md#badges) - Used this website to generate the badges for licenses

## License

MIT license

## Questions

If you have any questions about the repo, please contact me at [pshashikantb@gmail.com]. You can find more of my work at [Saloni0412](https://github.com/Saloni0412/).
