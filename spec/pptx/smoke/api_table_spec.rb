require 'spec_helper'
describe 'Api Table section tests' do
  it 'Api | GetClassType method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/get_class_type.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.first.cells.first.text_body.paragraphs[0].runs.first.text).to eq('table')
  end

  it 'Api | GetRow method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/get_row.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.first.cells.first.text_body.paragraphs[0].runs.first.text).to eq('row1')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows[2].cells.first.text_body.paragraphs[0].runs.first.text).to eq('row2')
  end

  it 'Api | GetCell method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/get_cell.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows[0].cells[0].text_body.paragraphs[0].runs.first.text).to eq('cell1')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows[0].cells[1].text_body.paragraphs[0].runs.first.text).to eq('cell2')
  end

  it 'Api | GetCellsCount method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/get_cells_count.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows[0].cells[0].text_body.paragraphs[0].runs.first.text).to eq('3')
  end

  it 'Api | AddRow method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/add_row.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.first.cells.first.text_body.paragraphs[0].runs.first.text).to eq('row1')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows[1].cells.first.text_body.paragraphs[0].runs.first.text).to eq('row2')
  end

  it 'Api | RemoveRow method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/remove_row.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.count).to eq(2)
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.first.cells.count).to eq(1)
  end

  it 'Api | AddColumn method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/add_column.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.first.cells[1].text_body.paragraphs[0].runs.first.text).to eq('added_column')
  end

  it 'Api | RemoveColumn method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/remove_column.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.first.cells.count).to eq(2)
  end

  it 'Api | MergeCells method' do
    pptx = builder.build_and_parse('asserts/js/pptx/smoke/api_table/merge_cells.js')
    expect(pptx.slides.first.elements.last.graphic_data.first.rows.first.cells[0].text_body.paragraphs[0].runs.first.text).to eq('text in merged cell')
  end
end
