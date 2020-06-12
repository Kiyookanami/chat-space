require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'messageを保存できる場合' do
      it 'textがあれば保存できる事' do
        expect(build(:message, image: nil)).to be_valid
      end

      it 'imageがあれば保存できる事' do
        expect(build(:message, text: nil)).to be_valid
      end

      it 'textとimageがあれば保存できる事' do
        expect(build(:message)).to be_valid
      end
    end

    context 'messageを保存できない場合' do
      it 'textとimageが両方体と保存できない事' do
        message = build(:message, text: nil, image: nil)
        message.valid?
        expect(message.errors[:text]).to include("を入力してください")
      end

      it 'group_idがないと保存できない事' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it 'user_idがないと保存できない事' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end