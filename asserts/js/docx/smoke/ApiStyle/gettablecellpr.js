builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable, oTableStyle;
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTable = Api.CreateTable(2, 3);
oTable.SetWidth("percent", 100);
oDocument.Push(oTable);
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, true, true);
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 0, 0);
oTableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 0, 255, 0);
oTableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 0, 0, 255);
oTableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 255, 0); 
builder.SaveFile("docx", "GetTableCellPr.docx");
builder.CloseFile();
            