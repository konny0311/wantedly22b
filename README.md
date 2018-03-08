## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null, false, unique: true|
|password|string|null: false|
|catchcopy|string||
|profile|string||
|future|string||
|career|string||
|skill|string||
|project|string||
|academic|string||
|seminar|string||
|other_action|string||
|language|string||
|certificate|string||
|awards|string||
|write|string||
|portfolio|string||
|gender|string||
|birthday|integer||
|cover_image|string||
|profile_image|string||
|tel|integer||
|link|string||
|topic|string||
|company_id|string|null: false, foreign_key: true|

<!-- profile     = 自己紹介文
     future      = この先やってみたいこと
     career      = 職歴
     project     = 社内外・在学中project
     academic    = 学歴
     seminar     = ゼミナール
     OtherAction = 部活・サークル・ボランティア
     certificate = 資格
     awards      = 受賞歴
     write       = 執筆歴
     link        = 関連リンク
     topic       = 関心トピック -->

### association
- has many :messages
- has many :feeds
- belong_to :company


## toolsテーブル

Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|logo|string|null, false, unique: true|
|company_id|string|null: false, foreign_key: true|

### association
- has many :companies through: :groups


## companiesテーブル

Column|Type|Options|
|------|----|-------|
|name|string|null: false, add: index|
|url|string|null, false, unique: true|
|logo|string|null, false, unique: true|
|business_type|string|null, false|
|image|string||
|what_content|text|null, false|
|why_content|text|null, false|
|how_content|text|null, false|
|founder|string|null, false|
|employees|integer|null, false|
|catchcopy|string|null, false|
|cover_image|string||
|profile|text|null, false|
|tool_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

<!-- businessType     = 事業形態
     whatContent      = 何をやっているか
     whyContent       = なぜやっているか
     howContent       = どうやっているか
     founder          = 創業者
     profile          = 私たちについて -->

### association
- has many :users
- has many :feeds
- has many :projects
- has many :tools through: :groups


<!--toolとcompanyの中間テーブル-->

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|tool_id|integer|null: false, foreign_key: true|
|company_id|integer|null: false, foreign_key: true|

### association
- belongs_to :company
- belongs_to :tool










