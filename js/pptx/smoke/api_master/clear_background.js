builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oRGBColor = Api.CreateRGBColor(255, 213, 191);
var oGs1 = Api.CreateGradientStop(oRGBColor, 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oMaster.SetBackground(oFill);
oMaster.ClearBackground();
builder.SaveFile("pptx", "ClearBackground.pptx");
builder.CloseFile();