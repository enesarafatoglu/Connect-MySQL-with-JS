const mysql2 = require("mysql2");

// Veritabanı bağlantısı oluşturma
const connection = mysql2.createConnection({
  host: "localhost", // MySQL sunucu adresi
  user: "kullanici_adi", // MySQL kullanıcı adı
  password: "parola", // MySQL şifre
  database: "veritabani_adi", // Kullanmak istediğiniz veritabanının adı
});

// Bağlantıyı açma
connection.connect((err) => {
  if (err) {
    console.error("Bağlantı hatası: " + err.stack);
    return;
  }
  console.log("MySQL veritabanına başarıyla bağlandı.");
});

// Bağlantıyı kapatma
connection.end((err) => {
  if (err) {
    console.error("Kapatma hatası: " + err.stack);
    return;
  }
  console.log("MySQL veritabanı bağlantısı kapatıldı.");
});

/* veya 

// Bağlantıyı açma
try {
  connection.connect();
  console.log('MySQL veritabanına başarıyla bağlandı.');
} catch (err) {
  console.error('Bağlantı hatası: ' + err.stack);
}

// Bağlantıyı kapatma
try {
  connection.end();
  console.log('MySQL veritabanı bağlantısı kapatıldı.');
} catch (err) {
  console.error('Kapatma hatası: ' + err.stack);
}

*/
