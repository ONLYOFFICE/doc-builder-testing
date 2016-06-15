require 'bundler/setup'
require 'rspec'
require_relative '../../../lib/doc_builder_testing'
describe 'ApiTableRow sectin tests' do
  it 'GetCell method' do
      docx = DocBuilderWrapper.new.build_doc_and_parse('asserts/js/docx/smoke/ApiTableRow/getcell.js')
      expect(docx.nil?).to eq(false)
  end

  it 'GetCellsCount method' do
      docx = DocBuilderWrapper.new.build_doc_and_parse('asserts/js/docx/smoke/ApiTableRow/getcellscount.js')
      expect(docx.nil?).to eq(false)
  end

  it 'GetClassType method' do
      docx = DocBuilderWrapper.new.build_doc_and_parse('asserts/js/docx/smoke/ApiTableRow/getclasstype.js')
      expect(docx.nil?).to eq(false)
  end

  it 'SetHeight method' do
      docx = DocBuilderWrapper.new.build_doc_and_parse('asserts/js/docx/smoke/ApiTableRow/setheight.js')
      expect(docx.nil?).to eq(false)
  end

  it 'SetTableHeader method' do
      docx = DocBuilderWrapper.new.build_doc_and_parse('asserts/js/docx/smoke/ApiTableRow/settableheader.js')
      expect(docx.nil?).to eq(false)
  end

end