builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just SetText method test");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetText("new text");
var sText = aComments[0].GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetText.docx");
builder.CloseFile();