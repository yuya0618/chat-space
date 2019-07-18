# usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
## Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups


# groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
## Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups


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
