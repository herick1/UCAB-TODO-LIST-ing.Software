# UCAB-ing-Software-3da-Entrega

 En el repo aparece un archivo(apk) y una carpeta de directorios (docker), el primero es el frontend, y el segundo es el backend con el docker hecho en ubuntu 16.04 LTS
 
## 1 Docker (Api Rest):
  
* Instalacion de docker en ubuntu: para la instalacion del docker vale la pena ver este link [docker instalacion](https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-16-04-es "docker instalacion").

* Recuerde instalar docker compose, a mi me ayudo este link [docker compose](https://docs.docker.com/compose/install/#install-compose "docker compose").

* Para construir nuestra imagen de Docker usaremos el "docker build". Dirígete a tu consola y en el directorio "docker" que tenemos en este repo ejecuta lo siguiente:

	* docker -compose build
	* docker -compose up

* Listo ! la api rest esta lista y 100% funcional 

* por defecto la url es: http://localhost:3001/v1/todos/

* Por si te interesa borrar todo lo relacionado con docker puedes ver este link [eliminar docker ](http:/tips.tutorialhorizon.com/2016/07/30/how-to-completely-uninstall-docker-from-ubuntu/ "eliminar docker").
  
* Recordatorios (api del curso)

    * GET /v1/todos
    * POST /v1/todos
    * DELETE /v1/todos/:id
    * PUT /v1/todos/:id
    * PUT /v1/todos/:id/alterar-completado
   

## 2 Apk: 

* La app sirve para dispositivos con android 4.1 hacia delante (esto es debido a las limitaciones de unity)

* La app fue probada directamente en un dispositivo android instalando el "todolist.apk" directamente en el telefono si no tienes mucho conocimientos en este tema te recomiendo ver este link  [informacion sobre android apk ](https://elandroidelibre.elespanol.com/2016/04/como-instalar-aplicaciones-apk-android.html "informacion sobre android apk ").

* Tambien puedes instalar la app android con un emulador en una pc [informacion sobre sdk](https://androidstudiofaqs.com/root-rom/como-instalar-apk-en-android-desde-pc "informacion sobre sdk").

* La configuracion de la aplicacion con el backend ocurre en la parte de "configuracion" dentro de la app , alli se puede elegir el puerto y la url donde se va a conectar con el servidor

* NOTA: si no hay comunicacion con el backend entonces la aplicación no servira
  
