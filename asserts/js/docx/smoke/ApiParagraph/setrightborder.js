builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a two point red border at its right side. ");
oParagraph.AddText("The space between the right side of the paragraph and the border is 8 points. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetRightBorder("single", 16, 8, 255, 0, 0);
builder.SaveFile("docx", "SetRightBorder.docx");
builder.CloseFile();
            