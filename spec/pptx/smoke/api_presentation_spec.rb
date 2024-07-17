# frozen_string_literal: true

require 'spec_helper'
describe 'ApiPresentation section tests' do
  it 'ApiPresentation | AddSlide method' do
    pptx = builder.build_and_parse('js/pptx/smoke/api_presentation/add_slide.js')
    expect(pptx.slides.size).to eq(2)
  end

  it 'ApiPresentation | GetClassType method' do
    pptx = builder.build_and_parse('js/pptx/smoke/api_presentation/get_class_type.js')
    expect(pptx.slides.first.elements.first.text_body.paragraphs.last.characters.first.text).to eq('Class Type = presentation')
  end

  it 'ApiPresentation | GetCurSlideIndex method' do
    pptx = builder.build_and_parse('js/pptx/smoke/api_presentation/get_cur_slide_index.js')
    expect(pptx.slides.first.elements.first.text_body.paragraphs.last.characters.first.text).to eq('Current Slide Index = 0')
  end

  it 'ApiPresentation | GetCurrentSlide method' do
    pptx = builder.build_and_parse('js/pptx/smoke/api_presentation/get_current_slide.js')
    expect(pptx.slides.first.background.fill.color.gradient_stops.first.color).to eq(OoxmlParser::Color.new(255, 224, 204))
    expect(pptx.slides.first.background.fill.color.gradient_stops.first.position).to eq(0)
    expect(pptx.slides.first.background.fill.color.gradient_stops.last.color).to eq(OoxmlParser::Color.new(255, 164, 101))
    expect(pptx.slides.first.background.fill.color.gradient_stops.last.position).to eq(100)
  end

  it 'ApiPresentation | GetSlideByIndex method' do
    pptx = builder.build_and_parse('js/pptx/smoke/api_presentation/get_slide_by_index.js')
    expect(pptx.slides.size).to eq(1)
    expect(pptx.slides.first.background.fill.color.gradient_stops.first.color).to eq(OoxmlParser::Color.new(255, 224, 204))
    expect(pptx.slides.first.background.fill.color.gradient_stops.first.position).to eq(0)
    expect(pptx.slides.first.background.fill.color.gradient_stops.last.color).to eq(OoxmlParser::Color.new(255, 164, 101))
    expect(pptx.slides.first.background.fill.color.gradient_stops.last.position).to eq(100)
  end

  it 'ApiPresentation | SetSizes method' do
    pptx = builder.build_and_parse('js/pptx/smoke/api_presentation/set_sizes.js')
    expect(pptx.slide_size.height).to eq(OoxmlParser::OoxmlSize.new(190 * 36_000, :emu))
    expect(pptx.slide_size.width).to eq(OoxmlParser::OoxmlSize.new(254 * 36_000, :emu))
  end

  it 'ApiPresentation | GetAllComments method' do
    pptx = builder.build_and_parse('js/pptx/smoke/api_presentation/get_all_comments.js')
    expect(pptx.comments.list.size).to eq(2)
    expect(pptx.comment_authors.list.size).to eq(2)
    comments_text = pptx.comments.list.map(&:text)
    slide_data = pptx.slides[0].common_slide_data.shape_tree
    expect(comments_text.join(', ')).to eq(slide_data.elements[0].text_body.paragraphs[0].runs[0].text)
  end
end
