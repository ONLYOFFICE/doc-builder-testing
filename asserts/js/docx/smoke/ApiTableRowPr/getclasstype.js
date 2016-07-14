builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oTable, oTableStyle, oCell, oTableRowPr;
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTableRowPr = oTableStyle.GetTableRowPr();
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oClassType = oTableRowPr.GetClassType();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class Type = " + oClassType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
