
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oGs1, oGs2, oFill, oStroke, oDrawing, oParagraph, oRGBColor;
oParagraph = oDocument.GetElement(0);
oRGBColor = Api.CreateRGBColor(255, 164, 101);
oGs1 = Api.CreateGradientStop(Api.CreatePresetColor("lightYellow"), 0);
oGs2 = Api.CreateGradientStop(oRGBColor, 100000);
oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oClassType = oRGBColor.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + oClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
            