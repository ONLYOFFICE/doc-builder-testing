
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oFill, oStroke, oDrawing, oParagraph, oSchemeColor;
oParagraph = oDocument.GetElement(0);
oSchemeColor = Api.CreateSchemeColor("accent6");
oFill = Api.CreateSolidFill(oSchemeColor);
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreateSchemeColor.docx");
builder.CloseFile();
                        