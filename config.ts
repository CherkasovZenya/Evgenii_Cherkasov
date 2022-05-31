export class Config
{
    //Auth
    public static readonly tokenType : string  = "Bearer";
    public static readonly token : string = "sl.BIoSy7I4FtvvpBUYuto6P0Q0jlLvvC-jvMl8ebs25rXqIl9DR5xRhFpaUIOUesh_BZ5stNTyKDMnUhoDchV_ERUxp5HfzlSMV7k3rTpmZV59KzrwJ78m7H4-WfSDx9idtDy-o9Bpu-OS";

    //File
    public static readonly cloudPath : string = "/WebAPI/meWithAnton.jpg";
    public static readonly localPath : string = "/resources/meWithAnton.jpg";

    //Upload
    public static readonly uploadFileURL : string = "https://content.dropboxapi.com/2/files/upload";

    //GetFileMetadata
    public static readonly getFileMetadataURL : string  = "https://api.dropboxapi.com/2/files/get_metadata";

    //DeleteFile
    public static readonly deleteFileURL : string  = "https://api.dropboxapi.com/2/files/delete_v2";
}