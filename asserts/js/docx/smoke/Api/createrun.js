builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oRun;
oParagraph = oDocument.GetElement(0);
var oDocument = Api.GetDocument();
oRun = Api.CreateRun();
oRun.AddText("This is a text run");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "CreateRun.docx");
builder.CloseFile();
                        