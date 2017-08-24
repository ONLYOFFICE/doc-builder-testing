require 'spec_helper'
describe 'ApiGradientStop section tests' do
  it 'ApiGradientStop | GetClassType method' do
    docx = DocBuilderWrapper.new.build_doc_and_parse('asserts/js/docx/smoke/ApiGradientStop/getclasstype.js')
    expect(docx.elements.first.nonempty_runs[1].text).to eq('Class Type = gradientStop')
  end
end
