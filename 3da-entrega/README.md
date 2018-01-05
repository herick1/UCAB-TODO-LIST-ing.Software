# UCAB-ing-Software-3da-Entrega

 En el repo aparece un archivo(apk) y una carpeta de directorios (docker), el primero es el frontend, y el segundo es el backend con el docker 
 
* 1 Docker (Api Rest):
  
  * Instalacion de docker en ubuntu: para la instalacion del docker vale la pena hecharle un ojo a este link [docker instalacion](https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-16-04-es "docker instalacion").

  * Recuerde instalar su docker compose , a mi me ayudo este link [docker compose](https://docs.docker.com/compose/install/#install-compose "docker compose").

  * Para construir nuestra imagen de Docker usaremos el "docker build" comando. Dirígete a tu consola y en el directorio "docker" ejecuta lo siguiente:

	* docker build -t node-test:0.1 .
	* docker -compose build
	* docker -compose up

  * 9 Listo ! la api rest esta lista y 100% funcional 

  * Por si te interesa borrar todo lo relacionado con dockerpuedes ver este link [eliminar docker ](http://tips.tutorialhorizon.com/2016/07/30/how-to-completely-uninstall-docker-from-ubuntu/ "eliminar docker").
  
  * 10 Recordatorios (api del curso)
  
    * GET /v1/todos
    * POST /v1/todos
    * DELETE /v1/todos/:id
    * PUT /v1/todos/:id
    * PUT /v1/todos/:id/alterar-completado
   

* 2 Apk: 
	
	La configuracion de la aplicacion con el backend ocurre en la parte de "configuracion" dentro de la api , alli se puede elejir el puerto y la url donde se va a conectar con el servidor
  
