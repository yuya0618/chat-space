json.text @message.content
json.date @message.created_at.strftime('%Y/%m/%d %H:%M')
json.image @message.image
json.user_name @message.user.name