# README

# Database structure
## feeds table

|Column|Type|Options|
|------|----|-------|
|title|text|null: false, index: true|
|content|text|null: false, index: true|
|user_id|int|null: false, index: true, foreign_key: true|
|company_id|int|null: false, index: true, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :company
- has_many :images

## messages table

|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|user_id|int|null: false, foreign_key: true|
|project_id|int|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :project

## projects table

|Column|Type|Options|
|------|----|-------|
|title|text|null: false, index: true|
|content|text|null: false|
|company_id|int|null: false, index: true, foreign_key: true|
|jobTitle|str|null: false|
|jobType|int|null: false, index: true|


### Association
- belongs_to :company
- has_many :messages

## images table

|Column|Type|Options|
|------|----|-------|
|url|text|null: false|
|feed_id|int|null: false, foreign_key: true|


### Association
- belongs_to :feed
