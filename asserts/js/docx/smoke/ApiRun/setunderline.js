builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun;
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetUnderline(true);
oRun.AddText("This is a text run with the text underlined with a single line.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetUnderline.docx");
builder.CloseFile();
            