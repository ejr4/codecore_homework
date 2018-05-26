class Post < ApplicationRecord
    has_many :comments, dependent: :destroy
    belongs_to :user
    validates :title, presence: true, uniqueness: { case_sensitive: false }
    validates :body, length: { minimum: 50 }
end
