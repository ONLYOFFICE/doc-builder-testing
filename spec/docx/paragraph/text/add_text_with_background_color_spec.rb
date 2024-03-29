# frozen_string_literal: true

require 'spec_helper'

describe 'Check backgroundcolor' do
  it 'Backgroundcolor' do
    docx = builder.build_and_parse('js/docx/paragraph/text/add_text_with_backgroundcolor.js')
    expect(docx.elements[1].nonempty_runs.first.text).to eq('Green')
    expect(docx.elements[1].paragraph_properties.shade.color.upcase)
      .to eq(OoxmlParser::Color.new(0, 255, 0).to_hex.to_sym)
  end
end
