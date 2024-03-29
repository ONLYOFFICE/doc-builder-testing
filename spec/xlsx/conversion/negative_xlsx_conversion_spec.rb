# frozen_string_literal: true

require 'spec_helper'
describe 'Conversion tests from Xlsx negative' do
  it 'Conversion | Xlsx to Docx' do
    expect { builder.build_and_parse('js/conversion/negative/xlsx/xlsx_to_docx.js') }.to raise_error(StandardError)
  end

  it 'Conversion | Xlsx to Odt' do
    expect { builder.build_and_parse('js/conversion/negative/xlsx/xlsx_to_odt.js') }.to raise_error(StandardError)
  end

  it 'Conversion | Xlsx to Txt' do
    expect { builder.build_and_parse('js/conversion/negative/xlsx/xlsx_to_txt.js') }.to raise_error(StandardError)
  end

  it 'Conversion | Xlsx to Rtf' do
    expect { builder.build_and_parse('js/conversion/negative/xlsx/xlsx_to_rtf.js') }.to raise_error(StandardError)
  end

  it 'Conversion | Xlsx to Pptx' do
    expect { builder.build_and_parse('js/conversion/negative/xlsx/xlsx_to_pptx.js') }.to raise_error(StandardError)
  end

  it 'Conversion | Xlsx to Odp' do
    expect { builder.build_and_parse('js/conversion/negative/xlsx//xlsx_to_odp.js') }.to raise_error(StandardError)
  end
end
