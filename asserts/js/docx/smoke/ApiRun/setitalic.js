builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun;
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetItalic(true);
oRun.AddText("This is a text run with the font set to italicized letters.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetItalic.docx");
builder.CloseFile();
            