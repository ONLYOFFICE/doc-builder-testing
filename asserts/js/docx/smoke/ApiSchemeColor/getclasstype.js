
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oFill, oStroke, oDrawing, oParagraph, oSchemeColor;
oParagraph = oDocument.GetElement(0);
oSchemeColor = Api.CreateSchemeColor("accent6");
oFill = Api.CreateSolidFill(oSchemeColor);
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oClassType = oSchemeColor.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + oClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
            