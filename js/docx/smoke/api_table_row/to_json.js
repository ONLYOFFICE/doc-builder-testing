builder.CreateFile("docx");
    var oDocument = Api.GetDocument();
    var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
        oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
    var oTable = Api.CreateTable(4, 2);
        oTable.SetWidth("percent", 100);
        oTable.SetStyle(oTableStyle);
    var oTableRow = oTable.GetRow(1);
    var oParagraph = Api.CreateParagraph();
        oDocument.Push(oParagraph);
        oParagraph.AddText(oTableRow.GetClassType());
        oTableRow.SetBackgroundColor(255, 111, 61, false);
        oTableRow.SetHeight("atLeast", 720);
        oDocument.Push(oTable);
    var json = oTableRow.ToJSON();
        oParagraph = Api.CreateParagraph();
        oParagraph.AddText(json);
        oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
