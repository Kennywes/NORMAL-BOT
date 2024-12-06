const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUbY+qOBj9L/2qc0UBBZNJljfBQUcRZZTNZlNokcqrpaA48b9vmJfcySb37iyfmpae5/Sc8zyvIC9IhW3cgukrKClpIMPdkrUlBlOg1lGEKegDBBkEU8DNTbX2NBSb1PaapCayobnbVhwMtEocWWTjJ5LdWD7nzR/BvQ/KOkhJ+BtAUcpXt/CUlnbrC7tJb2813rmsrN7+dh4HzibdXcNgJKS6KzyCe4cICSX50ShjnGEKUxu3a0jo9+iT2SROdh6OZ+JTIY0GfNjKB49r96exp6wS37ut00Jm+0W6+x790N/dPLXY2RvZdT1HyqpNeNx7t/iiryItW8csWq7zei+l1Tv9ihxzjOYI54yw9tu6C6ZnJakytsdb/lk8uLpn+W3MjS62QMTbhh2XgbJr9/NFUnyP+Jm8yOmO9oacbg3sbOaP7ACLhx3zBmpw9cvzJk/p4XSQXOcr8TX9zEryf3RvDYaHnCf2RKtx6PWWjhIBNRWjpyvuRZS3ajuyktUeG9L36B82hwAGbMYdS00qFWTVhszmlluOTgIZFkMZCtxszAXR8IvukNX0dyxPVcWN2rmGDIMuNDezh7FXinstO8ul05RD0lz0tXlZI/PFGYw4a3ndnldbu8qf9zPBORs33dudpDpZJauUNeoBnbgodh7fXpTgdo7AdHjvA4qPpGIUMlLk3Z447gOIGheHFLM3dYFahlHErV/4jJ+rY6HJ8oveK4NltriiVRyeA9UhSNEakUmPoA9KWoS4qjCySMUK2i5xVcEjrsD0z7/6IMdX9u5bV40f9kFEaMV2eV2mBUSfpn4ewjAs6py5bR5q3QJTMOV+bmPGSH6sOhnrHNIwJg3WYsgqMI1gWuF7HyDckBB3eOAJeWlbXP/eyrZ6mqTG6Hw6MqejHBf5+y9SwE0mSIYPMh+iB2HCSw8SCsYPk3HAh3wYyaMJBn1APlqmu/NLBwdI0kfZrt0qg+BEV81hCV+aXYouH+PoXXpMMQJTRmvcBwEMk7rcFgnOf4Mr731ttBlY/kxdLjwTLU5oZjrL8yG4fMF9txRMX3+OKa1AHd52byzUgyGDPsjeEki6l4uczI9ESRb5yZTn/6h+XDodYVn+yDHrYD807y4gzCBJKzAF2hMUbo1kGauz3tLCNBXnqGhHBfz06DPr72HSE4fzBa2JmHJxRSsd5sdi+SwF2pr0NrzJB4NTdCvy+ZJ7C9O/QTo52vmljmdspj0ZlO6vhMSbAzsuaKirpDpbRh1Bzm1qj6JovIeuS2xLsvweP9dMmWvmC2MyLCTFg8zObrGqz/biQlceu2rvWflaLDWLMA6t/GVcNJfGCjxHM5TdrQ4zO14Fq4NjD54g3rAbXfB+fVTNWbApY7n3fN3a6s3kTDa3X1p8SIVhub6ai/zE++SjC9+mQPoxfclbg7x+JCsi+G2Y5bBz6D+8+Zpx7t7/AvExHX+RI9URjWcTK5SfOEuj3ojIF2xdj8zLSWgSdGWjgcBL46dWf16D+/2vPihTyKKCZmAKYI5oQRDogxRWTPnZpluS4YrBrATT4YTnhTEnTIZ9kLVKWboMss/uBkr3PbMFuP8DecyEBvgHAAA=',
    PREFIXE: process.env.PREFIX || "<",
    OWNER_NAME: process.env.OWNER_NAME || "𓄂⍣⃝𝐆𝚯𝐃🌹✮͢≛⃝𝐊𝚵𝚴𝚸𝚫𝐂𝚮𝚰🪽𝄟✮⃝👑",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "50932589537",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || '𓄂⍣⃝𝐆𝚯𝐃≛⃝𝐊𝚵𝚴𝚸𝚫𝐂𝚮𝚰',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '2' ,
    ETAT : process.env.PRESENCE || '3',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

