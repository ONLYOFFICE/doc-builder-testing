builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun;
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetPosition(10);
oRun.AddText("This is a text run with the text raised 5 points (10 half-points).");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetPosition(-16);
oRun.AddText("This is a text run with the text lowered 8 points (16 half-points).");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetPosition.docx");
builder.CloseFile();
            