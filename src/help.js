const help = (prefix) => {
	return ` *Comandos de figu* <

 comando: *${prefix} sticker* 
 desc: converter imagem / gif / vídeo em adesivo
 uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n

 comando: *${prefix} sticker nobg*
 desc: converte imagem em adesivo enquanto remove o fundo
 uso: responder imagem ou enviar imagem com legenda\n

 comando: *${prefix} toimg*
 desc: converter sticker em imagem
 uso: adesivo de resposta\n

 comando: *${prefix} tsticker*
 desc: converter texto em adesivo
 uso: *${prefix} texto tsticker aqui*\n


 > *Outros comandos* <

 comando: *${prefix} gtts*
 desc: converter texto em fala / áudio
 uso: *${prefix} gtts [cc] [texto]* \ nexemplo: *${prefix} gtts ja On2-chan*/n

 comando: *${prefix} url2img*
 desc: faz capturas de tela da web
 uso: *${prefix} url2img [type] [url]*\n

 comando: *${prefix} ocr*
 desc: tira o texto da imagem
 uso: responder imagem ou enviar imagem com legenda\n

 comando: *${prefix} wait*
 desc: pesquisar anime com imagem 
 uso: responder imagem ou enviar imagem com legenda\n
 comando: *${prefix} setprefix*
 desc: substituir prefixo
 uso: *${prefix} setprefix [texto | opcional]*\n
 nota: este comando só pode ser usado pelo proprietário do bot\n

 > *Comandos de Grupo* <

 comando: *${prefix} add*
 desc: adicionar membro ao grupo
 uso: *${prefix} add 5528xxxxx*\n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n

 comando: *${prefix} kick*
 desc: expulsar membros do grupo
 uso: *${prefix} kick @ tagmember*\n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n

 comando: *${prefix} promova*
 desc: tornar o membro do grupo como administrador do grupo
 uso: *${prefix} promote @ tagmember*\n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n

 comando: *${prefix} demote*
 desc: tornar o administrador do grupo como membro do grupo
 uso: *${prefix} demote @ tagmember*\n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n

 comando: *${prefix} linkgroup*
 desc: pegue o link do grupo
 uso: basta enviar o comando
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n


BOT INTEIRAMENTE EDITÁVEL FEITO POR ELICKSOM
`
}

exports.help = help
