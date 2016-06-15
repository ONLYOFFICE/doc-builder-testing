
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oHeader;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This page first was with a header. ");
oParagraph.AddText("The header has been removed, you cannot see it. ");
oParagraph.AddText("Scroll down to the next page to see the header there.");
var oSection = oDocument.CreateSection(oParagraph);
oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is page header #1. ");
oParagraph.AddText("You will not see it, as it will be removed.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a page with a header. ");
oDocument.Push(oParagraph);
var oSection1 = oDocument.GetFinalSection();
oHeader = oSection1.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is page header #2. ");
oParagraph.AddText("Only this header can be seen, as the first one has been removed.");
oSection.RemoveHeader("default");
builder.SaveFile("docx", "RemoveHeader.docx");
builder.CloseFile();
            