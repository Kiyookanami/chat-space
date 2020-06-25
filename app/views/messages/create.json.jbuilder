json.user_id @message.user_id
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.text @message.text
json.image @message.image_url
json.user_nickname @message.user.nickname
json.id @message.id