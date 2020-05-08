##usersテーブル

|column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|password|string|null: false|
|email   |string|null: false|
###Association
- has_many :posts
- has_many :groups, through: user_groups

##postsテーブル

|column|Type|Options|
|------|----|-------|
|text  |text|
|image |text|
###Association
- belongs_to :user
- belongs_to :new_groups

##new_groupsテーブル
|column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
###Association
- has_many :posts
- has_many :users, through: user_groups

##user_groupsテーブル
|column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
###Association
- belongs_to :user
- belongs_to :new_group



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
