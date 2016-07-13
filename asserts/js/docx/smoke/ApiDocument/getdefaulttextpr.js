builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr;
oParagraph = oDocument.GetElement(0);
oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetLanguage("en-US");
oTextPr.SetFontFamily("Comic Sans MS");
oParagraph.AddText("This is just a text.");
builder.SaveFile("docx", "GetDefaultTextPr.docx");
builder.CloseFile();
            