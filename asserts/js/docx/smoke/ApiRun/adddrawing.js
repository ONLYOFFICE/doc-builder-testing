builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun, oDrawing;
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oDrawing = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oDrawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing.SetHorAxisTitle("Year", 11);
oDrawing.SetLegendPos("bottom");
oDrawing.SetShowDataLabels(false, false, true);
oDrawing.SetTitle("Financial Overview", 13);
oRun.AddDrawing(oDrawing);
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "AddDrawing.docx");
builder.CloseFile();
