builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a thick green border between it and the next paragraph. ");
oParagraph.AddText("No additional spacing between the border and the paragraphs is added.");
oParagraph.SetBetweenBorder("single", 24, 0, 0, 255, 0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph. We will add a thin red border between it and the next paragraph. ");
oParagraph.AddText("We added additional spacing between the border and the paragraphs.");
oParagraph.SetBetweenBorder("single", 12, 10, 255, 0, 0);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the third paragraph. The border can be displayed above it only, as there are no new paragraphs after it.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetBetweenBorder.docx");
builder.CloseFile();
            