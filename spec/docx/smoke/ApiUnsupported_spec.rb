require 'bundler/setup'
require 'rspec'
require_relative '../../../lib/doc_builder_testing'
describe 'ApiUnsupported section tests' do
  it 'ApiUnsupported | GetClassType method' do
    docx = DocBuilderWrapper.new.build_doc_and_parse('asserts/js/docx/smoke/ApiUnsupported/getclasstype.js')
    expect(docx.nil?).to eq(false)
  end
end
