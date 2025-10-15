
import os
from time import strftime as stime
from telegram import Bot,InlineKeyboardButton as ikbtn,InlineKeyboardMarkup
from telegram.constants import ParseMode
import logging
# from telegram import Update
from telegram.ext import Updater,ApplicationBuilder,CommandHandler,MessageHandler,filters,ContextTypes,InlineQueryHandler


LOGFILE=os.path.join('logs','logs.txt')
# from telegram.ext import *

API_KEY = "THAT_API"

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logging.info('Starting Bot...')



bot = Bot(API_KEY)
#filefuncs
def wrote(file,ctx):
    if os.path.exists(file):
        with open(os.path.join(file),"a") as buf:
            buf.write(ctx)
            buf.close()
    else:
        logging.error(f'FILE {file} NOT FOUND')


#start

async def startCMD(update, context):
    wrote(LOGFILE,stime('%d/%m/%Y,%X')+'STARTCOMMAND RUNNED')
    logging.info(f'CMD = START, args = {context.args}')
    # await update.message.reply_text('ACTIVATED BOT ...')
    await bot.send_message(chat_id=update.message.chat_id,text="``ACTIVTATED BOT``,DUM MASALA BIYANI",parse_mode=ParseMode.MARKDOWN)

async def helpbot(update,context):
    await update.message.reply_text('WHAT SAHAYAM CAN I DO FOR U...???')

# async def reply(update,context):
#     textrep=str(update.message.text).lower()
#     await update.message.reply_text(textrep)

# async def msgrep(bot,update):
#     bot.send_mess

async def btn(update,context):
    b1=ikbtn(text='mybtn',url='https://spat-cloud.github.io/tbot',callback_data='null')
    b2=ikbtn(text='random',url='https://spat-cloud.github.io/botx',callback_data='null1')
    b3=ikbtn(text='randomShit',url='https://spat-cloud.github.io/botNXS',callback_data='nullp')
    board=[[b1],[b2],[b3]]
    ikm=InlineKeyboardMarkup(board)
    await bot.send_message(chat_id=update.message.chat_id,text='BUTTONS DOWN',reply_markup=ikm)



async def msg(update,context):
    cid=update.message.chat_id
    fnm=update.message.from_user.first_name
    msgtxt=update.message.text
        
    formatWrote=f'{cid} ({fnm}) msg: {msgtxt}'
    # await reply(msgtxt,context)
    if str(msgtxt).strip().upper().find("HELLO" or "HI" or "HAI")!=-1:
        await bot.send_message(chat_id=cid,text="HELOO WORLD TYPE SOMETHING")
    elif "BYE" in str(msgtxt).strip().upper():
        await bot.send_message(chat_id=update.message.chat_id,text="👋🏽 C U...")

    else:
        await bot.send_message(chat_id=update.message.chat_id,text="🙄 ... ? type /help if nedd")

    logging.info(formatWrote)
    wrote(LOGFILE,stime('%d/%m/%Y,%X')+','+formatWrote+'\n')

async def msc(update,context):
#    await context.bot.send_message(chat_id=update.message.chat_id,text="<a href='https://youtube.com'>chotapabdir dalo</a>")
  # Crayon Shin-chan_ Action Mask vs. Leotard Devil Tamil Dubbed (1993) Full Movie With English Subtitles Unsensored.mp4
    # await bot.send_photo(chat_id=update.message.chat_id,photo=open(os.path.join('img','shindance.webp'),'rb'))
    await bot.send_message(chat_id=update.message.chat_id,text="THIS IS <b><i>ITALIC AND BOLD</i></b> PARSEMODE HTML",parse_mode=ParseMode.HTML)





async def getData(update,context):
    targs=context.args
    if len(targs)>0:
        val=eval("+".join(targs))
        await update.message.reply_text(f'SUM VALS IS {val}')
    else:
        await update.message.reply_text("DEFAULT OR NO ARGRS TYPEERR")

# async def msg(update: Update,context):
#     logging.info(f'THE {update.message.text}')

if __name__ == '__main__':
    updater = ApplicationBuilder().token(API_KEY).build()
    # dp = updater.dispatcher

    #commands

    updater.add_handler(CommandHandler('start',startCMD))
    updater.add_handler(CommandHandler('help',helpbot))
    updater.add_handler(CommandHandler('getdata',getData))
    updater.add_handler(CommandHandler('link',msc))
    updater.add_handler(CommandHandler('testbtns',btn))
    #msg handle

    updater.add_handler(MessageHandler(filters.TEXT,msg))

    # updater.start_polling(1.0)
    # updater.idle()
    updater.run_polling()