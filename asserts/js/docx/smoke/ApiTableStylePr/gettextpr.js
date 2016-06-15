
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oTable, oTableStyle, oTableStylePr, oParaPr;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the bold font weight to the text in cell #1:");
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTableStylePr = oTableStyle.GetConditionalTableStyle("topLeftCell");
oTable.SetTableLook(true, true, true, true, true, true);
oTableStylePr.GetTextPr().SetBold(true);
oParagraph = oTable.GetRow(0).GetCell(0).GetContent().GetElement(0);
oParagraph.AddText("Bold text");
oParagraph = oTable.GetRow(0).GetCell(1).GetContent().GetElement(0);
oParagraph.AddText("Normal text");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();
            