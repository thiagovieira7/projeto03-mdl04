<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

```html
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
```

```html
<p align="center">
```

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Criação do projeto utilizando o NESTJS, utilizando Typescript.

## Installation

Para iniciar instale o NestJS CLI de forma global:

```bash
npm i -g @nestjs/cli
```

Crie e abra uma pasta no VSCode onde você deseja que o repositório que vamos criar, fique armazenado. Para criar um novo projeto utilize o seguinte comando e onde está `project-name` mude para o nome do seu projeto.

```basic
nest new project-name
```

Logo após ele vai perguntar qual gerencador de pacotes queremos usar, pode utilizar o da sua preferência, nesse exemplo utilizaremos o `npm`.

Neste momento, foi criado uma nova pasta com o seu projeto, você deve garantir que a pasta que foi criada, esteja aberta no VSCode:

```basic
cd "my-nest-project"
```

Para testar se o seu projeto está rodando, entre com o comando:

```bash
npm run start:dev
```

Ele deverá por padrão em http://localhost:3000

Quando rodamos esse comando, automaticamente o NestJS gera a pasta `dist`, onde contém arquivos `.js`, `.map` e `.d.ts.

Automaticamente é criado 5 arquivos dentro da pasta src: 




- app.controller.spec.ts, 
- app.controller.ts, 
- app.module.ts, 
- app.service.ts 
- E dentro dessa aplicação temos o arquivo mais importante que é o "coração" do projeto o main.ts.

## Este Projeto Contém:

​                             `[Postgres+ NestJS + TypeScript + Prisma + JWT]` 


 Em nossos arquivos DTO é necessário que realizemos as validações por meio dos @Decorators.

Para este projeto foram criadas 7 pastas distintas dentro da pasta `src` são elas:

- Pasta Categoria.
- Pasta Categoriasemtweets
- Pasta seguidores.
- Pasta seguindo.
- Pasta Tweetfavorito.
- Pasta tweets.
- Pasta usuario 

Para criação das pastas é necessario rodar o comando `nest g resource-nome da pasta` para criação de  cada uma delas, exemplo:

```javascript
nest g resource usuario
```

Com esse comando havera a criação da pasta no caso (usuario) e dentro dela terá todos os demais arquivos e pastas necessario para rodar o projeto desta pasta.

## Validações 

Rode estes dois comandos:

```bash
npm i --save class-validator class-transformer
```

```bash
npm i --save helmet
```

 E faça as alterações necessarias para que seu codigo fique desta maneira:

```javascript
import { ValidationPipe } from '@nestjs/common'; //Para o class-validator funcionar
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet'; // Para o helmet funcionar

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Para funcionar o class-validator
  app.use(helmet()); //Para funcionar o helmet
  await app.listen(3000);
}
bootstrap();

```

## Prisma

Para que o prisma podesse ser utilizado instalei as seguintes dependencias:

```bash
npm install prisma --save-dev
```

```basic
npx prisma init
```

```bash
npm install @prisma/client
```

Este comando é para gerar a tabela do schema.prisma no banco do Postgre :

```bash
npx prrisma generate
```

Este é para dar um push na tabela:

```bash
npx prisma db push
```

Este comando é para testar se tudo esta certo e funcionando corretamente no prisma estudio ainda na versão beta:

```
npx prisma studio
```



## Rotas

**Rotas principais:**
cateroria
categoriasemtweets
seguindo
tweets
usuarios
seguidores
tweetfavorito




**Dentro de cada rota temos um CRUD completo criado com os Decorators:**

 `@POst()` 	**Cada uma das rotas principais tem o seu:**

```javascript
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.createPrisma(createCategoriaDto);
  }  
```

```javascript
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCategoriasemtweetDto: CreateCategoriasemtweetDto) {
    return this.categoriasemtweetsService.createPrisma(createCategoriasemtweetDto);
  }
```

```javascript
@Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSeguidoreDto: CreateSeguidoreDto) {
    return this.seguidoresService.createPrisma(createSeguidoreDto);
  }  
```

```javascript
@Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.createPrisma(createSeguindoDto);
  }  
```

```javascript
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTweetfavoritoDto: CreateTweetfavoritoDto) {
    return this.tweetfavoritoService.createPrisma(createTweetfavoritoDto);
  }
```

```javascript
@Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.createPrisma(createTweetDto);
  }
```

```javascript
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
```



`@Get `() 	  ***cada rota tem um id:***

```javascript
  @Get()
  findAll() {
    return this.categoriaService.findAllPrisma();
  }
```

```javascript
  @Get()
  findAll() {
    return this.categoriasemtweetsService.findAllPrisma();
  }
```

```javascript
@Get()
  findAll() {
    return this.seguidoresService.findAllPrisma();
  }
```

```javascript
 @Get()
  findAll() {
    return this.seguindoService.findAllPrisma();
  }
```

```javascript
  @Get()
  findAll() {
    return this.tweetfavoritoService.findAllPrisma();
  }
```

```javascript
@Get()
  findAll() {
    return this.tweetsService.findAllPrisma();
  }
```

```javascript
 @Get()
  findAll() {
    return this.usuariosService.findAllPrisma();
  }
```



`@Get(':id')`  ***cada rota tem um id:***

```javascript
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOnePrisma(+id);
  }
```

```javascript
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasemtweetsService.findOnePrisma(+id);
  }
```

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOnePrisma(+id);
  }
```

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOnePrisma(+id);
  }
```

```javascript
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetfavoritoService.findOnePrisma(+id);
  }
```

```javascript
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOnePrisma(+id);
  }
```

```javascript
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOnePrisma(+id);
  }
```



`@Patch(':id') ` 	**cada rota tem um id:**

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.updatePrisma(+id, updateCategoriaDto);
  }
```

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriasemtweetDto: UpdateCategoriasemtweetDto) {
    return this.categoriasemtweetsService.updatePrisma(+id, updateCategoriasemtweetDto);
  }
```

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguidoreDto: UpdateSeguidoreDto) {
    return this.seguidoresService.updatePrisma(+id, updateSeguidoreDto);
  }
```

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguindoDto: UpdateSeguindoDto) {
    return this.seguindoService.updatePrisma(+id, updateSeguindoDto);
  }
```

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetfavoritoDto: UpdateTweetfavoritoDto) {
    return this.tweetfavoritoService.updatePrisma(+id, updateTweetfavoritoDto);
  }
```

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.updatePrisma(+id, updateTweetDto);
  }
```

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateUsuarioDto) {
    return this.usuariosService.updatePrisma(+id, updateFilmeDto);
  }
```



`@Delete`()  	**cada rota tem um id:**

```javascript
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.removePrisma(+id);
  }
```

```javascript
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasemtweetsService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguindoService.removePrisma(+id);
  }
```

```javascript
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetfavoritoService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.removePrisma(+id);
  }
```



**Post  rota** `/categoria,  **   Thunder:**

- ​	**Esta rota serve para criar o post de categorias para os tweets, exemplo:** 

```javascript
"nome": "Comida"           //String
```


**Post  rota** `/categoriasemtweets , **  Thunder:**



- ​	**Esta rota serve apenas para fazer o post das tabelas many to many. de tweetid e categoriaid, exemplo:** 

```javascript
"tweetid": 1 ,           //Number
"categoriaid": 3           //Number
```



**Post  rota** `/seguidores` , ** Thunder:**

		 

- ​	**Usado para adicionar um seguidor ao usuario ja existente no banco.**
- ​    **Para adicionar um seguidor, necessita passar o ID do usuario ja existente exemplo:**

```javascript
 "usuarioid": 3           //Number
```


**Post  rota** `/seguindo` , ** Thunder:**	


- ​	**Usado para informar quem o usuario esta seguindo** 
- ​    **Para adicionar quem o usuario esta seguindo, necessita passar o ID do usuario ja existente, exemplo:**

```javascript
 "usuarioid": 3           //Number
```


* **Todos os `id` são autoincrement (criado sozinho, não precisa passar)**

**Post  rota** `/tweetsfavorito` , **no  Thunder:**
		 

- ​	**Esta rota serve apenas para fazer o post das tabelas many to many. de tweetid e usuarioid, exemplo: **

```javascript
"tweetid": 1 ,           //Number
"usuarioid": 2            //Number
```

**Post  rota** `/categoriasemtweets , **no  Thunder:**


- ​	**Esta rota serve apenas para fazer o post das tabelas many to many. de tweetid e categoriaid, exemplo:** 

```javascript
"tweetid": 1 ,           //Number
"categoriaid": 3           //Number
```

**Post  rota** `/categoria,  **   Thunder:**


- ​	**Esta rota serve para criar o post de categorias para os tweets, exemplo:** 

```javascript
"nome": "Comida"           //String
```

**Post  rota** `/tweetsfavorito` , ** Thunder:**

- ​	**Esta rota serve apenas para fazer o post das tabelas many to many. de tweetid e usuarioid, exemplo: **

```javascript
"tweetid": 1 ,           //Number
"usuarioid": 2            //Number
```



**Post  rota** `/tweets` , ** Thunder:**

- ​	**Usado para postar uma mensagem.**
- ​    **Para adicionar um tweets, necessita passar todos os dados com suas devidas informações a seguir no exemplo:**

```javascript
  "texto":         //String
  "emoji":         //String? 
  "curtidas":      //Number
  "usuarioid":     //Number 
```

**Post  rota** `/usuarios` , ** Thunder:**	


- ​	**Usado para adicionar um usuario no banco de dados local.**
- ​    **Para adicionar um usuario dentro do banco, necessita passar todos os dados com suas devidas informações a seguir no exemplo:( id, createdAt e updatedAt não precisa passar, pois são autoincrement )**

```javascript
  "email":         //String
  "senha":         //String
  "nome":          //String 
  "imagem":        //String?
  "bio":           //String 
  "nascimento":    //String 
```

## JWT

Para que o jwt possa ser iniciado, fazer a criação manual da pasta `auth` dentro de `src`.

Este comando cria uma nova pasta e dentro dela, o novo AuthModule. Além disso, este módulo é importado por padrão no AppModule.

```bash
nest g m auth
```

Este comando cria a classe AuthService e fornece automaticamente este serviço dentro do AuthModule.

```bash
nest g s auth
```

Este comando cria a classe AuthController e a adiciona automaticamente à propriedade dos controladores no AuthModule.

```bash
nest g c auth
```

A aplicação agora está pronta para registrar usuários e autenticá-los com o JWT.



## SWAGGER

O Swagger é uma ferramenta que facilita os testes de sua api.

Para começar a implementar ele em sua api, tem de usar:

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

Após isso, abra a pasta `main.ts` e adicione as seguintes informações:

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
```

Após isso, apenas inicie seu projeto, utilizando:

```bash
npm run start:dev
```

Assim que for iniciada a sua api, basta entrar em `http://localhost:3000/api/` -> o "api" é configurado no `main.ts` caso queria mudar basta alterar onde foi passado logo a cima.

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
```

