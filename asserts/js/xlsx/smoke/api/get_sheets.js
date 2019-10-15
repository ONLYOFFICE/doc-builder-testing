builder.CreateFile("xlsx");
Api.AddSheet('new_sheet_name');
var sheets = Api.GetSheets();
var sheet_name1, sheet_name2;
sheet_name1 = sheets[0].GetName();
sheet_name2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheet_name1);
sheets[1].GetRange("A2").SetValue(sheet_name2);
builder.SaveFile("xlsx", "GetSheets.xlsx");
builder.CloseFile();
