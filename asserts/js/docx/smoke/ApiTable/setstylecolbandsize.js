
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oTable, oTableStyle;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("");
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(10, 10);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, true, true);
oTable.SetStyleColBandSize(2);
oTableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetStyleColBandSize.docx");
builder.CloseFile();
            