# usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
## Association
- has many :messages
- has many :users_groups
- has many :groups, through: :users_groups


# groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
## Association
- has many :messages
- has many :users_groups
- has many :users, through: :users_groups


# membersテーブル(userテーブルとgroupテーブルの中間テーブル)
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|interger|null: false, foreign_key: true|
|user_id|interger|null: false, foreign_key: true
## Association
- belongs_to :users
- belongs_to :group
