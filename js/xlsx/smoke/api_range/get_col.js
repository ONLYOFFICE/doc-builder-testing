builder.CreateFile("xlsx");
    var oWorksheet = Api.GetActiveSheet();
    var oRange = oWorksheet.GetRange("D9").GetCol();
        oWorksheet.GetRange("A2").SetValue(oRange.toString());
builder.SaveFile("xlsx", "GetCol.xlsx");
builder.CloseFile();
