builder.CreateFile("docx");
var oDocument, oParagraph, oTable, oTableRow, oCell, oCellContent;
oDocument = Api.GetDocument();
oDocument.CreateNewHistoryPoint();
oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTableRow = oTable.GetRow(2);
oCell = oTableRow.GetCell(2);
oCell.SetTextDirection("btlr");
oCellContent = oCell.GetContent();
oParagraph = oCellContent.GetElement(0);
oParagraph.AddText("bottom to top");
builder.SaveFile("docx", "table_with_textdirection_btt.docx");
builder.CloseFile();
