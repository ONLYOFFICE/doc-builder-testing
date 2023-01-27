builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oFooter;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This page first was with a footer. ");
oParagraph.AddText("Scroll down the page to see if it was removed.");
var oSection = oDocument.CreateSection(oParagraph);
oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is page footer #1. ");
oParagraph.AddText("You will not see it, as it will be removed.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a page with a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
oDocument.Push(oParagraph);
var oSection1 = oDocument.GetFinalSection();
oFooter = oSection1.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is page footer #2. ");
oParagraph.AddText("Only this footer can be seen, as the first one has been removed.");
oSection.RemoveFooter("default");
builder.SaveFile("docx", "RemoveFooter.docx");
builder.CloseFile();