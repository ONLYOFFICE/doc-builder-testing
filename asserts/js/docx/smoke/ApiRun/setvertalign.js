
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun;
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetVertAlign("subscript");
oRun.AddText("This is a text run with the text aligned below the baseline vertically. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetVertAlign("baseline");
oRun.AddText("This is a text run with the text aligned by the baseline vertically. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetVertAlign("superscript");
oRun.AddText("This is a text run with the text aligned above the baseline vertically.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetVertAlign.docx");
builder.CloseFile();
            