require 'spec_helper'

describe 'DocumentBuilder licensing' do

  it 'running docbuilder create temp license' do
    expect(Dir["#{builder.license_path}/*.lickey"].length).to eq(1)
  end
end
