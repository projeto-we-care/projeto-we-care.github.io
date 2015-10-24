![wecare logo](wecare-readme.jpg "WeCare")

> Somos a ponte entre você e quem precisa :)

## Instalação

Estamos utilizando [Yeoman angular generator](https://github.com/yeoman/generator-angular) no site e [Sails](http://sailsjs.org) para construção da api.

Primeiro passo:

```
git clone -b development git@github.com:projeto-we-care/projeto-we-care.github.io.git
```

segundo passo:

```
cd site
npm install && bower install
grunt serve
```

```
cd api
npm install
sails lift
```

## Configuração

Defina qual adaptador você irá utilizar no arquivo <a href="https://github.com/projeto-we-care/projeto-we-care.github.io/blob/development/api/config/connections.js">connections.js</a>. Por padrão, o projeto já está configurado com <a href="https://github.com/projeto-we-care/projeto-we-care.github.io/blob/development/api/config/connections.js#L60">`sails-mongo`</a>, altere as credenciais e tudo irá funcionar.

# Uso

O site irá rodar em:

```
http://localhost:9000/
```

A api irá rodar em:

```
http://localhost:1337/
```
