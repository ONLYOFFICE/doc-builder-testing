
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr;
var oMyStyle = oDocument.CreateStyle("My document style");
oParaPr = oMyStyle.GetParaPr();
oParaPr.SetContextualSpacing(true);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetContextualSpacing.docx");
builder.CloseFile();
            