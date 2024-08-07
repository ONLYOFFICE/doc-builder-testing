builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a GetReply method test");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("Comment reply 123", "Mark Potato", "uid-2", 0);
aComments[0].AddReply("Yet another reply", "Peter Pan", "uid-3", 0);
oParagraph = Api.CreateParagraph();
var oCommentReply = aComments[0].GetReply(0);
oParagraph.AddText("First reply: " + oCommentReply.GetText());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetReply.docx");
builder.CloseFile();
