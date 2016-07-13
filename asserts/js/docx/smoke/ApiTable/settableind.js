builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oTable, oTableStyle;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the indent of 1 inch for the table:");
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 50);
oTable.SetStyle(oTableStyle);
oTable.SetTableInd(1440);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableInd.docx");
builder.CloseFile();
            