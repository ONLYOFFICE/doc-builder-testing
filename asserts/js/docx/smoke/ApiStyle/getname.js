
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable, oTableStyle;
oTableStyle = oDocument.GetStyle("Bordered - Accent 5");
oTableStyle.SetName("My Custom Style");
oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oTableStyleName = oTableStyle.GetName();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table style name = " + oTableStyleName);
builder.SaveFile("docx", "ApiStyle.docx");
builder.CloseFile();
            