
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr, oTextPr, oRun;
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is the text in the default header");
oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(22);
oTextPr.SetLanguage("en-US");
oTextPr.SetFontFamily("Calibri");
oParaPr = oDocument.GetDefaultParaPr();
oParaPr.SetSpacingLine(276, "auto");
oParaPr.SetSpacingAfter(200);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a text in a paragraph.");
builder.SaveFile("docx", "GetFinalSection.docx");
builder.CloseFile();
            