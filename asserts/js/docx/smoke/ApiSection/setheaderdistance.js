
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oHeader;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a header. ");
oParagraph.AddText("Scroll down the page to see it.");
var oSection = oDocument.GetFinalSection();
oHeader = oSection.GetHeader("default", true);
oSection.SetHeaderDistance(1440);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is a page header. ");
oParagraph.AddText("The distance from the page top to the header is 1 inch (1440 twentieths of a point).");
builder.SaveFile("docx", "SetHeaderDistance.docx");
builder.CloseFile();
            