const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_29_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM4LFxuICAgICAgICA4NixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYnNSU3l2Smk5b21Cc1Y1ZkkvRFdmZlBTTCs3QWlUdmxkUllaMGtOWWNxOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWxQWXpqTFNRY2E5VlFSWHAtSW5LQVwiLFxuICBcInBob25lSWRcIjogXCIxOGRhYzA0Mi00NDM3LTQ3MzMtODA3My0zZTk0ZmJiNmJjMjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICA5OCxcbiAgICAgIDI0MSxcbiAgICAgIDE1NCxcbiAgICAgIDIxMixcbiAgICAgIDE4MCxcbiAgICAgIDcwLFxuICAgICAgMjUzLFxuICAgICAgNjUsXG4gICAgICAxMDQsXG4gICAgICAyMjUsXG4gICAgICAyNTAsXG4gICAgICAyMjEsXG4gICAgICAyMTIsXG4gICAgICA5NCxcbiAgICAgIDk5LFxuICAgICAgMTQ1LFxuICAgICAgNzMsXG4gICAgICAyMTksXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMjgsXG4gICAgICAxNTksXG4gICAgICA4OCxcbiAgICAgIDg3LFxuICAgICAgMjQ4LFxuICAgICAgMTIwLFxuICAgICAgMTgxLFxuICAgICAgMzEsXG4gICAgICAxMzgsXG4gICAgICA0MixcbiAgICAgIDcxLFxuICAgICAgMTk4LFxuICAgICAgMTQ5LFxuICAgICAgNTEsXG4gICAgICAxNTYsXG4gICAgICA2OCxcbiAgICAgIDI4LFxuICAgICAgMjMxLFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxNTNPME5FSnVSckxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjVGMTB6R0w4Vk1ydnBORmZwQ21qRnhSb2JpaE5JYzlIT3hWTmhvcFJHcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoVWxuWkMydnNJbW9LM3F6ajRNVnlzZGN6RW1SekluQmpwYmY2U1VWNFFkSkZjUXlVN3V3Vis1Ty9xSVRrK3U5NUErTlM5bWVrakNlMzdPdEVZZmlqZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUcEc4aFJqaG5hT0swQ3RzaXdHY21JV3VpaENsOTA0ODFldVBLQVlUeGNMY09KNE9VaUNxdVYzTkNsZmdPcVYwUTNMeDc2QzVzZG15QzByM3ZMWklDQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDQzMDM4NjQ6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIaSBsZXQgRnVja1wiLFxuICAgIFwibGlkXCI6IFwiMTAzMTI2NDU5NzQ4NDI4OjMzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NDMwMzg2NDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzODc3NDJcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
