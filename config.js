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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_34_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibWlDalBhZ2FZVGZGY2d6bDdWd3VPSFducUJZeTZLTjJwazMyZDA5ZzRmWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDg3NjE5ODU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQzFCQjMwRUU0MUJGNzAyODFCQzlCQjUxMjg1MDRDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNTkyMzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUXZpT1JhVHRUX3FjYk9HVTRjaWt4Z1wiLFxuICBcInBob25lSWRcIjogXCIwMDY1MjM3ZC0xZTNiLTQzYmYtYmZhZi04NzVhMDI2OWFjMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxNzAsXG4gICAgICAxNDgsXG4gICAgICAyMjAsXG4gICAgICAxNDgsXG4gICAgICAyMDQsXG4gICAgICAxMixcbiAgICAgIDk5LFxuICAgICAgMjQ0LFxuICAgICAgODUsXG4gICAgICAyMCxcbiAgICAgIDE1OCxcbiAgICAgIDEzNyxcbiAgICAgIDQ3LFxuICAgICAgMjE5LFxuICAgICAgNDcsXG4gICAgICAxNzQsXG4gICAgICA3OSxcbiAgICAgIDc0LFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMTA4LFxuICAgICAgMTE1LFxuICAgICAgNSxcbiAgICAgIDEzMyxcbiAgICAgIDE2OSxcbiAgICAgIDE2NixcbiAgICAgIDE5MSxcbiAgICAgIDIyMSxcbiAgICAgIDYxLFxuICAgICAgMTY5LFxuICAgICAgMTQsXG4gICAgICA4MSxcbiAgICAgIDIzNixcbiAgICAgIDQwLFxuICAgICAgMTA1LFxuICAgICAgNDksXG4gICAgICAxMjYsXG4gICAgICAyNTIsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKUEZyNlVDRUwreXFyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlkvREdERWxsOXg3YlNUYnRLY0FhVU1iZjZTeGY0ZGFhV0RSOE5NcVk3a0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibnpDUkxhaU41Q0tqMWhaVEdJSEZRa1IrMmJJaGJuYXRNaXg0dmYyS0dLY0cyUmtmL2FHZVR1c0hIZnFXMllSRFQzRjJESnl5LzlUQmZUNm9BV1Y1QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR0h2eWtjYWhiYmFrYXdsYkdjTzhEd3RoUDQ0RmFmcmNSVUFrK1h3dGdaRFlhWnorenl4RTU3YnArMHV2bWdlWUczZEZmaldGRkYyVkRORHdhMjAzQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg3NjE5ODU2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMTg2NDI1OTQ4OTkwODoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImhlbGxvXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg3NjE5ODU2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNTkyMzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPR2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Hai5qc29uIjogIntcImtleURhdGFcIjpcIkwvUFVCTXIzcHJaTzBBbTdQM0JiTHBROHdJZ1FES2tqQW1odk83cUVBd0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjE1MjQ0NDM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPR2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWb05jdmtXRWFkWWk1ak1ZaGtrNFlmWkFmTmc1eWE1UzZWc1psb3pDQ3pNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxNTI0NDQzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM1OTE2ODkwNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9HbC5qc29uIjogIntcImtleURhdGFcIjpcIndIMW1USUp1VUZCeVRIbWFsa0dqRTR2VlkvSDBPc3V6eU5LY0Zram9LeW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjE1MjQ0NDM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNTkyMzc2NzFcIn0iCn0="  // PUT your SESSION_ID 


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
