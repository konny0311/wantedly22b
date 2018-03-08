# README

# Database structure
## feeds テーブル

|Column|Type|Options|
|------|----|-------|
|title|text|null: false, index: true|
|content|text|null: false, index: true|
|user_id|int|null: false, index: true, foreign_key: true|
|company_id|int|null: false, index: true, foreign_key: true|

### association
- belongs_to :user
- belongs_to :company
- has_many :images

## messages テーブル

|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|user_id|int|null: false, foreign_key: true|
|project_id|int|null: false, foreign_key: true|

### association
- belongs_to :user
- belongs_to :project

## projects テーブル

|Column|Type|Options|
|------|----|-------|
|title|text|null: false, index: true|
|content|text|null: false|
|company_id|int|null: false, index: true, foreign_key: true|
|job_title|str|null: false|
|job_type|int|null: false, index: true|


### association
- belongs_to :company
- has_many :messages

## images テーブル

|Column|Type|Options|
|------|----|-------|
|url|text|null: false|
|feed_id|int|null: false, foreign_key: true|


### association
- belongs_to :feed
