# frozen_string_literal: true

require 'spec_helper'
describe 'ApiStroke section tests' do
  it 'ApiStroke | GetClassType method' do
    docx = builder.build_and_parse('js/docx/smoke/api_stroke/get_class_type.js')
    expect(docx.elements[1].nonempty_runs.first.text).to eq('Class Type = stroke')
  end

  it 'ApiStroke | ToJSON method' do
    docx = builder.build_and_parse('js/docx/smoke/api_stroke/to_json.js')
    json = JSON.parse(docx.elements[1].nonempty_runs.first.text)
    stroke = json['graphic']['spPr']['ln']['fill']['fill']['color']['color']['rgba']
    expect(stroke['red']).to eq(51)
    expect(stroke['green']).to eq(51)
    expect(stroke['blue']).to eq(51)
  end
end
