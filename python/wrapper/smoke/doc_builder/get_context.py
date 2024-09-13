from python.docbuilder import builder
builder.CreateFile("docx")
context = builder.GetContext()
scope = context.CreateScope()
globalObj = context.GetGlobal()
builder.SaveFile("docx", "GetContext.docx")
builder.CloseFile()
