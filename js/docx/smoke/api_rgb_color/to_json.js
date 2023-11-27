builder.CreateFile("docx");
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
let oRGBColor = Api.CreateRGBColor(255, 111, 61);
let json = oRGBColor.ToJSON();
oParagraph.AddText(json);
let oRGBColorFromJSON = Api.FromJSON(json);
let oGs1 = Api.CreateGradientStop(oRGBColor, 0);
let oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
let oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
let bWriteNumberings = false;
let bWriteStyles = true;
let sDrawingJson = oDrawing.ToJSON(bWriteNumberings, bWriteStyles);
let oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText(sDrawingJson);
oDocument.Push(oParagraph1);
builder.SaveFile("docx", "RGBColorToJSON.docx");
builder.CloseFile();