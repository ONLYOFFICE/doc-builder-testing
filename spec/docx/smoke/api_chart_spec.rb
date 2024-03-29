# frozen_string_literal: true

require 'spec_helper'
describe 'ApiChart section tests' do
  it 'ApiChart | GetClassType method' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/get_class_type.js')
    expect(docx.elements[1].nonempty_runs.first.text).to eq('Class Type = chart')
  end

  it 'ApiChart | SetHorAxisTitle method' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/set_hor_axis_title.js')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.axises.first.title.elements.first.runs.first.text).to eq('Year')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.axises.first.title.elements.first.runs.first.properties.font_size).to eq(11.0)
  end

  it 'ApiChart | SetLegendPos method' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/set_legend_pos.js')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.legend.position).to eq(:bottom)
  end

  it 'ApiChart | SetShowDataLabels method' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/set_show_data_labels.js')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.axises.first.title.elements.first.runs.first.text).to eq('Year')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.axises.first.title.elements.first.runs.first.properties.font_size).to eq(11)
  end

  it 'ApiChart | SetTitle method' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/set_title.js')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.title.elements.first.runs.first.text).to eq('Financial Overview')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.title.elements.first.runs.first.properties.font_size).to eq(13.0)
  end

  it 'ApiChart | SetVerAxisTitle method' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/set_ver_axis_title.js')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.axises[1].title.elements.first.runs.first.text).to eq('USD In Hundred Thousands')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.axises[1].title.elements.first.runs.first.properties.font_size).to eq(10)
  end

  it 'ApiChart | SetStyle methods | #54039' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/apply_chart_style.js')
    (1..10).each do |index|
      expect(docx.elements[index].nonempty_runs.first.text).to eq('true')
    end
  end

  it 'ApiChart | CreateChart method | aNumFormats param' do
    docx = builder.build_and_parse('js/docx/smoke/api_chart/set_series_format.js')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.series[0].values.number_reference.cache.format_code).to eq('0.00E+00')
    expect(docx.elements.first.nonempty_runs.first.drawings.first.graphic.data.series[1].values.number_reference.cache.format_code).to eq('#,##0.00_);[Red](#,##0.00)')
  end
end
