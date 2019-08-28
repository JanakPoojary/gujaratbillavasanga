function doGet() {
  var ss=SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1yTfeIFU3-WB9MFjW-PfCWQvcem2r5C6HZbYC0Wq6GRQ/edit#gid=27408382');
  var sheet=ss.getSheetByName('GBU');
  return getUsers(sheet);
}

function getUsers(sheet){
  var jo={};
  var dataArray=[];
  var rows= sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues();
  for(var i=0,l=rows.length;i<l;i++){
    var dataRow=rows[i];
    var record={};
    record['Name']=dataRow[1];
    record['Post']=dataRow[2];
    record['Location']=dataRow[3];
    record['Contact']=dataRow[4];
    record['Tag']=dataRow[5];
    dataArray.push(record);
        }
  jo.person=dataArray;
  var result=JSON.stringify(jo);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);

}
