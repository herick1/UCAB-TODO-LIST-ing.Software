# UCAB-ing-Software-2da-Entrega

* Api Rest:
  Se utilizo las tecnologias de node.js y mongodb para la ceación de la api rest
  
  * 1 Mongodb y node.js fueron creados e utilizados en una maquina con windows de 32 bits , por lo que si utiliza windows x64, linux o mac
  debera de instalar node.js y mongodb para su configuracion

	* [mongodb](https://www.mongodb.com/download-center#atlas "mongodb").
	* [node.js](https://nodejs.org/es/download/ "node.js").
  
  * 2 En este repo hay dos carpetas con los nombres "node", "data" . En la primera sirven para abrir node y la segunda corresponde a la data de mongodb
  
  * 3 En la carpeta node hay dos archivos fundamentales que son "index.js" y "package.json" que en caso de utilizar otra distribucion 
  diferente a windows x86 debera copiarlo en su carpeta donde esta ejecutando su node.js
  
  * NOTA: Para la intalacion de las dependencias
    * comando npm -i --S nombre_de_la_dependencia)

  * 4 Dependencias instaladas en node.js :

    * Express
    * body-parser
    * method-override
    * mongodb
    * mongoose
    * nodemon
    * assert
  
  * 5 En caso de utilizar otra distribucion diferente a windows x86 debera copiar en su carpeta "data" 
  (la cual corresponde a donde usted guarde sus data base de mongodb) el contenido de "data"(corresponde a la carpeta que esta en el repo)
  
  * 6 Abra su carpeta de mongodb desde la terminal y alli escriba "mongod" (esto para abrir la base de datos y que espere llamadas de node)

   ![imagen mongod](https://github.com/herick1/UCAB-ing.Software/blob/master/2da-entrega/monod_console.png)
  
  * 7 Abra la carpeta "node" desde la terminal y alli escriba "npm start" 
  (esto funciona para abrir el node, localhost y activar nuestra api rest) 
  
  * 8 Si todo a salido bien en la terminal donde escribieron "npm start" deberan de ver estos mensajes:
  " Conexion establecida a mongo
    Api rest corriendo en localhost:3001 "

   ![imagen api rest](https://github.com/herick1/UCAB-ing.Software/blob/master/2da-entrega/node_npm.png)
  
  * 9 Listo ! la api rest esta lista y 100% funcional 
  
  * 10 Recordatorios (api del curso)
  
    * GET /v1/todos
    * POST /v1/todos
    * DELETE /v1/todos/:id
    * PUT /v1/todos/:id
    * PUT /v1/todos/:id/alterar-completado
   

* Apk: 

  * En el repo esta montada el apk para ser instalada en dispositivos android 
  * app para android 4.x hacia adelante 
  * Hecha en unity y consta de 6 pantallas 

 ![imagen pantalla apk](https://github.com/herick1/UCAB-ing.Software/blob/master/2da-entrega/pantallas%20apk.png)

