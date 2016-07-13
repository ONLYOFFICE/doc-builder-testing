builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oTable, oTableStyle, oCell;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and remove one row (the second one), so that it becomes 3x2:");
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oCell = oTable.GetRow(1).GetCell(0);
oTable.RemoveRow(oCell);
oDocument.Push(oTable);
builder.SaveFile("docx", "RemoveRow.docx");
builder.CloseFile();
            