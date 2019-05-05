function uploadFile() {
    require('isomorphic-fetch'); 
    var ACCESS_TOKEN = "I0Ng9kItu5AAAAAAAAAAHR16cYlxD2zh7tyDcSjg7cRFs0brDmSS088zp6kwqIEx";
    var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
    var fileInput = document.getElementById('folderInput');
    var file = fileInput.files[0];
    dbx.filesUpload({ path: '/' + file.name, contents: file })
        .then(function (response) {        
        console.log(response);
    })
        .catch(function (error) {
        console.error(error);
    });
    return false;
}
//# sourceMappingURL=upload.js.map