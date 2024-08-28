from python.docbuilder import builder
builder.CreateFile("docx")

context = builder.GetContext()
scope = context.CreateScope()
globalObj = context.GetGlobal()
api = globalObj["Api"]

document = api.Call("GetDocument")
paragraph = api.Call("CreateParagraph")
paragraph.Call("SetSpacingAfter", 1000, False)
paragraph.Call("AddText", "Hello, World!")

content = context.CreateArray(1)
content[0] = paragraph

document.Call("InsertContent", content)
builder.SaveFile("docx", "result.docx")
builder.CloseFile()