builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
// oPresentation.GetMaster(0).Delete();
oSlide.RemoveAllObjects();
var oMaster = Api.CreateMaster();
oPresentation.AddMaster(1, oMaster);

var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oMaster.AddObject(oShape);
var oImage = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oMaster.AddObject(oImage);

oShape = Api.CreateShape("rect", 100 * 36000, 50 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText('Drawings count: ' + oMaster.GetAllDrawings().length);
oParagraph.AddLineBreak();
oMaster.RemoveObject(0, 1);
oParagraph.AddText('Drawings count: ' + oMaster.GetAllDrawings().length);
oParagraph.AddLineBreak();
oParagraph.AddText('Shapes: ' + oMaster.GetAllShapes().length + ', images: ' + oMaster.GetAllImages().length);
oParagraph.SetHighlight("black");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "RemoveObject.pptx");
builder.CloseFile();