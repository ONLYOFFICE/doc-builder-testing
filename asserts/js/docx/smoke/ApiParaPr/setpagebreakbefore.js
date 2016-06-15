
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr;
var oMyStyle = oDocument.CreateStyle("My document style");
oParaPr = oMyStyle.GetParaPr();
oParaPr.SetPageBreakBefore(true);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a page break before a paragraph. ");
oParagraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
oParagraph.AddText("Scroll down to the second page to see it. ");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it has page break before it enabled.");
oParagraph.SetStyle(oMyStyle);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetPageBreakBefore.docx");
builder.CloseFile();
            