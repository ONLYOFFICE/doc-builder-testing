builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just GetTime method test");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetTime(Date.now());
var sTime = aComments[0].GetTime();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Creation timestamp: " + sTime);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTime.docx");
builder.CloseFile();
