<h1 align="center"> Encriptador de texto </h1>

   <p align="left">
   <img src="https://img.shields.io/badge/STATUS%20FINALIZADO-green">
   </p>

![Vista inicial de la pagina](https://github.com/user-attachments/assets/a72b1337-2e5b-4fc9-966a-986690a31095)

## Índice
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Tecnologías](#tecnologías)

## Descripción

Este proyecto consiste en el desarrollo de una aplicación que permite encriptar y desencriptar textos, ideal para intercambiar mensajes secretos con otras personas que conozcan el método de encriptación utilizado.

# Funcionalidad de Encriptación

La aplicación utiliza un sistema sencillo de sustitución de letras basado en las siguientes reglas:

| Letra Original | Encriptada     |
| -------------- | -------------- |
| e              | enter          |
| i              | imes           |
| a              | ai             |
| o              | ober           |
| u              | ufat           |

# Ejemplos

- **gato** se convierte en **gaitober**.
  
![Ejemplo de la palabra gato encriptada](https://github.com/user-attachments/assets/1251532f-8ed9-4651-8188-2569a75d8334)


- **gaitober** se convierte de nuevo en **gato**.

![Ejemplo de gaitober desencriptado](https://github.com/user-attachments/assets/ba0e0aed-9529-45f5-9c11-1aa970c03293)

# Requisitos

La aplicación cumple con los siguientes criterios:

- Funciona solo con **letras minúsculas**.
- No admite letras con **acentos** ni **caracteres especiales**.
- Permite convertir una palabra a su versión encriptada y devolver una palabra encriptada a su versión original.

# Interfaz de Usuario

La página web incluye:

- **Campo de texto**: Inserción del texto que será encriptado o desencriptado.

![Campo que recibe el texto](https://github.com/user-attachments/assets/681d0e5c-9cbd-4d78-bcec-4795423a5e46)

- **Opciones**: El usuario puede escoger entre encriptar o desencriptar el texto.

![opciones de encriptado o desencriptado](https://github.com/user-attachments/assets/c14d4138-a11e-41c8-a18a-ee28bf487a5f)
  
- **Resultado**: El resultado de la conversión se muestra en pantalla.

![seccion donde se muestra el texto despues de ser procesado](https://github.com/user-attachments/assets/ec50b9b7-39e3-42f8-a799-3e44754c31f0)

## Instalación

Instrucciones para instalar y configurar el proyecto en una máquina local.

```bash
\# 📁 Acceso al proyecto
git clone https://github.com/tuusuario/tu-proyecto.git](https://github.com/PGAM-0408/Alura-Challenge-Encriptador.git)
```

## Tecnologías

Lista de tecnologías y herramientas que se utilizaron en el proyecto:

- **HTML**: Estructura y marcado del contenido de la página web.
- **JavaScript**: Lógica de encriptación y desencriptación, así como la interacción con el usuario.
- **CSS**: Estilizado y diseño visual de la interfaz de usuario.



