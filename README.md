##usersテーブル

|column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true|
|password|string|null: false|
|email   |string|null: false|
###Association
- has_many :user_groups
- has_many :posts
- has_many :groups, through: :user_groups

##postsテーブル

|column|Type|Options|
|------|----|-------|
|text  |text||
|image |text||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
###Association
- belongs_to :user
- belongs_to :group

##groupsテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false|
###Association
- has_many :user_groups
- has_many :posts
- has_many :users, through: :user_groups

##user_groupsテーブル
|column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
###Association
- belongs_to :user
- belongs_to :group



# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
