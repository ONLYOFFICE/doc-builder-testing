builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a two point green border at its left side. ");
oParagraph.AddText("The space between the left side of the paragraph and the border is 8 points. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetLeftBorder("single", 16, 8, 0, 255, 0);
builder.SaveFile("docx", "SetLeftBorder.docx");
builder.CloseFile();
            