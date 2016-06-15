
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun;
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetSpacing(80);
oRun.AddText("This is a text run with the text spacing set to 4 points (20 twentieths of a point).");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetSpacing.docx");
builder.CloseFile();
            