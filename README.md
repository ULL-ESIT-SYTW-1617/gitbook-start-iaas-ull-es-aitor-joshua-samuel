#Práctica: Plugin para despliegues en IAAS-ULL-ES

##¿Qué hace el módulo?

Este plugin extiende el paquete gitbook-start con un nuevo plugin que permita realizar el despliegue en iaas-ull-es con un simple gulp deploy-iaas-ull-es. Puede encontrar el paquete gitbook-start y el otro plugin para heroku en la zona de Repositorio.

#####Instalación:

```shell
npm install  gitbook-start-iaas-ull-es-aitor-joshua-samuel
```

Para añadir el plugin al paquete  gitbook-start ejecutar el siguiente comando:

```shell
gitbook-start -d iaas-ull-es --> Añades el plugin en gitbook-start
```

#####Instrucciones:

* Al ejecutar el comando anterior, se te genera lo esencial para desplegar la aplicación en iaas.ull.es
* Para ello, debemos tener configurado la pareja de claves pública y privada:
* Primero vamos a comprobar si ya tenemos generada la pareja de claves pública y privada, hacemos ```cd ~/.ssh``` en el cliente.
* Si existe el directorio, pasa al siguiente paso. Si no existe, ejecuta el comando ```ssh-keygen -t rsa``` y le da enter a todo.
* Una vez creado, hacemos ```cd ~/.ssh``` y ejecutamos ```cat id_rsa.pub```, esa es nuestra clave pública la copiamos entera.
* En el cliente, creamos el directorio config con el siguiente formato:

```shell
Host nombre -> Nombre que le queremos poner al host remoto.
HostName IP -> IP del remoto
user usuario -> Usuario del remoto
port 2121 -> Puerto al que queremos conectarnos del remoto.
```

* Seguidamente nos conectamos al host remoto y nos movemos al directorio .ssh y creamos el fichero authorized_keys, y pegue la clave pública del cliente.
* Ahora, añada la ip y el path donde se encuenta el libro a desplegar:

```json
  "iaasip": "0.0.0.0",
  "iaaspath": "src/mi_proyecto"
```

###### Github

* En iaas-ull-es no funciona bien.
* Para el despliegue github debe rellenar el fichero userData.json con los siguientes campos:

1. La organización de acceso.
2. El token de github con los permisos necesarios.
3. La url callback de su github app.
4. El Client id de su github app.
5. El Client secret de su github app.

```json
{
    "org": "myOrg",
    "token": "myToken",
    "url": "myCallbackUrl",
    "idClient": "myClientID",
    "secretClient": "mySecretClient"
}


##### Despliegue Local
* Para el caso del depsliegue local, deberá añadir su token de dropbox y el link del archivo a descargar.
* Suba previamente el archivo ```users.json``` a [Dropbox](https://dropbox.com)
* [Obtener token de dropbox](https://dropbox.github.io/dropbox-api-v2-explorer/#auth_token/revoke)
* Rellene la URL para compartir el fichero y el token de Dropbox.

```json
{
    "url": "myUrl",
    "token": "myToken"
}
```

##### Despliegue con Base de Datos.

* Instalar [```gitbook-start-aitor-joshua-samuel```](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel) y desplegar con el comando ```gitbook-start -n milibro```
* Desplegar el plugin iaas-ull-es con ```gitbook-start -d iaas-ull-es -p db```Para desplegar iaas con la estrategia Local con base de datos.
* Ejecutar ```gitbook-build``` para construir los ```HTML```
* Conectarse a ```mysql``` mediante el comando ```mysql -u root -p``` Con esto arrancamos con el usuario root y nos pide que introduzcamos una contraseña para la base de datos.
* Rellenamos el fichero que se encuentra en ```db/dataBase.json```:

```json
{
  "dbHost": "localhost",
  "dbUser": "root",
  "dbPassword": "mypassword",
  "dbDatabase": "sytw"
}
```

* Dentro de ```mysql``` ejecutamos ```source usuario.sql``` y creamos la base de datos ```sytw``` y la tabla ```login```.
* Ejecutamos ```node server.js```.

####Despliegue
* Una vez configurado todo, se puede actualizar el libro en iaas.ull.es con la siguente tarea de Gulp:

```shell
gulp deploy-iaas --> Depsliega tu libro en iaas.ull.es
```

##Autores

1. [Aitor Bernal Falcón](http://chinegua.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez García](http://joshuape.github.io/)


##Repositorio

* [Repositorio de entrega del main](https://github.com/ULL-ESIT-SYTW-1617/practica-plugins-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin heroku](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin iaas](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-aitor-joshua-samuel)
* [Enlace a NPM del main](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel)
* [Enlace a NPM del plugin heroku](https://www.npmjs.com/package/gitbook-start-heroku-aitor-joshua-samuel)
* [Enlace a NPM del plugin iaas](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-aitor-joshua-samuel)


##Enlaces de interés
* [La práctica en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
