builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith", "uid-1");
var aComments = oDocument.GetAllComments();
aComments[0].SetUserId("uid-2");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("User ID: " + aComments[0].GetUserId());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetUserId.docx");
builder.CloseFile();
