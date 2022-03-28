//---------get file as list items along with 'FileRef' for download--------//
const s = 'Title,PropertyColumnName1,PropertyColumnName2,LKP/Title,LKP/Id,FileRef';
const e = 'LKP';

const items = await sp.web.lists.getByTitle('AssetNavigator').items.select(s).expand(e).get();// or getAll(itemsLimit:Number);
console.log(items);

//---------to download a file--------//
const url "http://spsite/_layouts/download.aspx?SourceUrl=http://spsite/Documents/sample.docx";

//--------- get all files in subfolder and inside a folder---------------------//
let getFiles = (folderUrl) => {
    sp.web.getFolderByServerRelativeUrl(folderUrl)
        .expand("Folders, Files").get().then(r => {
            r.Folders.forEach(item => {
                getFiles(item.ServerRelativeUrl);
            })
            r.Files.forEach(item => {
                console.log(item.ServerRelativeUrl);
            })
        });
}

getFiles("/Style Library");
