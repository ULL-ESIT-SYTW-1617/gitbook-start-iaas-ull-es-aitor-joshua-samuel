#Práctica: Creación de un Paquete NPM

##¿Qué hace el módulo?

Crea una serie de directorios y ficheros que ayudan al usuario a desplegar un libro en gitbook con scripts

##Manual del paquete

[Enlace al paquete](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel)

Lista de comandos:

Instalación:

```shell
npm install -g gitbook-start-aitor-joshua-samuel
```

Ayuda:

```shell
gitbook-start -h 
```

Desplegar los ficheros

```shell
gitbook-start -n [nombre del proyecto]
```

Desplegar en github

```shell
gulp deploy-github
```

Despliegue en gh-pages

```shell
gulp deploy
```
Despliegue en el Iaas

En el Package.JSON tiene que poner su IP en el campo iaasip y el directorio donde se ubica en el campo iaaspath
##Descripción

* El objetivo de esta práctica es crear un package NodeJS y publicarlo en npm. El paquete se construye a partir de el código que haya desarrollado en la práctica anterior.

1. Se trata de añadir un ejecutable ```gitbook-start``` (Véase seccion ```bin``` en ```package.json```)
2. Este ejecutable construye una plantilla con la estructura inicial del libro y provee a partir de los argumentos que se le pasen los mecanismos para su fácil despliegue en GitHub ```gh-pages``` y en [Gitbook](https://www.gitbook.com/)
3. Para analizar los argumentos pasados en línea de comandos un buen módulo es minimist
4. Como deberán darse de alta en el site de npm asegúrense de ponerle a su paquete un nombre único que no coincida con el de los otros alumnos, por ejemplo ```gitbook-start-team-name```
5. Añada a los otros miembros del equipo como ```contributors```. Véase las seccion people fields de package.json
6. Intente que su paquete funcione independientemente del Sistema Operativo (Linux, MacOS X, Windows, etc.)

##Autores

1. [Aitor Bernal Falcón](http://alu0100830064.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez García](http://joshuape.github.io/)

##Repositorio

* [Repositorio de entrega](https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-aitor-joshua-samuel)

##Enlaces de interés
* [La práctica en el campus](https://campusvirtual.ull.es/1617/mod/workshop/view.php?id=90206)
* [La práctica en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicanm.html)
