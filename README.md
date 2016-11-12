#Práctica: Plugin para despliegues en IAAS-ULL-ES

##¿Qué hace el módulo?

Este plugin extiende el paquete gitbook-start con un nuevo plugin que permita realizar el despliegue en Heroku con un simple gulp deploy-heroku. Puede encontrar el paquete gitbook-start y el otro plugin para el iaas-ull-es en la zona de Repositorio.

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

* Una vez configurado todo, se puede desplegar en iaas.ull.es con la siguente tarea de Gulp:

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
