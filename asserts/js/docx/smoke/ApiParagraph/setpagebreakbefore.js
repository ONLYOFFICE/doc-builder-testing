builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a page break before a paragraph. ");
oParagraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
oParagraph.AddText("Scroll down to the second page to see it. ");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it has page break before it enabled.");
oParagraph.SetPageBreakBefore(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetPageBreakBefore.docx");
builder.CloseFile();
            