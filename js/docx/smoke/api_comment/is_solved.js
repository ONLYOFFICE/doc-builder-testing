builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just IsSolved method test");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var bSolved = aComments[0].IsSolved();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Is solved: " + bSolved);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetSolved.docx");
builder.CloseFile();
