export interface FaqEntry {
  question: string;
  answer: string;
}

// Interfaz para entradas de conversación básica
export interface ConversationEntry {
  type: 'greeting' | 'farewell' | 'thanks' | 'help';
  patterns: string[];
  responses: string[];
}

// Preguntas frecuentes de soporte técnico
export const faqData: FaqEntry[] = [
  // Preguntas originales
  {
    question: "¿Cómo saber si mi computadora tiene virus?",
    answer: "Si tu equipo está lento, muestra ventanas emergentes o se comporta de forma extraña, realiza un análisis con un antivirus actualizado."
  },
  {
    question: "¿Qué hacer si olvidé la contraseña de mi computadora?",
    answer: "En Windows puedes restablecerla desde una cuenta de administrador o usando una unidad de recuperación."
  },
  {
    question: "¿Cómo acelerar el arranque de mi PC?",
    answer: "Desactiva programas innecesarios desde el Administrador de tareas > pestaña 'Inicio'."
  },
  {
    question: "¿Qué hago si no escucho sonido en mi laptop?",
    answer: "Verifica que el volumen esté activo, que no haya auriculares conectados y revisa los drivers de audio."
  },
  {
    question: "¿Cómo conecto dos monitores a mi computadora?",
    answer: "Conecta ambos monitores a los puertos disponibles y configura su disposición en Configuración > Pantalla."
  },
  {
    question: "¿Qué hacer si mi teclado escribe caracteres incorrectos?",
    answer: "Revisa la configuración de idioma del teclado y asegúrate de que esté configurado correctamente (por ejemplo, español latinoamericano)."
  },
  {
    question: "¿Cómo sé cuánta RAM tiene mi PC?",
    answer: "Haz clic derecho en 'Este equipo' > Propiedades, o abre el Administrador de tareas en la pestaña 'Rendimiento'."
  },
  {
    question: "¿Por qué mi laptop no carga aunque esté conectada?",
    answer: "Podría deberse a un cargador dañado, batería defectuosa o problemas en el puerto de carga."
  },
  {
    question: "¿Cómo instalar un programa desde internet de forma segura?",
    answer: "Descarga siempre desde sitios oficiales y revisa que el archivo no contenga malware con un antivirus."
  },
  {
    question: "¿Qué hacer si mi pantalla se congela?",
    answer: "Presiona Ctrl + Alt + Supr, intenta cerrar el programa que no responde o reinicia el equipo si es necesario."
  },
  {
    question: "¿Cómo actualizar los drivers de mi tarjeta gráfica?",
    answer: "Visita el sitio oficial del fabricante (como NVIDIA o AMD) y descarga los controladores más recientes."
  },
  {
    question: "¿Cómo compartir archivos entre dos computadoras?",
    answer: "Puedes usar una red local, servicios en la nube o un cable USB de transferencia de datos."
  },
  {
    question: "¿Cómo proteger mis datos personales en línea?",
    answer: "Usa contraseñas seguras, activa la autenticación en dos pasos y evita compartir datos sensibles en sitios no seguros."
  },
  {
    question: "¿Qué hacer si mi navegador no carga páginas?",
    answer: "Verifica tu conexión, limpia la caché del navegador y prueba con otro navegador para descartar problemas."
  },
  {
    question: "¿Cómo saber si un correo es phishing?",
    answer: "Desconfía de correos con errores gramaticales, enlaces sospechosos o que soliciten datos personales urgentes."
  },
  {
    question: "¿Por qué mi cámara web no funciona?",
    answer: "Verifica que no esté bloqueada por software, revisa los permisos de las apps y actualiza los drivers."
  },
  {
    question: "¿Cómo restablezco mi cuenta de correo electrónico?",
    answer: "Accede a la página oficial del servicio, selecciona '¿Olvidaste tu contraseña?' y sigue los pasos de verificación."
  },
  {
    question: "¿Cómo escanear un documento con mi impresora?",
    answer: "Instala el software del fabricante, coloca el documento en el escáner y usa la opción de digitalización."
  },
  {
    question: "¿Cómo evitar que mi hijo acceda a sitios no aptos?",
    answer: "Activa el control parental desde el sistema operativo o instala aplicaciones de seguridad para menores."
  },
  {
    question: "¿Qué hacer si se me cayó agua en el teclado?",
    answer: "Apaga inmediatamente la computadora, desconéctala, seca el equipo y llévalo a revisión técnica si es necesario."
  },
  {
    question: "¿Cómo saber si un archivo es seguro antes de abrirlo?",
    answer: "Analízalo con un antivirus y evita abrir archivos ejecutables de fuentes desconocidas."
  },
  {
    question: "¿Cómo puedo ver las especificaciones de mi computadora?",
    answer: "En Windows, escribe 'msinfo32' en el buscador o abre 'Configuración > Sistema > Acerca de'."
  },
  {
    question: "¿Qué es la nube y cómo se usa?",
    answer: "La nube permite almacenar archivos en línea. Puedes usar servicios como Google Drive, Dropbox o OneDrive."
  },
  {
    question: "¿Por qué mi conexión Wi-Fi se desconecta constantemente?",
    answer: "Puede ser por interferencias, drivers desactualizados o problemas con el router. Reiniciar puede ayudar."
  },
  {
    question: "¿Qué significa BSOD (pantalla azul)?",
    answer: "Es un error crítico del sistema operativo. Puede deberse a problemas de hardware o drivers."
  },
  {
    question: "¿Cómo hago capturas de pantalla?",
    answer: "En Windows, usa la tecla 'Impr Pant' o 'Windows + Shift + S'. En macOS, 'Command + Shift + 4'."
  },
  {
    question: "¿Cómo conectar una impresora por Wi-Fi?",
    answer: "Accede al panel de control de la impresora, selecciona red inalámbrica y sigue las instrucciones para conectarla."
  },
  {
    question: "¿Cómo activar el modo oscuro en Windows?",
    answer: "Ve a Configuración > Personalización > Colores y selecciona el modo oscuro."
  },
  {
    question: "¿Cómo detectar aplicaciones que consumen muchos recursos?",
    answer: "Abre el Administrador de tareas (Ctrl + Shift + Esc) y revisa la pestaña 'Procesos'."
  },
  {
    question: "¿Cómo hacer que mi batería dure más?",
    answer: "Reduce el brillo, cierra apps en segundo plano y activa el modo de ahorro de energía."
  },
  {
    question: "¿Por qué no puedo instalar ciertas aplicaciones?",
    answer: "Verifica si tienes permisos de administrador, suficiente espacio en disco y si la app es compatible con tu sistema."
  },
  
  // Preguntas adicionales - Básicas
  {
    question: "¿Cómo reiniciar mi router?",
    answer: "Desconecta el router de la corriente, espera 30 segundos y vuelve a conectarlo. Espera a que todas las luces se estabilicen para verificar que funciona correctamente."
  },
  {
    question: "¿Cómo liberar espacio en mi disco duro?",
    answer: "Usa la herramienta 'Liberador de espacio en disco' de Windows, desinstala aplicaciones que no uses y elimina archivos temporales. También puedes mover archivos grandes a un disco externo."
  },
  {
    question: "¿Cómo cambiar la resolución de mi pantalla?",
    answer: "En Windows, haz clic derecho en el escritorio > Configuración de pantalla > Resolución. Selecciona la resolución recomendada para obtener la mejor calidad de imagen."
  },
  {
    question: "¿Por qué mi computadora está tan lenta?",
    answer: "Puede deberse a poco espacio en disco, memoria RAM insuficiente, malware, demasiadas aplicaciones en inicio o un disco duro fragmentado. Realizar mantenimiento regular puede ayudar."
  },
  {
    question: "¿Cómo actualizar Windows?",
    answer: "Ve a Configuración > Actualización y seguridad > Windows Update y haz clic en 'Buscar actualizaciones'. Instala todas las actualizaciones disponibles."
  },
  {
    question: "¿Cómo usar el Bloc de notas en Windows?",
    answer: "Busca 'Bloc de notas' en el menú Inicio o presiona Windows + R, escribe 'notepad' y pulsa Enter. Es una herramienta básica para editar texto sin formato."
  },
  {
    question: "¿Cómo cambiar mi fondo de pantalla?",
    answer: "Haz clic derecho en el escritorio > Personalizar > Fondo. Selecciona una imagen o elige entre los fondos predeterminados."
  },
  {
    question: "¿Qué hacer si mi mouse no funciona?",
    answer: "Verifica la conexión (cable o pilas), prueba en otro puerto USB o limpia el sensor óptico. Si es inalámbrico, revisa que el receptor esté bien conectado."
  },
  {
    question: "¿Cómo desinstalar un programa correctamente?",
    answer: "Ve a Panel de control > Programas > Desinstalar un programa. Selecciona el programa y haz clic en 'Desinstalar'. Sigue las instrucciones y reinicia si es necesario."
  },
  {
    question: "¿Cómo formatear un pendrive?",
    answer: "Conecta el pendrive, abre el Explorador de archivos, haz clic derecho en la unidad y selecciona 'Formatear'. Elige el sistema de archivos (generalmente FAT32 o NTFS) y haz clic en 'Iniciar'."
  },
  
  // Preguntas intermedias
  {
    question: "¿Cómo crear una partición en mi disco duro?",
    answer: "Abre el 'Administrador de discos' (diskmgmt.msc), haz clic derecho en el espacio no asignado, selecciona 'Nuevo volumen simple' y sigue el asistente para crear y formatear la partición."
  },
  {
    question: "¿Cómo configurar una VPN en Windows?",
    answer: "Ve a Configuración > Red e Internet > VPN > Agregar una conexión VPN. Ingresa los datos proporcionados por tu proveedor de VPN y guarda la configuración."
  },
  {
    question: "¿Cómo optimizar el rendimiento de mi PC para juegos?",
    answer: "Actualiza los drivers gráficos, cierra aplicaciones en segundo plano, ajusta la configuración de energía a 'Alto rendimiento' y verifica que tu sistema cumple con los requisitos mínimos del juego."
  },
  {
    question: "¿Cómo sincronizar archivos entre mi PC y mi teléfono?",
    answer: "Puedes usar servicios como Google Drive, Dropbox o OneDrive para sincronizar automáticamente, o conectar tu teléfono mediante USB y transferir archivos directamente."
  },
  {
    question: "¿Cómo configurar el correo en mi teléfono?",
    answer: "Ve a la aplicación de correo, selecciona 'Agregar cuenta', ingresa tu dirección y contraseña. El sistema detectará automáticamente la configuración en la mayoría de los casos."
  },
  {
    question: "¿Qué es un archivo .zip y cómo usarlo?",
    answer: "Un archivo .zip es un contenedor comprimido que reduce el tamaño de los archivos. Para abrirlo en Windows, haz clic derecho y selecciona 'Extraer todo'. Para crear uno, selecciona los archivos, clic derecho y 'Enviar a > Carpeta comprimida'."
  },
  {
    question: "¿Cómo hacer una copia de seguridad de Windows?",
    answer: "Ve a Configuración > Actualización y seguridad > Copia de seguridad. Puedes usar la herramienta integrada de Windows o conectar un disco externo para guardar tus archivos importantes."
  },
  {
    question: "¿Cómo activar el cortafuegos de Windows?",
    answer: "Ve a Panel de control > Sistema y seguridad > Firewall de Windows Defender. Asegúrate de que esté activado para redes públicas y privadas."
  },
  {
    question: "¿Cómo configurar una impresora compartida en red?",
    answer: "En el PC con la impresora, ve a Configuración > Dispositivos > Impresoras y escáneres, selecciona la impresora, 'Administrar' y activa 'Compartir esta impresora'. En otros PCs, agrega una impresora de red y busca la compartida."
  },
  {
    question: "¿Cómo cambiar la página de inicio de mi navegador?",
    answer: "En Chrome, ve a Configuración > Al iniciar. En Firefox, Opciones > Inicio. En Edge, Configuración > Al iniciar. Allí puedes establecer la página que desees como inicio."
  },
  {
    question: "¿Cómo borrar el historial de navegación?",
    answer: "En la mayoría de navegadores, presiona Ctrl+Shift+Supr, selecciona el período de tiempo y los elementos que deseas eliminar (historial, cookies, caché) y confirma."
  },
  {
    question: "¿Qué es un archivo PDF y cómo abrirlo?",
    answer: "Un PDF es un formato de documento que mantiene el diseño original. Puedes abrirlo con Adobe Reader, el navegador web o el visor de PDF incluido en Windows 10."
  },
  {
    question: "¿Cómo recuperar archivos eliminados?",
    answer: "Revisa primero la Papelera de reciclaje. Si no están allí, puedes usar programas de recuperación como Recuva o TestDisk. La recuperación no siempre es posible, especialmente si el espacio ha sido sobrescrito."
  },
  {
    question: "¿Qué es un disco SSD y en qué se diferencia de un HDD?",
    answer: "Un SSD (Disco de Estado Sólido) usa memoria flash sin partes móviles, siendo más rápido y resistente que un HDD (Disco Duro) tradicional que usa platos giratorios. Los SSD son más caros pero ofrecen mejor rendimiento."
  },
  {
    question: "¿Cómo configurar una red doméstica?",
    answer: "Conecta todos los dispositivos al mismo router (por cable o Wi-Fi), accede a la configuración del router (normalmente 192.168.1.1 en el navegador) y configura seguridad y permisos compartidos."
  },
  
  // Preguntas avanzadas
  {
    question: "¿Cómo acceder al BIOS/UEFI de mi computadora?",
    answer: "Reinicia el equipo y presiona repetidamente la tecla especificada durante el arranque (generalmente F2, F10, F12, Supr o Esc, dependiendo del fabricante). En Windows 10/11 también puedes acceder desde Configuración > Actualización y seguridad > Recuperación > Inicio avanzado."
  },
  {
    question: "¿Cómo solucionar problemas del MBR (Master Boot Record)?",
    answer: "Inicia desde un medio de instalación de Windows, selecciona 'Reparar' y usa la Consola de recuperación. Ejecuta comandos como 'bootrec /fixmbr', 'bootrec /fixboot' y 'bootrec /rebuildbcd'."
  },
  {
    question: "¿Cómo configurar un servidor DHCP en mi red?",
    answer: "Accede a la configuración de tu router, busca la sección DHCP, establece el rango de direcciones IP disponibles y guarda los cambios. La mayoría de routers domésticos tienen DHCP activado por defecto."
  },
  {
    question: "¿Cómo crear una imagen ISO de un DVD?",
    answer: "Usa programas como ImgBurn o Nero. Inserta el DVD, selecciona la opción de crear imagen ISO, elige el destino donde guardar el archivo y espera a que se complete el proceso."
  },
  {
    question: "¿Cómo configurar un servidor FTP en Windows?",
    answer: "Activa las características de IIS en Windows, agrega el rol de FTP, configura los directorios, permisos y credenciales de acceso. Asegúrate de configurar correctamente el firewall para permitir conexiones FTP."
  },
  {
    question: "¿Cómo configurar un proxy en mi navegador?",
    answer: "En Chrome, ve a Configuración > Avanzada > Sistema > Configuración de proxy. En Firefox, Opciones > General > Configuración de red. Ingresa la dirección IP y puerto del servidor proxy."
  },
  {
    question: "¿Cómo configurar un servidor de correo propio?",
    answer: "Necesitas un dominio, un servidor con IP fija, configurar registros MX, instalar software como hMailServer o Postfix, y configurar correctamente SPF, DKIM y DMARC para evitar que tus correos sean marcados como spam."
  },
  {
    question: "¿Cómo optimizar el rendimiento de una base de datos SQL?",
    answer: "Utiliza índices apropiados, optimiza consultas, implementa el almacenamiento en caché, mantén estadísticas actualizadas y considera la fragmentación de tablas grandes."
  },
  {
    question: "¿Cómo configurar un servidor web Apache?",
    answer: "Instala Apache HTTP Server, edita el archivo httpd.conf para configurar puertos, hosts virtuales y directorios. Configura permisos adecuados en los archivos y carpetas del sitio web."
  },
  {
    question: "¿Cómo ejecutar un diagnóstico completo del hardware?",
    answer: "Usa herramientas como MemTest86 para RAM, CrystalDiskInfo para discos, Prime95 para CPU y FurMark para GPU. También puedes utilizar diagnósticos integrados del fabricante como Dell Diagnostics o HP PC Hardware Diagnostics."
  },
  {
    question: "¿Cómo establecer una conexión SSH segura?",
    answer: "Utiliza claves RSA en lugar de contraseñas, configura autenticación de dos factores, desactiva el acceso root directo, cambia el puerto por defecto (22) y usa herramientas como fail2ban para proteger contra ataques de fuerza bruta."
  },
  {
    question: "¿Cómo configurar un sistema RAID?",
    answer: "Ingresa a la configuración RAID de la BIOS/UEFI o usa software específico como Windows Storage Spaces. Selecciona el tipo de RAID (0, 1, 5, 10) según tus necesidades de rendimiento y redundancia."
  },
  {
    question: "¿Cómo crear una máquina virtual?",
    answer: "Instala software de virtualización como VirtualBox, VMware o Hyper-V. Crea una nueva máquina virtual, asigna recursos (RAM, CPU, disco), selecciona un sistema operativo e instálalo desde una imagen ISO."
  },
  {
    question: "¿Cómo recuperar datos de un disco duro dañado?",
    answer: "Si el disco aún es reconocido, usa software como TestDisk o R-Studio. En casos graves, considera servicios profesionales de recuperación de datos. Para discos con sectores defectuosos, herramientas como ddrescue pueden ayudar."
  },
  {
    question: "¿Cómo configurar un servidor DNS local?",
    answer: "Instala software como BIND9 o dnsmasq, configura archivos de zona para resolución de nombres interna, establece reenviadores para consultas externas y configura los clientes para usar tu servidor DNS."
  },
  {
    question: "¿Cómo utilizar PowerShell para administración de sistemas?",
    answer: "PowerShell es una herramienta avanzada para administración. Usa comandos como Get-Process, Get-Service, Get-EventLog, etc. Aprende a crear scripts con bucles, condiciones y manejo de errores para automatizar tareas."
  },
  
  // Hardware y dispositivos
  {
    question: "¿Cómo limpiar correctamente el interior de mi PC?",
    answer: "Apaga y desconecta la PC, usa aire comprimido para eliminar polvo, un cepillo antiestático para áreas difíciles y alcohol isopropílico para contactos. Nunca uses aspiradoras comunes por riesgo de estática."
  },
  {
    question: "¿Cómo actualizar la BIOS de mi placa base?",
    answer: "Visita el sitio web del fabricante, descarga la versión compatible, sigue las instrucciones específicas (generalmente usando una utilidad de actualización o una unidad USB). No interrumpas el proceso para evitar daños permanentes."
  },
  {
    question: "¿Cómo instalar más RAM en mi computadora?",
    answer: "Verifica el tipo compatible (DDR3, DDR4, etc.), apaga el equipo, descarga electricidad estática, localiza los slots de RAM, alinea la memoria correctamente y presiona hasta que encaje. Enciende y verifica que sea reconocida."
  },
  {
    question: "¿Cómo cambiar el disco duro por un SSD?",
    answer: "Crea una imagen del disco actual, instala físicamente el SSD, restaura la imagen o reinstala el sistema operativo, y configura el SSD como dispositivo de arranque en la BIOS."
  },
  {
    question: "¿Cómo conectar un dispositivo Bluetooth?",
    answer: "Activa Bluetooth en ambos dispositivos, en Windows ve a Configuración > Dispositivos > Bluetooth, haz clic en 'Agregar Bluetooth u otro dispositivo', selecciona el dispositivo y sigue las instrucciones de emparejamiento."
  },
  {
    question: "¿Cómo calibrar la pantalla táctil?",
    answer: "En Windows, busca 'Calibrar' en el menú inicio, abre 'Calibrar la pantalla para entrada manuscrita o táctil' y sigue las instrucciones tocando los puntos indicados en la secuencia correcta."
  },
  {
    question: "¿Cómo instalar una tarjeta gráfica nueva?",
    answer: "Apaga y desconecta el PC, retira la tarjeta antigua (si hay), inserta la nueva en la ranura PCIe, conecta los cables de alimentación necesarios, cierra el gabinete e instala los drivers más recientes."
  },
  {
    question: "¿Cómo configurar un disco duro externo?",
    answer: "Conecta el disco, si no se reconoce automáticamente, ve al Administrador de discos, inicializa el disco y crea una partición. Asigna una letra de unidad y formato (generalmente NTFS para Windows o exFAT para compatibilidad)."
  },
  {
    question: "¿Cómo diagnosticar fallos en la fuente de alimentación?",
    answer: "Síntomas como apagados aleatorios, no encender o ruidos extraños pueden indicar problemas. Usa un multímetro para medir voltajes o un tester específico para fuentes. En caso de duda, prueba con otra fuente conocida."
  },
  {
    question: "¿Cómo configurar múltiples usuarios en Windows?",
    answer: "Ve a Configuración > Cuentas > Familia y otros usuarios > Agregar otra persona. Puedes crear cuentas locales o vinculadas a Microsoft, y asignar privilegios de administrador si es necesario."
  },
  
  // Software y aplicaciones
  {
    question: "¿Cómo instalar Linux junto a Windows (dual boot)?",
    answer: "Crea particiones libres desde Windows, arranca desde el medio de instalación de Linux, selecciona 'Instalar junto a Windows', elige las particiones correctas y el gestor de arranque (GRUB) detectará ambos sistemas."
  },
  {
    question: "¿Cómo usar el Administrador de tareas eficientemente?",
    answer: "Abre con Ctrl+Shift+Esc, revisa el uso de recursos (CPU, RAM, disco), identifica aplicaciones problemáticas en 'Procesos', gestiona el inicio en 'Inicio' y monitorea el rendimiento en 'Rendimiento'."
  },
  {
    question: "¿Cómo activar Windows legalmente?",
    answer: "Compra una licencia oficial, ve a Configuración > Actualización y seguridad > Activación, ingresa la clave o vincula a tu cuenta Microsoft si ya has activado Windows en este dispositivo anteriormente."
  },
  {
    question: "¿Cómo crear un punto de restauración en Windows?",
    answer: "Busca 'Restaurar' en el menú inicio, abre 'Crear un punto de restauración', selecciona el disco, haz clic en 'Crear', ingresa una descripción y espera a que se complete."
  },
  {
    question: "¿Cómo usar el Modo seguro en Windows?",
    answer: "Reinicia manteniendo F8 (sistemas antiguos) o ve a Configuración > Actualización y seguridad > Recuperación > Inicio avanzado > Reiniciar ahora, luego selecciona Solucionar problemas > Opciones avanzadas > Configuración de inicio."
  },
  {
    question: "¿Cómo cifrar archivos o carpetas sensibles?",
    answer: "En Windows Pro, usa BitLocker o EFS (Sistema de archivos de cifrado). En otras versiones, utiliza software como VeraCrypt para crear volúmenes cifrados o 7-Zip para archivos individuales con contraseña."
  },
  {
    question: "¿Cómo configurar un servidor Minecraft?",
    answer: "Descarga el software del servidor oficial, configura el archivo server.properties, abre puertos en el router (típicamente 25565), asigna suficiente RAM al servidor y configura los permisos y mods deseados."
  },
  {
    question: "¿Cómo usar comandos básicos de terminal/CMD?",
    answer: "Aprende comandos como 'dir' (listar archivos), 'cd' (cambiar directorio), 'ipconfig' (ver configuración IP), 'ping' (probar conectividad), 'tasklist' (ver procesos) y 'shutdown' (apagar el sistema)."
  },
  {
    question: "¿Cómo configurar un servidor Plex para streaming casero?",
    answer: "Instala Plex Media Server, configura bibliotecas apuntando a tus archivos multimedia, crea usuarios, ajusta la calidad de streaming y configura el acceso remoto si deseas ver contenido fuera de casa."
  },
  {
    question: "¿Cómo crear accesos directos personalizados?",
    answer: "Haz clic derecho en el escritorio > Nuevo > Acceso directo, introduce la ruta del programa o comando, asigna un nombre y un icono personalizado si lo deseas."
  }

];
