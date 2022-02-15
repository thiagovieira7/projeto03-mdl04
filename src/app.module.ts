import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetsModule } from './tweets/tweets.module';
import { AuthModule } from './auth/auth.module';
import { CategoriasemtweetsModule } from './categoriasemtweets/categoriasemtweets.module';
import { CategoriaModule } from './categoria/categoria.module';
import { TweetfavoritoModule } from './tweetfavorito/tweetfavorito.module';

@Module({
  imports: [
    UsuariosModule,
    PrismaModule,
    SeguidoresModule,
    SeguindoModule,
    TweetsModule,
    AuthModule,
    CategoriasemtweetsModule,
    CategoriaModule,
    TweetfavoritoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
