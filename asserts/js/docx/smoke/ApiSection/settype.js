builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oFooter;
oParagraph = oDocument.GetElement(0);
var oSection = oDocument.CreateSection(oParagraph);
oParagraph.AddText("This is section #1 of the document. ");
var oSection = oDocument.GetFinalSection();
oSection.SetType("continuous");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is section #2 and we set 'Continuous' type to it. ");
oParagraph.AddText("As you can see, the section is not on a new page. ");
oParagraph.AddText("If this section had some other type (nextPage, oddPage, evenPage), it would start a new page.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetType.docx");
builder.CloseFile();
