
            builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr;
var oMyStyle = oDocument.CreateStyle("My document style");
oParaPr = oMyStyle.GetParaPr();
oParaPr.SetShd("clear", 0, 255, 0, false);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a shading to a paragraph. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.SetStyle(oMyStyle);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();
            