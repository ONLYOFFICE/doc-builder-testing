
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oDrawing;
oParagraph = oDocument.GetElement(0);
oDrawing = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
oDrawing.SetVerAxisTitle("USD In Hundred Thousands");
oDrawing.SetHorAxisTitle("Year");
oDrawing.SetLegendPos("bottom");
oDrawing.SetShowDataLabels(false, false, true);
oDrawing.SetTitle("Financial Overview");
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "ApiChart.docx");
builder.CloseFile();
            