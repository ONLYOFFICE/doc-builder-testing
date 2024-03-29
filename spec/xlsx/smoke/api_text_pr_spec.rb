# frozen_string_literal: true

require 'spec_helper'
describe 'ApiTextPr section tests' do
  it 'ApiTextPr | GetClassType method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/get_class_type.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.text).to eq('Class Type = textPr')
  end

  it 'ApiTextPr | SetBold method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_bold.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.font_style.bold).to be true
  end

  it 'ApiTextPr | SetCaps method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_caps.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.caps).to eq(:all)
  end

  it 'ApiTextPr | SetDoubleStrikeout method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_double_strikeout.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.font_style.strike).to eq(:double)
  end

  it 'ApiTextPr | SetFill method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_fill.js')
    font_color = xlsx.worksheets.first.drawings.first
                     .shape.text_body.paragraphs
                     .first.runs.first.properties
                     .font_color
    expect(font_color.color).to eq(OoxmlParser::Color.new(255, 255, 0))
    expect(font_color.type).to eq(:solid)
  end

  it 'ApiTextPr | SetFontFamily method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_font_family.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.font_name).to eq('Comic Sans MS')
  end

  it 'ApiTextPr | SetFontSize method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_font_size.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.font_size).to eq(15.0)
  end

  it 'ApiTextPr | SetItalic method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_italic.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.font_style.italic).to be true
  end

  it 'ApiTextPr | SetSmallCaps method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_small_caps.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.caps).to eq(:small)
  end

  it 'ApiTextPr | SetSpacing method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_spacing.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body
               .paragraphs.first.runs.first.properties
               .space).to eq(OoxmlParser::OoxmlSize.new(80, :twip))
  end

  it 'ApiTextPr | SetStrikeout method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_strikeout.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.font_style.strike).to eq(:single)
  end

  it 'ApiTextPr | SetUnderline method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_underline.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.font_style.underlined.style).to eq(:single)
  end

  it 'ApiTextPr | SetVertAlign method' do
    xlsx = builder.build_and_parse('js/xlsx/smoke/api_text_pr/set_vert_align.js')
    expect(xlsx.worksheets.first.drawings.first.shape.text_body.paragraphs.first.runs.first.properties.baseline).to eq(:superscript)
  end
end
