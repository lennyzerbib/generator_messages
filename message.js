// messages.js - Gestion des messages multilingues

/**
 * Génère le message de bienvenue COURT selon la langue choisie
 * @param {Object} params - Les paramètres du message
 * @param {string} params.language - Code langue (fr, en, es, it, ru)
 * @param {string} params.name - Nom du client
 * @param {string} params.villa - Nom de la villa
 * @param {string} params.adresse - Adresse complète
 * @param {string} params.appartment - Nom de l'appartement
 * @param {string} params.detail_appart - Détails (étage, orientation)
 * @param {string} params.digicodeEntree - Code d'accès immeuble
 * @param {string} params.digicodeAppartement - Code d'accès appartement
 * @param {string} params.dateArrivee - Date d'arrivée
 * @param {string} params.dateDepart - Date de départ
 * @param {string} params.wifi - Nom du réseau WiFi
 * @param {string} params.password_wifi - Mot de passe WiFi
 * @param {string} params.previewUrl - URL vers les informations complètes
 * @returns {string} Le message formaté court
 */
function getWelcomeMessageMini(params) {
  const {
    language,
    name,
    villa,
    adresse,
    appartment,
    detail_appart,
    digicodeEntree,
    digicodeAppartement,
    dateArrivee,
    dateDepart,
    wifi,
    password_wifi,
    previewUrl
  } = params;

  // Icons
  const houseIcon = '\u{1F3E0}';      // 🏠
  const pinIcon = '\u{1F4CD}';        // 📍
  const doorIcon = '\u{1F6AA}';       // 🚪
  const lockIcon = '\u{1F510}';       // 🔐
  const keyIcon = '\u{1F511}';        // 🔑
  const calendarIcon = '\u{1F4C5}';   // 📅
  const wifiIcon = '\u{1F4F6}';       // 📶
  const infoIcon = '\u{2139}\uFE0F';  // ℹ️
  const pointIcon = '\u{1F449}';      // 👉

  // Message court en français
  if (language === 'fr') {
    return `Bonjour ${name},

Bienvenue à ${villa} Cannes ! ${houseIcon}

${pinIcon} Adresse : ${adresse}
${doorIcon} Appartement : ${appartment}, ${detail_appart}

${lockIcon} Codes d'accès :
• Immeuble : ${digicodeEntree} #
• Appartement : ${digicodeAppartement} ${lockIcon}

${calendarIcon} Dates :
• Arrivée : ${dateArrivee}
• Départ : ${dateDepart}

${wifiIcon} WiFi : ${wifi}
${keyIcon} Mot de passe : ${password_wifi}

${infoIcon} Toutes les informations détaillées (instructions, règlement, contact) :
${pointIcon} ${previewUrl}

Bon séjour !
L'équipe ${villa}`;
  }

  // Message court en anglais
  if (language === 'en') {
    return `Hello ${name},

Welcome to ${villa} Cannes! ${houseIcon}

${pinIcon} Address: ${adresse}
${doorIcon} Apartment: ${appartment}, ${detail_appart}

${lockIcon} Access codes:
• Building: ${digicodeEntree} #
• Apartment: ${digicodeAppartement} ${lockIcon}

${calendarIcon} Dates:
• Arrival: ${dateArrivee}
• Departure: ${dateDepart}

${wifiIcon} WiFi: ${wifi}
${keyIcon} Password: ${password_wifi}

${infoIcon} All detailed information (instructions, rules, contact):
${pointIcon} ${previewUrl}

Enjoy your stay!
${villa} Team`;
  }

  // Message court en espagnol
  if (language === 'es') {
    return `Hola ${name},

¡Bienvenido/a a ${villa} Cannes! ${houseIcon}

${pinIcon} Dirección: ${adresse}
${doorIcon} Apartamento: ${appartment}, ${detail_appart}

${lockIcon} Códigos de acceso:
• Edificio: ${digicodeEntree} #
• Apartamento: ${digicodeAppartement} ${lockIcon}

${calendarIcon} Fechas:
• Llegada: ${dateArrivee}
• Salida: ${dateDepart}

${wifiIcon} WiFi: ${wifi}
${keyIcon} Contraseña: ${password_wifi}

${infoIcon} Toda la información detallada (instrucciones, normas, contacto):
${pointIcon} ${previewUrl}

¡Buen viaje!
Equipo ${villa}`;
  }

  // Message court en italien
  if (language === 'it') {
    return `Caro/a ${name},

Benvenuto/a a ${villa} Cannes! ${houseIcon}

${pinIcon} Indirizzo: ${adresse}
${doorIcon} Appartamento: ${appartment}, ${detail_appart}

${lockIcon} Codici di accesso:
• Edificio: ${digicodeEntree} #
• Appartamento: ${digicodeAppartement} ${lockIcon}

${calendarIcon} Date:
• Arrivo: ${dateArrivee}
• Partenza: ${dateDepart}

${wifiIcon} WiFi: ${wifi}
${keyIcon} Password: ${password_wifi}

${infoIcon} Tutte le informazioni dettagliate (istruzioni, regole, contatto):
${pointIcon} ${previewUrl}

Buon soggiorno!
Team ${villa}`;
  }

  // Message court en russe
  if (language === 'ru') {
    return `Уважаемый(ая) ${name},

Добро пожаловать в ${villa} Cannes! ${houseIcon}

${pinIcon} Адрес: ${adresse}
${doorIcon} Апартаменты: ${appartment}, ${detail_appart}

${lockIcon} Коды доступа:
• Здание: ${digicodeEntree} #
• Апартаменты: ${digicodeAppartement} ${lockIcon}

${calendarIcon} Даты:
• Заезд: ${dateArrivee}
• Выезд: ${dateDepart}

${wifiIcon} WiFi: ${wifi}
${keyIcon} Пароль: ${password_wifi}

${infoIcon} Вся подробная информация (инструкции, правила, контакты):
${pointIcon} ${previewUrl}

Приятного пребывания!
Команда ${villa}`;
  }

  return '';
}

/**
 * Génère le message de bienvenue COMPLET selon la langue choisie
 * @param {Object} params - Les paramètres du message
 * @param {string} params.language - Code langue (fr, en, es, it, ru)
 * @param {string} params.name - Nom du client
 * @param {string} params.villa - Nom de la villa
 * @param {string} params.adresse - Adresse complète
 * @param {string} params.appartment - Nom de l'appartement
 * @param {string} params.detail_appart - Détails (étage, orientation)
 * @param {string} params.digicodeEntree - Code d'accès immeuble
 * @param {string} params.digicodeAppartement - Code d'accès appartement
 * @param {string} params.dateArrivee - Date d'arrivée
 * @param {string} params.dateDepart - Date de départ
 * @param {string} params.wifi - Nom du réseau WiFi
 * @param {string} params.password_wifi - Mot de passe WiFi
 * @returns {string} Le message formaté complet
 */
function getWelcomeMessage(params) {
  const {
    language,
    name,
    villa,
    adresse,
    appartment,
    detail_appart,
    digicodeEntree,
    digicodeAppartement,
    dateArrivee,
    dateDepart,
    wifi,
    password_wifi
  } = params;

  const lockIcon = '\u{1F510}';

  // Message en français
  if (language === 'fr') {
    return `Bonjour ${name},

Nous avons l'immense plaisir de vous accueillir dans notre résidence, la ${villa} Cannes!
Nous souhaitons que votre séjour se déroule de manière des plus agréables. Permettez-nous de vous fournir toutes les informations importantes lors de votre séjour :

— Adresse: ${adresse}
— Appartement: ${appartment}, ${detail_appart}

— Code d'accès à l'immeuble: ${digicodeEntree} #
— Code d'accès à votre apt: ${digicodeAppartement} ${lockIcon}

— Date d'Arrivée: ${dateArrivee}
— Date de Départ: ${dateDepart}

— Wifi: ${wifi}
— Mot de Passe Wifi: ${password_wifi}

Pour refermer : faire le code et appuyer sur le cadenas 5 secondes
Avant d'entrer votre code d'accès pour accéder à l'appartement, veuillez patienter jusqu'à ce que le clavier numérique s'illumine, s'il vous plaît. Cela indique que le clavier est prêt à recevoir votre code.

Afin d'assurer votre confort et votre satisfaction, nous tenons à vous rappeler les points suivants :
  1. Entretien : Nous vous prions de bien vouloir prendre soin de l'appartement pendant toute la durée de votre séjour. Lors de votre départ, nous vous saurions gré de bien vouloir effectuer la vaisselle, vider les poubelles et laisser l'appartement dans l'état où vous l'avez trouvé.
  2. Caution : Nous tenons à vous informer qu'une empreinte de votre carte bancaire sera réalisée lors de votre arrivée. Soyez assuré(e)(s) qu'aucun montant ne sera prélevé. Cette empreinte servira uniquement de garantie en cas de dommages éventuels.
  3. Respect du voisinage : Nous vous prions de faire preuve de courtoisie envers les autres résidents de la ${villa}. Afin de préserver la tranquillité de tous, veuillez éviter les nuisances sonores, en particulier après 22h.

Cher client, chère cliente, chers clients, nous sommes véritablement honorés de vous accueillir à la ${villa} Cannes.
Notre équipe reste à votre entière disposition pour répondre à vos questions et vous assister tout au long de votre séjour.
Profitez pleinement de votre expérience à la ${villa} Cannes. Avec nos salutations les plus respectueuses,

L'équipe de la ${villa} Cannes`;
  }

  // Message en anglais
  if (language === 'en') {
    return `Hello ${name},

We are delighted to welcome you to our residence, ${villa} Cannes!
We hope your stay will be as pleasant as possible. Please find below all the important information for your stay:

— Address: ${adresse}
— Apartment: ${appartment}, ${detail_appart}

— Building access code: ${digicodeEntree} #
— Your apartment access code: ${digicodeAppartement} ${lockIcon}

— Arrival Date: ${dateArrivee}
— Departure Date: ${dateDepart}

— Wifi : ${wifi}
— Wifi Password : ${password_wifi}

To close the door: enter the code and press the lock button for 5 seconds.
Before entering your access code to unlock the apartment door, please wait for the keypad to light up. This indicates that it is ready to receive your code.

To ensure your comfort and satisfaction, please note the following:
  1. Maintenance: We kindly ask you to take care of the apartment throughout your stay. Upon departure, please wash the dishes, empty the trash, and leave the apartment in the same condition in which you found it.
  2. Security deposit: Please note that a pre-authorization will be taken on your credit card upon arrival. Rest assured, no amount will be charged. This pre-authorization only serves as a guarantee in case of potential damages.
  3. Respect for neighbors: We kindly ask that you show consideration for the other residents of ${villa}. To preserve everyone's peace and quiet, please avoid excessive noise, especially after 10 p.m.

Dear guest(s), we are truly honored to welcome you to ${villa} Cannes.
Our team remains at your full disposal for any questions or assistance throughout your stay.
We wish you a wonderful experience at ${villa} Cannes.

Warm regards,
The ${villa} Cannes Team`;
  }

  // Message en espagnol
  if (language === 'es') {
    return `Hola ${name},

Tenemos el gran placer de darle la bienvenida a nuestra residencia, ${villa} Cannes!
Deseamos que su estancia sea lo más agradable posible. Permítanos proporcionarle toda la información importante para su estancia:

— Dirección: ${adresse}
— Apartamento: ${appartment}, ${detail_appart}

— Código de acceso al edificio: ${digicodeEntree} #
— Código de acceso a su apartamento: ${digicodeAppartement} ${lockIcon}

— Fecha de llegada: ${dateArrivee}
— Fecha de salida: ${dateDepart}

— Wifi: ${wifi}
— Contraseña del Wifi: ${password_wifi}

Para cerrar la puerta: introduzca el código y mantenga pulsado el botón del candado durante 5 segundos.
Antes de introducir su código de acceso para entrar en el apartamento, por favor espere a que el teclado numérico se ilumine. Esto indica que está listo para recibir su código.

Para garantizar su comodidad y satisfacción, queremos recordarle los siguientes puntos:
  1. Mantenimiento: Le rogamos cuidar del apartamento durante toda su estancia. Al marcharse, le agradeceríamos que lavara los platos, vaciara la basura y dejara el apartamento en el mismo estado en el que lo encontró.
  2. Depósito de garantía: Le informamos de que se realizará una preautorización en su tarjeta de crédito a su llegada. Le aseguramos que no se efectuará ningún cargo. Esta preautorización se utiliza únicamente como garantía en caso de posibles daños.
  3. Respeto al vecindario: Le pedimos que sea considerado(a) con los demás residentes de ${villa}. Para preservar la tranquilidad de todos, evite ruidos molestos, especialmente después de las 22:00.

Estimado/a cliente, estamos realmente honrados de darle la bienvenida a ${villa} Cannes.
Nuestro equipo queda a su entera disposición para responder a sus preguntas y asistirle durante toda su estancia.
Le deseamos una maravillosa experiencia en ${villa} Cannes.

Con nuestros más cordiales saludos,
El equipo de ${villa} Cannes`;
  }

  // Message en italien
  if (language === 'it') {
    return `Caro/a ${name},

Siamo estremamente lieti di darLe il benvenuto nella nostra residenza, ${villa} Cannes!
Desideriamo che il Suo soggiorno sia il più piacevole possibile. Permetta che Le forniamo tutte le informazioni importanti per la Sua permanenza:

— Indirizzo: ${adresse}
— Appartamento: ${appartment}, ${detail_appart}

— Codice di accesso all'edificio: ${digicodeEntree} #
— Codice di accesso al Suo appartamento: ${digicodeAppartement} ${lockIcon}

— Data di arrivo: ${dateArrivee}
— Data di partenza: ${dateDepart}

— Wifi: ${wifi}
— Password Wifi: ${password_wifi}

Per chiudere la porta: inserisca il codice e tenga premuto il pulsante del lucchetto per 5 secondi.
Prima di inserire il Suo codice di accesso per entrare nell'appartamento, attenda gentilmente che il tastierino numerico si illumini. Questo indica che è pronto a ricevere il codice.

Per garantirLe il massimo comfort e soddisfazione, La invitiamo a prendere nota dei seguenti punti:
  1. Manutenzione: La preghiamo di avere cura dell'appartamento durante tutto il soggiorno. Al momento della partenza, La ringrazieremmo se potesse lavare i piatti, svuotare la spazzatura e lasciare l'appartamento nelle stesse condizioni in cui lo ha trovato.
  2. Deposito cauzionale: La informiamo che, all'arrivo, verrà effettuata una pre-autorizzazione sulla Sua carta di credito. Le assicuriamo che non verrà addebitato alcun importo. La pre-autorizzazione serve esclusivamente come garanzia in caso di eventuali danni.
  3. Rispetto del vicinato: La preghiamo di mostrare cortesia nei confronti degli altri residenti di ${villa}. Per garantire la tranquilità di tutti, eviti rumori molesti, soprattutto dopo le 22:00.

Gentile cliente, siamo davvero onorati di accoglierLa presso ${villa} Cannes.
Il nostro team è a Sua completa disposizione per qualsiasi domanda o assistenza durante il Suo soggiorno.
Le auguriamo una splendida esperienza presso ${villa} Cannes.

Con i nostri più cordiali saluti,
Il team di ${villa} Cannes`;
  }

  // Message en russe
  if (language === 'ru') {
    return `Уважаемый(ая) ${name},

Мы рады приветствовать вас в нашей резиденции ${villa} Cannes!
Надеемся, что ваше пребывание будет максимально комфортным. Пожалуйста, ознакомьтесь с важной информацией, которая пригодится вам во время проживания:

— Адрес: ${adresse}
— Апартаменты: ${appartment}, ${detail_appart}

— Код доступа к зданию: ${digicodeEntree} #
— Код доступа в ваши апартаменты: ${digicodeAppartement} ${lockIcon}

— Дата заезда: ${dateArrivee}
— Дата выезда: ${dateDepart}

— Wi-Fi: ${wifi}
— Пароль Wi-Fi: ${password_wifi}

Чтобы закрыть дверь: введите код и удерживайте кнопку с замком 5 секунд.
Перед вводом кода для входа, пожалуйста, подождите, пока не загорится клавиатура — это означает, что она готова принять код.

Для вашего удобства и комфорта, просим обратить внимание на следующие моменты:
  1. Уборка: Пожалуйста, бережно относитесь к апартаментам на протяжении всего проживания. При выезде мы будем признательны, если вы помоете посуду, выбросите мусор и оставите апартаменты в таком же состоянии, в каком они были при заселении.
  2. Депозит: Обращаем ваше внимание, что при заселении будет выполнена предварительная авторизация на вашей банковской карте. Денежные средства списаны не будут. Эта операция служит лишь гарантией на случай возможного ущерба.
  3. Тишина и уважение к соседям: Просим соблюдать тишину и уважать других жителей ${villa}. Пожалуйста, избегайте шума, особенно после 22:00.

Уважаемые гости, для нас большая честь принимать вас в ${villa} Cannes.
Наша команда всегда к вашим услугам и готова помочь вам в любое время.
Желаем вам приятного пребывания в ${villa} Cannes!

С уважением,
Команда ${villa} Cannes`;
  }

  // Par défaut, retourner le message en français
  return '';
}

// Exporter les fonctions pour l'utiliser dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getWelcomeMessage, getWelcomeMessageMini };
}