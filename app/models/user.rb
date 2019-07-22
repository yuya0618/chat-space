class User < ApplicationRecord
  has_many :messages
  has_many :group_users
  has_many :groups, through: :group_users
  has_many :messages

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end