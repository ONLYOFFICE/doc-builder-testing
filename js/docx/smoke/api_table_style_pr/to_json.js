builder.CreateFile("docx");
    var oDocument = Api.GetDocument();
    var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
        oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
    var oTable = Api.CreateTable(3, 3);
        oTable.SetWidth("percent", 100);
    var oTableStylePr = oTableStyle.GetConditionalTableStyle();
        oTable.SetStyle(oTableStyle);
        oDocument.Push(oTable);
    var json = oTableStylePr.ToJSON();
    var oTableStylePrFromJSON = Api.FromJSON(json);
    var sType = oTableStylePrFromJSON.GetClassType();
    var oParagraph = oDocument.GetElement(0);
        oParagraph.AddText(sType);
        oParagraph = Api.CreateParagraph();
        oParagraph.AddText(json);
        oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
