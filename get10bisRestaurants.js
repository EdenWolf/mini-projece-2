const axios = require("axios").default;
var fs = require("fs");

// URLs by cities from Wolt
const urls = [
  // Even Yehuda
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655386742189&cityId=54&streetId=49720&houseNumber=3&addressKey=54-49720-3&deliveryMethod=delivery",
  // Or Yehuda
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655386820003&cityId=1&streetId=7258&houseNumber=10&addressKey=1-7258-10&deliveryMethod=delivery",
  // Or Akiva
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655386853263&cityId=78&streetId=20323&houseNumber=17&addressKey=78-20323-17&deliveryMethod=delivery",
  // Azor
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655386895286&cityId=2&streetId=7015&houseNumber=44&addressKey=2-7015-44&deliveryMethod=delivery",
  // Airport City
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655387023458&cityId=70&streetId=16552&houseNumber=1&addressKey=70-16552-1&deliveryMethod=delivery",
  // Eilat
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655387084795&cityId=52&streetId=14015&houseNumber=4&addressKey=52-14015-4&deliveryMethod=delivery",
  // Ashdod
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655387108922&cityId=53&streetId=14948&houseNumber=15&addressKey=53-14948-15&deliveryMethod=delivery",
  // Ashkelon
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655387134295&cityId=85&streetId=50070&houseNumber=12&addressKey=85-50070-12&deliveryMethod=delivery",
  // Baka El-Arabiya
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655387164671&cityId=38048&streetId=47213&houseNumber=1&addressKey=38048-47213-1&deliveryMethod=delivery",
  // Beer Sheva
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655387198405&cityId=51&streetId=13338&houseNumber=69&addressKey=51-13338-69&deliveryMethod=delivery",
  // Beit Shemesh
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=false&timestamp=1655387221307&cityId=100&streetId=51959&houseNumber=1&addressKey=100-51959-1&deliveryMethod=delivery",
  // Bney Brak
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387268097&cityId=3&streetId=26223&houseNumber=12&addressKey=3-26223-12&deliveryMethod=delivery",
  // Bney Dror
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387282844&cityId=820&streetId=46967&houseNumber=5&addressKey=820-46967-5&deliveryMethod=delivery",
  // Binyamina Givat Ada
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387310244&cityId=138&streetId=20232&houseNumber=2&addressKey=138-20232-2&deliveryMethod=delivery",
  // Bat Yam
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387338941&cityId=4&streetId=6799&houseNumber=49&addressKey=4-6799-49&deliveryMethod=delivery",
  // Givat Shmuel
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387358634&cityId=44&streetId=10152&houseNumber=11&addressKey=44-10152-11&deliveryMethod=delivery",
  // Givataim
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387379394&cityId=5&streetId=47829&houseNumber=17&addressKey=5-47829-17&deliveryMethod=delivery",
  // Gadera
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387402405&cityId=97&streetId=17490&houseNumber=6&addressKey=97-17490-6&deliveryMethod=delivery",
  // Gan Yavne
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387420394&cityId=649&streetId=46642&houseNumber=2&addressKey=649-46642-2&deliveryMethod=delivery",
  // Ganey Tikva
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387446183&cityId=6&streetId=7130&houseNumber=23&addressKey=6-7130-23&deliveryMethod=delivery",
  // Dimona
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387467637&cityId=84&streetId=46485&houseNumber=2&addressKey=84-46485-2&deliveryMethod=delivery",
  // Hod Hasharon
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387489193&cityId=7&streetId=5747&houseNumber=30&addressKey=7-5747-30&deliveryMethod=delivery",
  // Hertzelia
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387512329&cityId=9&streetId=2658&houseNumber=1&addressKey=9-2658-1&deliveryMethod=delivery",
  // Zeitan
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387546793&cityId=1127&streetId=65136&houseNumber=10&addressKey=1127-65136-10&deliveryMethod=delivery",
  // Zichron Yaakov
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387560389&cityId=105&streetId=22165&houseNumber=4&addressKey=105-22165-4&deliveryMethod=delivery",
  // Hadera
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387585780&cityId=90&streetId=18576&houseNumber=13&addressKey=90-18576-13&deliveryMethod=delivery",
  // Hulon
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387638550&cityId=10&streetId=23447&houseNumber=12&addressKey=10-23447-12&deliveryMethod=delivery",
  // Heifa
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387653516&cityId=47&streetId=10477&houseNumber=44&addressKey=47-10477-44&deliveryMethod=delivery",
  // Harutzim
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387672281&cityId=1234&streetId=22930&houseNumber=10&addressKey=1234-22930-10&deliveryMethod=delivery",
  // Harish
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387739540&cityId=38112&streetId=38034&houseNumber=4&addressKey=38112-38034-4&deliveryMethod=delivery",
  // Tveria
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387757222&cityId=114&streetId=46029&houseNumber=2&addressKey=114-46029-2&deliveryMethod=delivery",
  // Tirat Carmel
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387820368&cityId=65&streetId=65370&houseNumber=15&addressKey=65-65370-15&deliveryMethod=delivery",
  // Yavne
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387858013&cityId=50&streetId=49069&houseNumber=9&addressKey=50-49069-9&deliveryMethod=delivery",
  // Yehud
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387876251&cityId=11&streetId=6709&houseNumber=50&addressKey=11-6709-50&deliveryMethod=delivery",
  // Yokneam
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387897652&cityId=63&streetId=20917&houseNumber=5&addressKey=63-20917-5&deliveryMethod=delivery",
  // Jerusalem
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387923091&cityId=49&streetId=12055&houseNumber=228&addressKey=49-12055-228&deliveryMethod=delivery",
  // Kefar Sava
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387942802&cityId=12&streetId=2409&houseNumber=13&addressKey=12-2409-13&deliveryMethod=delivery",
  // Kfar Qasim
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387969652&cityId=177&streetId=69420&houseNumber=29&addressKey=177-69420-29&deliveryMethod=delivery",
  // Karmiel
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655387990758&cityId=91&streetId=51235&houseNumber=3&addressKey=91-51235-3&deliveryMethod=delivery",
  // Lod
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388019437&cityId=64&streetId=22270&houseNumber=16&addressKey=64-22270-16&deliveryMethod=delivery",
  // Mevaseret Zion
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388037449&cityId=1232&streetId=44594&houseNumber=32&addressKey=1232-44594-32&deliveryMethod=delivery",
  // Modiim Maccabim Reut
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388062929&cityId=30&streetId=8869&houseNumber=76&addressKey=30-8869-76&deliveryMethod=delivery",
  // Maale Adumim
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388100181&cityId=1595&streetId=24179&houseNumber=32&addressKey=1595-24179-32&deliveryMethod=delivery",
  // Nahariyya
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388129041&cityId=154&streetId=20822&houseNumber=86&addressKey=154-20822-86&deliveryMethod=delivery",
  // Neve Ilan
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388162424&cityId=140&streetId=66149&houseNumber=48&addressKey=140-66149-48&deliveryMethod=delivery",
  // Neve Yamin
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388187368&cityId=92&streetId=17364&houseNumber=1&addressKey=92-17364-1&deliveryMethod=delivery",
  // Nof Hagalil
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388211387&cityId=126&streetId=19115&houseNumber=10&addressKey=126-19115-10&deliveryMethod=delivery",
  // Ness Ziona
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388240721&cityId=13&streetId=5510&houseNumber=7&addressKey=13-5510-7&deliveryMethod=delivery",
  // Nazareth
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388272578&cityId=125&streetId=19449&houseNumber=11&addressKey=125-19449-11&deliveryMethod=delivery",
  // Nesher
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388296947&cityId=48&streetId=11162&houseNumber=9&addressKey=48-11162-9&deliveryMethod=delivery",
  // Netivot
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388316012&cityId=151&streetId=43722&houseNumber=104&addressKey=151-43722-104&deliveryMethod=delivery",
  // Netanya
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388336535&cityId=14&streetId=54859&houseNumber=11&addressKey=14-54859-11&deliveryMethod=delivery",
  // Omer
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388362932&cityId=106&streetId=18276&houseNumber=16&addressKey=106-18276-16&deliveryMethod=delivery",
  // Einat
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388386488&cityId=146&streetId=21979&houseNumber=1&addressKey=146-21979-1&deliveryMethod=delivery",
  // Afula
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388429378&cityId=118&streetId=52613&houseNumber=4&addressKey=118-52613-4&deliveryMethod=delivery",
  // Pardes Hanna Karkur
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388448657&cityId=87&streetId=17111&houseNumber=4&addressKey=87-17111-4&deliveryMethod=delivery",
  // Pardesiya
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388478066&cityId=139&streetId=42898&houseNumber=37&addressKey=139-42898-37&deliveryMethod=delivery",
  // Petach Tikva
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388503059&cityId=17&streetId=1279&houseNumber=4&addressKey=17-1279-4&deliveryMethod=delivery",
  // Kadima Zoran
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388527711&cityId=56&streetId=66218&houseNumber=9&addressKey=56-66218-9&deliveryMethod=delivery",
  // Caesarea
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388547671&cityId=77&streetId=57609&houseNumber=13&addressKey=77-57609-13&deliveryMethod=delivery",
  // Kiryat Ono
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388626419&cityId=18&streetId=48186&houseNumber=2&addressKey=18-48186-2&deliveryMethod=delivery",
  // Kiryat Ata
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388653849&cityId=57&streetId=15712&houseNumber=2&addressKey=57-15712-2&deliveryMethod=delivery",
  // Kiryat Gat
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388674301&cityId=130&streetId=20081&houseNumber=201&addressKey=130-20081-201&deliveryMethod=delivery",
  // Kiryat Yearim
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388693632&cityId=1299&streetId=24346&houseNumber=10&addressKey=1299-24346-10&deliveryMethod=delivery",
  // Kiryat Motzkin
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388716830&cityId=61&streetId=64633&houseNumber=3&addressKey=61-64633-3&deliveryMethod=delivery",
  // Kiryat Ekron
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388741448&cityId=142&streetId=20549&houseNumber=31&addressKey=142-20549-31&deliveryMethod=delivery",
  // Kiryat Shemona
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388764705&cityId=83&streetId=17020&houseNumber=8&addressKey=83-17020-8&deliveryMethod=delivery",
  // Rosh Haayin
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388788466&cityId=37&streetId=9245&houseNumber=6&addressKey=37-9245-6&deliveryMethod=delivery",
  // Rishon Lezion
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388814292&cityId=19&streetId=3299&houseNumber=16&addressKey=19-3299-16&deliveryMethod=delivery",
  // Rahat
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388837052&cityId=1321&streetId=68756&houseNumber=3&addressKey=1321-68756-3&deliveryMethod=delivery",
  // Rehovot
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388857058&cityId=20&streetId=7704&houseNumber=10&addressKey=20-7704-10&deliveryMethod=delivery",
  // Ramla
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388879425&cityId=93&streetId=51457&houseNumber=10&addressKey=93-51457-10&deliveryMethod=delivery",
  // Ramat Gan
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388897630&cityId=21&streetId=1743&houseNumber=11&addressKey=21-1743-11&deliveryMethod=delivery",
  // Ramat Hasharon
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388918008&cityId=22&streetId=6572&houseNumber=14&addressKey=22-6572-14&deliveryMethod=delivery",
  // Ramat Yishai
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388935693&cityId=119&streetId=18790&houseNumber=32&addressKey=119-18790-32&deliveryMethod=delivery",
  // Raanana
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388960589&cityId=23&streetId=3724&houseNumber=11&addressKey=23-3724-11&deliveryMethod=delivery",
  // Sderot
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655388982014&cityId=1235&streetId=22972&houseNumber=30&addressKey=1235-22972-30&deliveryMethod=delivery",
  // Shoham
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655389002955&cityId=79&streetId=49887&houseNumber=4&addressKey=79-49887-4&deliveryMethod=delivery",
  // Shfayim
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655389027582&cityId=66&streetId=16514&houseNumber=1&addressKey=66-16514-1&deliveryMethod=delivery",
  // Tel Aviv
  "https://www.10bis.co.il/NextApi/searchRestaurants?shoppingCartGuid=81961fee-7f52-4279-a863-9169d386d341&culture=he-IL&uiCulture=he&isMobileDevice=true&timestamp=1655389051049&cityId=24&streetId=193&houseNumber=9&addressKey=24-193-9&deliveryMethod=delivery",
];

// get data from url
async function getData(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error.codes);
  }
}

// get the data from the urls array
async function getAllData() {
  const data = [];

  await Promise.all(
    urls.map(async (url) => await getData(url).then((res) => data.push(res)))
  );

  return data;
}

// get the restaurants from the data
async function getRestaurants() {
  const data = await getAllData();

  const restaurantsList = [].concat.apply(
    [],
    data.map((item) => item.data.Data.restaurantsList)
  );

  const myData = restaurantsList.map((item) => ({
    track_id: `${item.restaurantId}`,
    title: item.localizationNames.he || item.localizationNames.en,
    filters: item.restaurantCuisineKeysList,
    image: item.profileImageUrl,
    address: item.restaurantAddress,
    location: [item.longitude, item.latitude],
    name: item.restaurantName,
  }));

  console.log(myData.length);

  let restaurants = JSON.stringify(myData);
  fs.writeFileSync("10birRestaurantsData.json", restaurants);
}

getRestaurants();
